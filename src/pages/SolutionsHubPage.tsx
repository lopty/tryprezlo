import React, { useState } from "react";
import { COUNTRIES, INDUSTRIES, ALL_GEO_SEGMENTS } from "../data/geoData";
import { ArrowRight, ExternalLink, Globe2 } from "lucide-react";

interface SolutionsHubPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsHubPage: React.FC<SolutionsHubPageProps> = ({ onNavigate }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredSegments = ALL_GEO_SEGMENTS.filter((seg) => {
    const matchesCountry =
      selectedCountry === "all" || seg.countryId === selectedCountry;
    const matchesIndustry =
      selectedIndustry === "all" || seg.industryId === selectedIndustry;
    return matchesCountry && matchesIndustry;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Regional & Vertical Coverage
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              36 Tailored Local SEO & GEO Strategies Across 6 Global Regions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every country and industry presents unique regulatory compliance frameworks, regional buyer prompt phrases, and localized competitor benchmarks. Select a segment below to view its complete GEO playbook.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row gap-6">
            {/* Country Selector */}
            <div>
              <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                Filter by Region:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedCountry("all")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    selectedCountry === "all"
                      ? "bg-slate-900 text-white font-semibold"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  All Regions
                </button>
                {COUNTRIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCountry(c.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                      selectedCountry === c.id
                        ? "bg-slate-900 text-white font-semibold"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Selector */}
            <div>
              <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                Filter by Industry:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedIndustry("all")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    selectedIndustry === "all"
                      ? "bg-slate-900 text-white font-semibold"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  All Verticals
                </button>
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      selectedIndustry === ind.id
                        ? "bg-slate-900 text-white font-semibold"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {ind.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Segments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSegments.map((segment) => {
              const country = COUNTRIES.find((c) => c.id === segment.countryId) || COUNTRIES[0];
              const industry = INDUSTRIES.find((i) => i.id === segment.industryId) || INDUSTRIES[0];

              return (
                <div
                  key={segment.slug}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-900 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </span>
                      <span className="text-slate-700 font-semibold">{industry.shortName}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                      <a
                        href={`/${segment.slug}`}
                        onClick={(e) => handleNav(`/${segment.slug}`, e)}
                        className="hover:underline"
                      >
                        {segment.title}
                      </a>
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {segment.subheadline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 space-y-1">
                      <p>Regulatory Authority: {country.regulatoryBodies[0]}</p>
                      <p>Hub: {country.majorHubs[0]}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-700 font-semibold">
                      {segment.caseProof.metric}
                    </span>
                    <a
                      href={`/${segment.slug}`}
                      onClick={(e) => handleNav(`/${segment.slug}`, e)}
                      className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
                    >
                      <span>View Playbook & FAQs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Outreach */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Globe2 className="w-10 h-10 mx-auto text-slate-400 mb-4" />
          <h2 className="text-2xl font-bold">Need a Custom International Architecture?</h2>
          <p className="mt-2 text-sm text-slate-400">
            Prezlo supports cross-border multi-lingual entity anchoring across Europe, North America, the GCC, and Asia-Pacific.
          </p>
          <div className="mt-6">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span>Consult with Prezlo Team</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
