# Try Prezlo

A React/Vite marketing site with 75 prerendered HTML pages: 12 main pages, 21 articles and profiles, and 42 market/industry guides. Product accounts and billing live on https://prezlo.io/.

## Run and verify

Use Node 24.14.1 and the committed npm lockfile.

```sh
npm ci --include=dev
npm run dev
npm run typecheck
npm run build
npm run check:seo
npm run preview
npm run check:http
```

The production preview defaults to http://127.0.0.1:3002/. The Vite development preview intentionally uses noindex metadata. The build creates readable HTML before JavaScript, then hydrates it for filters and navigation. Use the production preview for SEO checks.

## Deploy to Render

`render.yaml` defines a Static Site, with `dist` as the publish directory. Import it as a Blueprint, or apply these settings to an existing Static Site:

- Build: `npm ci --include=dev && npm run typecheck && npm run build && npm run check:seo`
- Publish directory: `dist`
- Node: `24.14.1`
- Custom domain: `tryprezlo.com`
- Set `SKIP_INSTALL_DEPS=true` when using the explicit npm ci command.
- Apply the route and response-header rules from render.yaml.
- Remove an old `/* -> /index.html` SPA rewrite. Render preserves existing rules omitted from a Blueprint. A catch-all rewrite would turn missing URLs into misleading success responses.
- Keep unknown paths as HTTP 404. `404.html` is supplied as the missing-page document; confirm the host's actual response after deployment.

All canonicals, social URLs, sitemaps and regional alternates use https://tryprezlo.com. Render handles HTTPS and adds a www-to-apex redirect when the apex domain is configured. Follow the dashboard's exact DNS instructions and verify the domain and certificate. Do not invent DNS values from this repository.

Render serves existing files before redirect rules. If `/index.html` is served rather than redirected, its canonical still points to the clean route. Verify trailing-slash behaviour on the live host. The local preview's explicit 301 redirects are not proof of Render's edge behaviour.

After adding or removing routes, run `npm run config:render` and commit the Blueprint with the content. For staging, set `SEO_NOINDEX=true`; this is carried into client navigation. Leave it unset in production. Once the custom domain works, disable the default onrender.com subdomain if it is not needed. Do not disable it before the domain is ready.

Render references:

- https://render.com/docs/static-sites
- https://render.com/docs/redirects-rewrites
- https://render.com/docs/custom-domains
- https://render.com/docs/blueprint-spec

## SEO architecture

- `src/seo.ts`: route inventory, unique metadata, canonicals, social cards, breadcrumbs and JSON-LD.
- `scripts/prerender.tsx`: HTML for every valid route, plus sitemap.xml, robots.txt and 404.html.
- `src/data/corePages.ts`: positioning, current price snapshot, buyer guidance, about and editorial policies.
- `src/data/blogData.ts`: practical guides and primary references.
- `src/data/preservedArticles.json`: unchanged Lopty Pascal profile and Top 10 Dubai experts article. Complete content is protected by hashes in `scripts/protected-content-hashes.json`.
- `src/data/geoData.ts`: six country contexts plus global, six industry checklists and specific regional guidance. Example prompts are not volume research or client results.
- `scripts/check-seo.ts`: parses all pages and checks initial HTML, metadata, links, schema, images, reachability, regional alternates and protected content.
- `scripts/check-http.ts`: checks actual page responses, missing pages, redirects and discovery assets.

No invented aggregate ratings, awards, local offices, regulatory authorisations or offers are added to structured data. Native HTML FAQs remain usable without JavaScript; their presence does not imply eligibility for Google FAQ rich results. No keyword meta tag or AI-specific ranking file is used.

Hreflang connects corresponding industry guides across countries, including a global English version and x-default. Each is self-canonical. Different industry topics are not labelled as translations. Sitemap dates come only from explicitly revised guides, not from each build. Protected articles retain their original wording and publication dates.

## Measurement and launch

Outbound product links emit a local browser event, `prezlo:outbound`, with `product_outbound_click`, page path, destination and link text. No analytics account, cookies or external tracking requests are configured. An outbound click is not a signup. Cross-domain attribution requires access to both properties, appropriate consent and testing.

Live steps still requiring the hosting/domain owner:

1. Deploy to Render and verify DNS, HTTPS and www-to-apex behaviour.
2. Verify the domain in Google Search Console and Bing Webmaster Tools using the actual verification tokens they provide.
3. Submit https://tryprezlo.com/sitemap.xml and inspect the home, guide, profile and regional page types.
4. Confirm status codes, canonicals and crawl access on the live domain. Run `npm run check:http -- --base https://tryprezlo.com`; inspect differences in existing-file redirect handling rather than adding a catch-all rewrite.
5. Run live structured-data and performance checks. A local or Lighthouse result is not field Core Web Vitals data; field measurement needs actual visitors over time.
6. Connect the correct analytics property with consent handling, verify completed conversions, and establish a search and qualified-enquiry baseline.
7. Monitor indexing, relevant queries and product outcomes. Improve observed gaps; rankings and sitelinks cannot be guaranteed.

No production deployment, DNS change, Search Console submission or analytics integration has been performed from this checkout.
