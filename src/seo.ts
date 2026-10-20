import { BLOG_POSTS } from "./data/blogData";
import { CORE_PAGES } from "./data/corePages";
import { COUNTRIES, INDUSTRIES, getGeoSegment } from "./data/geoData";
export const SITE_URL = "https://tryprezlo.com";
export const SITE_DATE = "2026-10-20";
export const SITE_IMAGE = SITE_URL + "/assets/social-preview.png";
export const ALL_ROUTES = [
  "/",
  ...CORE_PAGES.map((p) => p.path),
  "/articles",
  "/solutions",
  ...BLOG_POSTS.map((p) => "/articles/" + p.slug),
  ...COUNTRIES.flatMap((c) => INDUSTRIES.map((i) => `/geo/${c.id}/${i.id}`)),
];
export const normalizePath = (path: string) =>
  path
    .split(/[?#]/)[0]
    .replace(/\/{2,}/g, "/")
    .replace(/\/+$/, "") || "/";
export interface SeoMeta {
  path: string;
  title: string;
  description: string;
  label: string;
  canonical: string;
  exists: boolean;
  image: string;
  type: string;
  breadcrumbs: { name: string; path: string }[];
  alternates: { language: string; href: string }[];
  schema: Record<string, unknown>;
}
export function getSeo(input: string): SeoMeta {
  const path = normalizePath(input);
  const canonical = SITE_URL + (path === "/" ? "/" : path);
  const exists = ALL_ROUTES.includes(path);
  const core = CORE_PAGES.find((p) => p.path === path);
  const post = BLOG_POSTS.find((p) => "/articles/" + p.slug === path);
  const [, kind, countryId, industryId] = path.split("/");
  const country =
    kind === "geo" ? COUNTRIES.find((c) => c.id === countryId) : undefined;
  const industry =
    kind === "geo" ? INDUSTRIES.find((i) => i.id === industryId) : undefined;
  let title = "AI Visibility & GEO Optimization for Agencies & Brands | Prezlo";
  let description =
    "Understand how AI describes your brand, find gaps in content and sources, and turn insights into action. Explore Prezlo for agencies and brands.";
  let label = "Try Prezlo";
  let type = "WebPage";
  const breadcrumbs = [{ name: "Home", path: "/" }];
  const alternates: SeoMeta["alternates"] = [];
  if (core) {
    title = core.title;
    description = core.description;
    label = core.label;
    type =
      path === "/about"
        ? "AboutPage"
        : path === "/contact"
          ? "ContactPage"
          : "WebPage";
  } else if (path === "/articles") {
    title = "AI Visibility & GEO Guides | Try Prezlo";
    description =
      "Practical guides to AI visibility, GEO, source research and measurement. Explore worked examples, editorial checklists and the people behind Prezlo.";
    label = "Articles & guides";
    type = "CollectionPage";
  } else if (path === "/solutions") {
    title = "AI Visibility by Country & Industry | Prezlo Solutions";
    description =
      "Explore AI visibility planning guides for six countries and global markets, across real estate, healthcare, law, finance, SaaS and hospitality.";
    label = "Markets & industries";
    type = "CollectionPage";
  } else if (post) {
    title = post.title + " | Try Prezlo";
    description = post.excerpt;
    label = post.title;
    breadcrumbs.push({ name: "Articles & guides", path: "/articles" });
  } else if (country && industry && exists) {
    const seg = getGeoSegment(countryId, industryId);
    title = `${industry.shortName} AI Visibility in ${country.name} | Prezlo`;
    description = `Plan AI visibility for ${industry.name.toLowerCase()} in ${country.name}. Local scope, buyer questions, evidence checklist and a practical audit worksheet.`;
    label = `${country.name} · ${industry.shortName}`;
    breadcrumbs.push({ name: "Markets & industries", path: "/solutions" });
    COUNTRIES.forEach((c) =>
      alternates.push({
        language: c.locale,
        href: `${SITE_URL}/geo/${c.id}/${industry.id}`,
      }),
    );
    alternates.push({
      language: "x-default",
      href: `${SITE_URL}/geo/global/${industry.id}`,
    });
  } else if (!exists) {
    title = "Page Not Found | Try Prezlo";
    description =
      "This page could not be found. Explore the AI visibility guides and product overview on Try Prezlo.";
    label = "Page not found";
  }
  if (path !== "/") breadcrumbs.push({ name: label, path });
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Try Prezlo",
      url: SITE_URL + "/",
      sameAs: ["https://prezlo.io/"],
      email: "support@prezlo.io",
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL + "/",
      name: "Try Prezlo",
      publisher: { "@id": SITE_URL + "/#organization" },
      inLanguage: "en",
    },
  ];
  const page: Record<string, unknown> = {
    "@type": type,
    "@id": canonical + "#webpage",
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": SITE_URL + "/#website" },
    inLanguage: "en",
    publisher: { "@id": SITE_URL + "/#organization" },
  };
  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": canonical + "#breadcrumb",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: SITE_URL + (b.path === "/" ? "/" : b.path),
      })),
    });
    page.breadcrumb = { "@id": canonical + "#breadcrumb" };
  }
  if (post) {
    if (["lopty-pascal", "neha-jakhar"].includes(post.slug)) {
      page["@type"] = "ProfilePage";
      page.mainEntity = {
        "@type": "Person",
        name: post.slug === "lopty-pascal" ? "Lopty Pascal" : "Neha Jakhar",
        url:
          post.slug === "lopty-pascal"
            ? "https://loptypascal.com/"
            : "http://nehajakhar.com/",
        jobTitle:
          post.slug === "lopty-pascal"
            ? "Technical co-founder and Head of Engineering and Infrastructure"
            : "Co-founder and Head of Market Growth",
        image:
          SITE_URL +
          (post.slug === "lopty-pascal"
            ? "/assets/aistudio/lopty-pascal_8b18be27.webp"
            : "/assets/neha-jakhar.png"),
        worksFor: {
          "@type": "Organization",
          name: "Prezlo",
          url: "https://prezlo.io/",
        },
      };
    } else {
      graph.push({
        "@type": "BlogPosting",
        "@id": canonical + "#article",
        headline: post.title,
        description: post.excerpt,
        datePublished:
          new Date(post.publishedDate + " 00:00:00 GMT")
            .toISOString()
            .slice(0, 10) + "T00:00:00+04:00",
        ...(post.modifiedDate
          ? { dateModified: post.modifiedDate + "T00:00:00+04:00" }
          : {}),
        author: {
          "@type":
            post.author.name === "Try Prezlo Editorial"
              ? "Organization"
              : "Person",
          name: post.author.name,
          url: post.author.websiteUrl || SITE_URL + "/editorial-policy",
        },
        publisher: { "@id": SITE_URL + "/#organization" },
        mainEntityOfPage: { "@id": canonical + "#webpage" },
        image: [SITE_IMAGE],
        inLanguage: "en",
      });
      page.mainEntity = { "@id": canonical + "#article" };
    }
  }
  if (path === "/articles")
    page.mainEntity = {
      "@type": "ItemList",
      itemListElement: BLOG_POSTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: SITE_URL + "/articles/" + p.slug,
        name: p.title,
      })),
    };
  if (path === "/solutions")
    page.mainEntity = {
      "@type": "ItemList",
      itemListElement: COUNTRIES.flatMap((c) =>
        INDUSTRIES.map((i) => ({
          name: `${c.name}: ${i.name}`,
          url: `${SITE_URL}/geo/${c.id}/${i.id}`,
        })),
      ).map((p, i) => ({ "@type": "ListItem", position: i + 1, ...p })),
    };
  graph.push(page);
  return {
    path,
    title,
    description,
    label,
    canonical,
    exists,
    image: SITE_IMAGE,
    type: post ? "article" : "website",
    breadcrumbs,
    alternates,
    schema: { "@context": "https://schema.org", "@graph": graph },
  };
}
export const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export const safeJson = (v: unknown) =>
  JSON.stringify(v).replace(/</g, "\\u003c");
export function renderSeoHead(meta: SeoMeta, noindex = false) {
  const tag = (name: string, value: string, property = false) =>
    `<meta data-seo ${property ? "property" : "name"}="${name}" content="${escapeHtml(value)}">`;
  return `<title data-seo>${escapeHtml(meta.title)}</title>\n${tag("description", meta.description)}\n${tag("robots", !meta.exists || noindex ? "noindex,follow" : "index,follow,max-image-preview:large")}\n<link data-seo rel="canonical" href="${escapeHtml(meta.canonical)}">\n${meta.alternates.map((a) => `<link data-seo rel="alternate" hreflang="${a.language}" href="${escapeHtml(a.href)}">`).join("\n")}\n${tag("og:title", meta.title, true)}\n${tag("og:description", meta.description, true)}\n${tag("og:type", meta.type, true)}\n${tag("og:url", meta.canonical, true)}\n${tag("og:site_name", "Try Prezlo", true)}\n${tag("og:locale", "en_US", true)}\n${tag("og:image", meta.image, true)}\n${tag("og:image:width", "1200", true)}\n${tag("og:image:height", "630", true)}\n${tag("og:image:alt", "Prezlo: understand your brand in AI search", true)}\n${tag("twitter:card", "summary_large_image")}\n${tag("twitter:title", meta.title)}\n${tag("twitter:description", meta.description)}\n${tag("twitter:image", meta.image)}\n<script data-seo type="application/ld+json">${safeJson(meta.schema)}</script>`;
}
export function updateSeoHead(path: string) {
  const markup = renderSeoHead(
    getSeo(path),
    Boolean(import.meta.env?.DEV) ||
      document.documentElement.dataset.siteIndexable === "false",
  );
  const parsed = new DOMParser().parseFromString(markup, "text/html");
  document.head.querySelectorAll("[data-seo]").forEach((n) => n.remove());
  [...parsed.head.children].forEach((n) => document.head.appendChild(n));
}
