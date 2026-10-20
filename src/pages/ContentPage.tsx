import React from "react";
import type { CorePage } from "../data/corePages";
import { Breadcrumbs, ProductCTA, RelatedLinks } from "../components/Editorial";
import { FaqSection } from "../components/FaqSection";
export function ContentPage({
  page,
  onNavigate,
}: {
  page: CorePage;
  onNavigate: (path: string) => void;
}) {
  return (
    <div className="editorial-page section-shell">
      <Breadcrumbs items={[{ name: page.label }]} onNavigate={onNavigate} />
      <header className="editorial-header">
        <span className="eyebrow">{page.label}</span>
        <h1>{page.heading}</h1>
        <p>{page.intro}</p>
      </header>
      <div className="prose-layout">
        <article>
          {page.sections.map((s, i) => (
            <section key={s.heading} id={`section-${i + 1}`}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
              {s.items && (
                <ul>
                  {s.items.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {page.path === "/about" && (
            <p>
              <a href="https://loptypascal.com/">Lopty Pascal’s website</a> ·{" "}
              <a href="http://nehajakhar.com/">Neha Jakhar’s website</a>
            </p>
          )}
          {page.path === "/contact" && (
            <p>
              <a href="mailto:support@prezlo.io">Email support@prezlo.io</a>
            </p>
          )}
          <p className="source-note-text">
            Product reference:{" "}
            <a
              href={
                page.path === "/pricing"
                  ? "https://prezlo.io/pricing"
                  : "https://prezlo.io/"
              }
            >
              {page.path === "/pricing"
                ? "Official pricing and plan terms"
                : "Official Prezlo website"}
            </a>
            . See our{" "}
            <a
              href="/editorial-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/editorial-policy");
                window.scrollTo(0, 0);
              }}
            >
              editorial policy
            </a>
            .
          </p>
        </article>
        <aside className="page-contents">
          <span className="eyebrow">ON THIS PAGE</span>
          {page.sections.map((s, i) => (
            <a key={s.heading} href={`#section-${i + 1}`}>
              {s.heading}
            </a>
          ))}
          <a className="text-link" href="https://prezlo.io/">
            Explore Prezlo ↗
          </a>
        </aside>
      </div>
      <RelatedLinks paths={page.related} onNavigate={onNavigate} />
      <ProductCTA />
      <FaqSection faqs={page.faqs} />
    </div>
  );
}
