import assert from "node:assert/strict";
import { parseHTML } from "linkedom";
import { ALL_ROUTES, getSeo } from "../src/seo";
const flag = process.argv.indexOf("--base");
const base = flag >= 0 ? process.argv[flag + 1] : "http://127.0.0.1:3002";
let checked = 0;
for (let i = 0; i < ALL_ROUTES.length; i += 6) {
  await Promise.all(
    ALL_ROUTES.slice(i, i + 6).map(async (route) => {
      const response = await fetch(base + route, { redirect: "manual" });
      assert.equal(response.status, 200, `${route} status`);
      const { document } = parseHTML(await response.text());
      assert.equal(
        document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
        getSeo(route).canonical,
        `${route} canonical`,
      );
      assert.equal(document.querySelectorAll("h1").length, 1, `${route} H1`);
      checked++;
    }),
  );
}
for (const route of [
  "/not-a-page",
  "/articles/nonexistent",
  "/geo/unknown/b2b-saas-tech",
  "/geo/uae/not-an-industry",
]) {
  const response = await fetch(base + route, { redirect: "manual" });
  assert.equal(response.status, 404, `${route} must return HTTP 404`);
}
for (const route of ["/platform/", "/platform/index.html", "/index.html"]) {
  const response = await fetch(base + route, { redirect: "manual" });
  const clean = route === "/index.html" ? "/" : "/platform";
  if (response.status === 301 || response.status === 308) {
    assert.equal(new URL(response.headers.get("location")!, base).pathname, clean);
  } else {
    // Render can serve an existing index file before applying redirect rules.
    assert.equal(response.status, 200, `${route} must resolve or redirect`);
    const { document } = parseHTML(await response.text());
    assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), getSeo(clean).canonical, `${route} must canonicalize to the clean URL`);
    console.log(`${route}: served directly with the correct canonical (host behaviour).`);
  }
}
for (const asset of [
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.svg",
  "/assets/social-preview.png",
  "/assets/neha-jakhar.png",
]) {
  assert.equal(
    (await fetch(base + asset)).status,
    200,
    `${asset} must resolve`,
  );
}
console.log(
  `HTTP checks passed: ${checked} pages, 4 missing-page cases, 3 canonical URL variants and 5 crawl/image assets.`,
);
