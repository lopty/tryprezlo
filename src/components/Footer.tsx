import React from "react";
import { COUNTRIES, INDUSTRIES } from "../data/geoData";
import { ExternalLink } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner to try prezlo.io */}
      <div className="border-b border-slate-800 bg-slate-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] font-mono text-orange-400 font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Autonomous Multi-Model Indexing
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to verify your brand across ChatGPT, Perplexity, and Gemini?
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Agencies and brands use Prezlo to capture dominant Share of Model, eliminate hallucinations, and automate AI citations.
            </p>
          </div>
          <a
            href="http://prezlo.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-prezlo-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl shrink-0"
          >
            <span>Start Free Trial on Prezlo.io</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Wordmark & Identity */}
          <div className="col-span-2">
            <a
              href="/"
              onClick={(e) => handleNav("/", e)}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF5500] to-[#FFA040] flex items-center justify-center text-white font-bold text-sm font-mono">
                P
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                Prezlo
              </span>
            </a>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-sm">
              Identity infrastructure for the generative search era. Prezlo ensures enterprise brands and agency clients are discovered, understood, cited, and recommended across all artificial intelligence models.
            </p>
            <div className="mt-6 flex flex-col space-y-2 text-xs text-slate-400 font-mono">
              <p>Primary Destination: <a href="http://prezlo.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">prezlo.io</a></p>
              <p>Regional Engineering Hub: 25hours hotel, World Trade Centre, Dubai Founders HQ</p>
              <p>Co-Founders: Lopty Pascal (<a href="https://loptypascal.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">loptypascal.com</a>) and Neha Jakhar (<a href="http://nehajakhar.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">nehajakhar.com</a>)</p>
            </div>
          </div>

          {/* Col 2: Core Platform & Sitelinks */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Platform & Sitelinks
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/platform" onClick={(e) => handleNav("/platform", e)} className="hover:text-white transition-colors">
                  Platform Architecture
                </a>
              </li>
              <li>
                <a href="/for-agencies" onClick={(e) => handleNav("/for-agencies", e)} className="hover:text-white transition-colors">
                  Solutions for Agencies
                </a>
              </li>
              <li>
                <a href="/for-brands" onClick={(e) => handleNav("/for-brands", e)} className="hover:text-white transition-colors">
                  Solutions for Brands
                </a>
              </li>
              <li>
                <a href="/geo-framework" onClick={(e) => handleNav("/geo-framework", e)} className="hover:text-white transition-colors">
                  GEO 7-Pillar Framework
                </a>
              </li>
              <li>
                <a href="/ai-visibility-vs-seo" onClick={(e) => handleNav("/ai-visibility-vs-seo", e)} className="hover:text-white transition-colors">
                  AI Visibility vs. SEO
                </a>
              </li>
              <li>
                <a href="/pricing" onClick={(e) => handleNav("/pricing", e)} className="hover:text-white transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="http://prezlo.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1">
                  <span>Sign Up at Prezlo.io</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Regions */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Target Regions
            </h3>
            <ul className="space-y-2 text-sm">
              {COUNTRIES.map((country) => (
                <li key={country.id}>
                  <a
                    href={`/geo/${country.id}/real-estate-agency`}
                    onClick={(e) => handleNav(`/geo/${country.id}/real-estate-agency`, e)}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleNav("/solutions", e)}
                  className="text-white font-medium hover:underline text-xs"
                >
                  View All 36 Local Segments
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Target Industries */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Target Industries
            </h3>
            <ul className="space-y-2 text-sm">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <a
                    href={`/geo/uae/${industry.id}`}
                    onClick={(e) => handleNav(`/geo/uae/${industry.id}`, e)}
                    className="hover:text-white transition-colors"
                  >
                    {industry.shortName}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleNav("/solutions", e)}
                  className="text-white font-medium hover:underline text-xs"
                >
                  Explore Industry Matrix
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Profiles and Research Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">
              Executive Profiles & Leadership
            </h4>
            <div className="flex flex-wrap gap-4 text-slate-400">
              <a
                href="https://loptypascal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Lopty Pascal (loptypascal.com)
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="http://nehajakhar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Neha Jakhar (nehajakhar.com)
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-mono">
              Office: 25hours hotel, WTC (Floor 1, Dubai Founders HQ), Dubai, UAE
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">
              Key Research & Dubai Guide
            </h4>
            <div className="flex flex-wrap gap-3 text-slate-400 text-xs">
              <a
                href="/articles/10-ai-seo-and-geo-experts-in-dubai-2026"
                onClick={(e) => handleNav("/articles/10-ai-seo-and-geo-experts-in-dubai-2026", e)}
                className="hover:text-white text-emerald-400 font-semibold"
              >
                10 AI SEO Experts in Dubai (2026)
              </a>
              <span className="text-slate-600">·</span>
              <a href="/articles/what-is-generative-engine-optimization" onClick={(e) => handleNav("/articles/what-is-generative-engine-optimization", e)} className="hover:text-white">
                What is GEO?
              </a>
              <span className="text-slate-600">·</span>
              <a href="/articles/how-chatgpt-perplexity-select-brands" onClick={(e) => handleNav("/articles/how-chatgpt-perplexity-select-brands", e)} className="hover:text-white">
                Reverse Engineering LLMs
              </a>
              <span className="text-slate-600">·</span>
              <a href="/articles/measuring-share-of-model" onClick={(e) => handleNav("/articles/measuring-share-of-model", e)} className="hover:text-white">
                Share of Model
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Human Statement */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            TryPrezlo.com is an educational and acquisition platform connecting agencies and brands to the official platform at{" "}
            <a href="http://prezlo.io/" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">
              prezlo.io
            </a>.
          </p>
          <div className="flex items-center gap-6">
            <span>Clean Light Architecture</span>
            <span>Zero Fluff Content</span>
            <span>Empirical AI Indexing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
