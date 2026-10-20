import React from "react";
import { ArrowUpRight } from "lucide-react";
import { COUNTRIES, INDUSTRIES } from "../data/geoData";
export const Footer = ({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) => {
  const link = (label: string, path: string) => (
    <a
      key={path}
      href={path}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        onNavigate(path);
        window.scrollTo(0, 0);
      }}
    >
      {label}
    </a>
  );
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-grid">
          <div className="footer-intro">
            <a
              href="/"
              className="wordmark"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/");
                window.scrollTo(0, 0);
              }}
            >
              prezlo<span>.</span>
            </a>
            <p>
              A clearer picture of your brand
              <br />
              in AI search. A plan to move it forward.
            </p>
            <a className="text-link" href="https://prezlo.io/">
              Explore prezlo.io <ArrowUpRight size={15} />
            </a>
          </div>
          <div>
            <h3>Platform</h3>
            {link("How it works", "/platform")}
            {link("For agencies", "/for-agencies")}
            {link("For brands", "/for-brands")}
            {link("Pricing", "/pricing")}
          </div>
          <div>
            <h3>Learn</h3>
            {link("Articles & guides", "/articles")}
            {link("The GEO framework", "/geo-framework")}
            {link("AI visibility vs. SEO", "/ai-visibility-vs-seo")}
            {link("All solutions", "/solutions")}
            {link("About Prezlo", "/about")}
            {link("Editorial policy", "/editorial-policy")}
            {link("Contact", "/contact")}
          </div>
          <div>
            <h3>Markets</h3>
            {COUNTRIES.map((c) =>
              link(c.name, `/geo/${c.id}/real-estate-agency`),
            )}
          </div>
          <div>
            <h3>Industries</h3>
            {INDUSTRIES.map((i) => link(i.shortName, `/geo/uae/${i.id}`))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Try Prezlo. Built in Dubai, for a
            global market.
          </span>
          <div>
            <a href="https://prezlo.io/">Visit Prezlo</a>
            <a href="mailto:support@prezlo.io">
              Get in touch <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
