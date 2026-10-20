import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { parseHTML } from "linkedom";
import { ALL_ROUTES, getSeo, SITE_URL } from "../src/seo";
import { BLOG_POSTS } from "../src/data/blogData";
import protectedHashes from "./protected-content-hashes.json";
const root = path.resolve("dist");
const renderConfig = (await readFile('render.yaml', 'utf8')).replace(/\r/g, '');
assert.ok(renderConfig.includes('runtime: static'), 'Render must deploy the static HTML output');
assert.ok(!/^\s*source:\s*["']?\/\*["']?\s*$/m.test(renderConfig), 'Render must not contain a catch-all SPA rewrite');
for (const route of ALL_ROUTES.filter(r => r !== '/')) {
  assert.ok(renderConfig.includes(`source: ${route}\n`), `Render mapping missing for ${route}; run npm run config:render`);
}
const errors: string[] = [];
const warnings: string[] = [];
const titles = new Set<string>();
const descriptions = new Set<string>();
const inbound = new Map(ALL_ROUTES.map((p) => [p, new Set<string>()]));
const documents = new Map<string, ReturnType<typeof parseHTML>["document"]>();
function check(value: unknown, message: string) {
  if (!value) errors.push(message);
}
for (const route of ALL_ROUTES) {
  const file = path.join(
    root,
    route === "/" ? "index.html" : route.slice(1) + "/index.html",
  );
  const html = await readFile(file, "utf8");
  const { document } = parseHTML(html);
  documents.set(route, document);
  const meta = getSeo(route);
  const title = document.querySelector("title")?.textContent || "";
  const description =
    document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content") || "";
  check(title === meta.title, `${route}: title mismatch`);
  check(!titles.has(title), `${route}: duplicate title`);
  titles.add(title);
  check(description === meta.description, `${route}: description mismatch`);
  check(!descriptions.has(description), `${route}: duplicate description`);
  descriptions.add(description);
  check(
    document.querySelectorAll("h1").length === 1,
    `${route}: expected one H1`,
  );
  check(
    document.querySelectorAll("main").length === 1,
    `${route}: expected one main landmark`,
  );
  check(
    document.querySelectorAll('link[rel="canonical"]').length === 1,
    `${route}: canonical count`,
  );
  check(
    document.querySelector('link[rel="canonical"]')?.getAttribute("href") ===
      meta.canonical,
    `${route}: canonical mismatch`,
  );
  check(
    document
      .querySelector('meta[property="og:url"]')
      ?.getAttribute("content") === meta.canonical,
    `${route}: Open Graph URL mismatch`,
  );
  check(
    document.querySelector('meta[name="robots"]')?.getAttribute("content") ===
      "index,follow,max-image-preview:large",
    `${route}: unexpected noindex`,
  );
  check(
    (document.querySelector("#main-content")?.textContent?.length || 0) > 500,
    `${route}: missing initial HTML content`,
  );
  check(
    document.documentElement.getAttribute("lang") === "en",
    `${route}: missing language`,
  );
  for (const script of document.querySelectorAll(
    'script[type="application/ld+json"]',
  )) {
    try {
      const data = JSON.parse(script.textContent || "");
      check(
        data["@context"] === "https://schema.org",
        `${route}: schema context`,
      );
      check(
        data["@graph"]?.some(
          (n: Record<string, unknown>) =>
            n["@id"] === meta.canonical + "#webpage",
        ),
        `${route}: missing WebPage`,
      );
    } catch {
      errors.push(`${route}: invalid JSON-LD`);
    }
  }
  check(
    document.querySelectorAll('script[type="application/ld+json"]').length ===
      1,
    `${route}: expected consolidated schema graph`,
  );
  for (const image of document.querySelectorAll("img")) {
    const src = image.getAttribute("src");
    check(image.hasAttribute("alt"), `${route}: image missing alt`);
    if (src?.startsWith("/")) {
      try {
        await stat(path.join(root, src));
      } catch {
        errors.push(`${route}: missing image ${src}`);
      }
    }
  }
  for (const link of document.querySelectorAll("a[href]")) {
    const href = link.getAttribute("href")!;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    let url: URL;
    try {
      url = new URL(href, SITE_URL + route);
    } catch {
      errors.push(`${route}: invalid href ${href}`);
      continue;
    }
    if (url.origin !== SITE_URL) continue;
    if (ALL_ROUTES.includes(url.pathname)) {
      if (url.pathname !== route) inbound.get(url.pathname)!.add(route);
    } else {
      try {
        await stat(path.join(root, url.pathname));
      } catch {
        errors.push(`${route}: broken internal link ${href}`);
      }
    }
    if (url.hash && url.pathname === route)
      check(
        document.getElementById(decodeURIComponent(url.hash.slice(1))),
        `${route}: broken fragment ${href}`,
      );
  }
  for (const a of meta.alternates) {
    const target = getSeo(new URL(a.href).pathname);
    check(target.exists, `${route}: alternate not found`);
    check(
      target.alternates.some((v) => v.href === meta.canonical),
      `${route}: alternate not reciprocal`,
    );
  }
  const protectedPost = BLOG_POSTS.find(
    (p) => "/articles/" + p.slug === route && p.slug in protectedHashes,
  );
  if (protectedPost) {
    check(
      createHash("sha256")
        .update(JSON.stringify(protectedPost))
        .digest("hex") ===
        protectedHashes[protectedPost.slug as keyof typeof protectedHashes],
      `${route}: protected content changed`,
    );
    for (const section of protectedPost.content.sections) {
      check(
        document.body.textContent!.includes(section.heading),
        `${route}: protected heading missing`,
      );
    }
  }
  if (title.length > 95)
    warnings.push(
      `${route}: long editorial title retained (${title.length} characters)`,
    );
}
for (const [route, links] of inbound)
  check(route === "/" || links.size > 0, `${route}: orphan page`);
const crawl = new Set<string>();
const queue = ["/"];
while (queue.length) {
  const route = queue.shift()!;
  if (crawl.has(route)) continue;
  crawl.add(route);
  const doc = documents.get(route);
  if (!doc) continue;
  for (const anchor of doc.querySelectorAll("a[href]")) {
    const url = new URL(anchor.getAttribute("href")!, SITE_URL + route);
    if (
      url.origin === SITE_URL &&
      ALL_ROUTES.includes(url.pathname) &&
      !crawl.has(url.pathname)
    )
      queue.push(url.pathname);
  }
}
check(
  crawl.size === ALL_ROUTES.length,
  `Only ${crawl.size}/${ALL_ROUTES.length} pages reachable from homepage HTML`,
);
const sitemap = await readFile(path.join(root, "sitemap.xml"), "utf8");
const xml = parseHTML(sitemap).document;
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check(locations.length === ALL_ROUTES.length, "Sitemap URL count mismatch");
check(new Set(locations).size === locations.length, "Sitemap duplicate URLs");
for (const r of ALL_ROUTES)
  check(locations.includes(getSeo(r).canonical), `Missing sitemap URL ${r}`);
check(
  (await readFile(path.join(root, "robots.txt"), "utf8")).includes(
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ),
  "robots.txt sitemap declaration missing",
);
const notfound = parseHTML(
  await readFile(path.join(root, "404.html"), "utf8"),
).document;
check(
  notfound.querySelector('meta[name="robots"]')?.getAttribute("content") ===
    "noindex,follow",
  "404 page must be noindex",
);
check(
  notfound.querySelector("h1")?.textContent?.includes("could not be found"),
  "404 must show missing page",
);
check(
  !getSeo("/articles/nonexistent").exists,
  "Unknown article must not exist",
);
check(
  !getSeo("/geo/unknown/b2b-saas-tech").exists,
  "Unknown country must not exist",
);
check(!getSeo("/geo/uae/unknown").exists, "Unknown industry must not exist");
const image = await readFile(path.join(root, "assets/social-preview.png"));
check(
  image.readUInt32BE(16) === 1200 && image.readUInt32BE(20) === 630,
  "Social image must be 1200 x 630",
);
const summary = {
  pages: ALL_ROUTES.length,
  articles: BLOG_POSTS.length,
  regionalGuides: ALL_ROUTES.filter((r) => r.startsWith("/geo/")).length,
  reachablePages: crawl.size,
  protectedArticlesVerified: Object.keys(protectedHashes).length,
  errors,
  warnings,
};
await writeFile("seo-validation.json", JSON.stringify(summary, null, 2) + "\n");
console.log(JSON.stringify(summary, null, 2));
assert.equal(errors.length, 0, "SEO checks failed");
