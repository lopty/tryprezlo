import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getSeo } from "../seo";
export function InternalLink({
  path,
  onNavigate,
  children,
  className,
}: {
  path: string;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={path}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        onNavigate(path);
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </a>
  );
}
export function Breadcrumbs({
  items,
  onNavigate,
}: {
  items: { name: string; path?: string }[];
  onNavigate: (path: string) => void;
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <InternalLink path="/" onNavigate={onNavigate}>
            Home
          </InternalLink>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            {item.path ? (
              <InternalLink path={item.path} onNavigate={onNavigate}>
                {item.name}
              </InternalLink>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function RelatedLinks({
  paths,
  onNavigate,
  title = "Keep exploring",
}: {
  paths: string[];
  onNavigate: (path: string) => void;
  title?: string;
}) {
  return (
    <section className="related-links">
      <h2>{title}</h2>
      <div>
        {paths.map((path) => (
          <InternalLink key={path} path={path} onNavigate={onNavigate}>
            <span>{getSeo(path).label}</span>
            <ArrowUpRight size={15} />
          </InternalLink>
        ))}
      </div>
    </section>
  );
}
export function ProductCTA() {
  return (
    <section className="editorial-cta">
      <div>
        <h2>Turn the finding into a next step.</h2>
        <p>Explore Prezlo for measurement, research and execution.</p>
      </div>
      <a className="button-primary" href="https://prezlo.io/">
        Try Prezlo <ArrowUpRight size={16} />
      </a>
      <small>
        14-day Pro trial. Card required. Cancel before it ends to avoid a
        charge.
      </small>
    </section>
  );
}
export function NotFound({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <div className="editorial-page section-shell">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>This page could not be found.</h1>
      <p>Check the address or explore the guides and product overview.</p>
      <InternalLink path="/" onNavigate={onNavigate} className="button-primary">
        Back to home <ArrowRight size={16} />
      </InternalLink>
      <RelatedLinks
        paths={["/platform", "/articles", "/solutions"]}
        onNavigate={onNavigate}
      />
    </div>
  );
}
