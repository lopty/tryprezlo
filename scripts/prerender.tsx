import React from "react";
import { renderToString } from "react-dom/server";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import App from "../src/App";
import { ALL_ROUTES, getSeo, renderSeoHead, SITE_URL } from "../src/seo";
import { BLOG_POSTS } from "../src/data/blogData";
const output = path.resolve("dist");
const template = await readFile(path.join(output, "index.html"), "utf8");
const render = (route: string) =>
  template
    .replace(
      '<html lang="en">',
      `<html lang="en" data-site-indexable="${process.env.SEO_NOINDEX === "true" ? "false" : "true"}">`,
    )
    .replace(
      /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
      `<!--seo:start-->\n${renderSeoHead(getSeo(route), process.env.SEO_NOINDEX === "true")}\n<!--seo:end-->`,
    )
    .replace(
      '<div id="root"></div>',
      () =>
        `<div id="root">${renderToString(<App initialPath={route} />)}</div>`,
    );
for (const route of ALL_ROUTES) {
  const folder = path.join(output, route === "/" ? "" : route.slice(1));
  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, "index.html"), render(route));
}
await writeFile(path.join(output, "404.html"), render("/404"));
const escape = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const sitemap = ALL_ROUTES.map((route) => {
  const meta = getSeo(route);
  const article = BLOG_POSTS.find((p) => "/articles/" + p.slug === route);
  const lastmod = article?.modifiedDate;
  return `<url><loc>${escape(meta.canonical)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}${meta.alternates.map((a) => `<xhtml:link rel="alternate" hreflang="${a.language}" href="${escape(a.href)}"/>`).join("")}</url>`;
}).join("\n");
await writeFile(
  path.join(output, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap}\n</urlset>\n`,
);
await writeFile(
  path.join(output, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);
await writeFile(
  path.join(output, "route-manifest.json"),
  JSON.stringify(ALL_ROUTES),
);
// Static-host headers and redirects. No blanket SPA fallback: unknown paths must be 404.
await writeFile(
  path.join(output, "_redirects"),
  ALL_ROUTES.filter((r) => r !== "/")
    .map(
      (r) =>
        `${r}/ ${r} 301\n${r}/index.html ${r} 301\n${r} ${r}/index.html 200`,
    )
    .join("\n") + "\n/index.html / 301\n",
);
await writeFile(
  path.join(output, "_headers"),
  "/assets/*\n  X-Content-Type-Options: nosniff\n/*.html\n  Cache-Control: public, max-age=0, must-revalidate\n",
);
console.log(
  `Prerendered ${ALL_ROUTES.length} pages, sitemap.xml, robots.txt and a noindex 404 page.`,
);
