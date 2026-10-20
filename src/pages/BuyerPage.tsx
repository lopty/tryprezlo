import React from "react";
import { COUNTRIES, INDUSTRIES, getGeoSegment } from "../data/geoData";
import { AuditSimulator } from "../components/AuditSimulator";
import { FaqSection } from "../components/FaqSection";
import { ArrowRight, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

interface BuyerPageProps {
  countryId: string;
  industryId: string;
  onNavigate: (path: string) => void;
}

export const BuyerPage: React.FC<BuyerPageProps> = ({
  countryId,
  industryId,
  onNavigate
}) => {
  const country = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];
  const industry = INDUSTRIES.find((i) => i.id === industryId) || INDUSTRIES[0];
  const segment = getGeoSegment(country.id, industry.id);

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 hairline-border-b py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-mono">
          <a href="/" onClick={(e) => handleNav("/", e)} className="hover:text-slate-900">
            Home
          </a>
          <span>/</span>
          <a href="/solutions" onClick={(e) => handleNav("/solutions", e)} className="hover:text-slate-900">
            Solutions
          </a>
          <span>/</span>
          <span className="text-slate-900 font-medium">
            {country.name} · {industry.shortName}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 hairline-border-b bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-700 bg-white px-3 py-1 rounded-md mb-6 border border-slate-200 shadow-2xs">
              <span>{country.flag} {country.name} GEO Strategy</span>
              <span>·</span>
              <span>{industry.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {segment.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {segment.subheadline}
            </p>

            {/* Quick Action Strip */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Start Free Trial on Prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#local-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                <span>Run {country.name} AI Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Regional Regulatory Compliance Badge */}
            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
              <ShieldCheck className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 block font-mono">
                  Verified Regulatory Standards: {country.regulatoryBodies.join(" · ")}
                </span>
                <p className="mt-0.5">
                  Prezlo's entity schemas specifically embed verified credentials from regional authorities, ensuring zero safety filter exclusions in {country.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Buyer Prompts Evaluated in this Market */}
      <section className="py-16 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Real-World AI Queries
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              What High-Value Prospects in {country.name} Ask Generative Engines
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Prospective buyers are bypassing search engines to ask conversational models nuanced questions with strict operational criteria:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {segment.localizedSearchQueries.map((query, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                  Q{idx + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 italic">
                    "{query}"
                  </p>
                  <span className="text-xs font-mono text-slate-500 mt-2 block">
                    Evaluated across Perplexity, ChatGPT and Gemini
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traditional SEO Fails for this Segment */}
      <section className="py-16 bg-slate-50/70 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Diagnostic Analysis
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Why Traditional Local SEO Fails for {industry.name} in {country.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {segment.whyTraditionalSeoFails.map((failurePoint, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs"
              >
                <div className="text-xs font-mono font-semibold text-slate-500 mb-2">
                  Vulnerability 0{idx + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {failurePoint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Tailored Strategy */}
      <section className="py-16 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Strategic Roadmap
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              The 4-Phase GEO Roadmap for {industry.shortName} in {country.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              How Prezlo systematically engineers model consensus to displace competitors in AI recommendations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segment.strategyPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/40"
              >
                <span className="text-xs font-mono font-bold text-slate-900 bg-slate-200 px-2.5 py-1 rounded">
                  {phase.phase}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Case Proof */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-800 pb-8 md:pb-0 md:pr-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Segment Benchmark
              </span>
              <div className="text-4xl font-extrabold font-mono text-white mt-2 tabular-nums">
                {segment.caseProof.metric}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {segment.caseProof.label}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified in {country.name}</span>
              </div>
            </div>

            <div className="md:col-span-7">
              <span className="text-xs font-mono text-slate-400 block mb-2">
                Client Impact · {segment.caseProof.clientType}
              </span>
              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                "{segment.caseProof.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Audit for this Segment */}
      <section id="local-audit" className="py-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Localized Audit
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Audit Your {industry.shortName} Practice in {country.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Test your business against local competitors in {country.majorHubs[0]} right now.
            </p>
          </div>

          <AuditSimulator
            defaultCountry={country.id}
            defaultIndustry={industry.id}
            defaultCompanyName={`Premier ${industry.shortName} ${country.majorHubs[0]}`}
          />
        </div>
      </section>

      {/* Switch to Other Industries or Countries */}
      <section className="py-12 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-4">
            Explore Other Verticals in {country.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => {
              const isCurrent = ind.id === industry.id;
              return (
                <a
                  key={ind.id}
                  href={`/geo/${country.id}/${ind.id}`}
                  onClick={(e) => handleNav(`/geo/${country.id}/${ind.id}`, e)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    isCurrent
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {ind.name}
                </a>
              );
            })}
          </div>

          <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mt-8 mb-4">
            Explore {industry.shortName} in Other Regions
          </h3>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => {
              const isCurrent = c.id === country.id;
              return (
                <a
                  key={c.id}
                  href={`/geo/${c.id}/${industry.id}`}
                  onClick={(e) => handleNav(`/geo/${c.id}/${industry.id}`, e)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
                    isCurrent
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Buyer FAQs at the End of Every Buyer Page */}
      <FaqSection
        title={`Frequently Asked Questions: ${industry.shortName} in ${country.name}`}
        subtitle={`Everything you need to know about implementing Generative Engine Optimization for your ${industry.shortName.toLowerCase()} business in ${country.name}.`}
        faqs={segment.faqs}
      />

      {/* Final Action Bar */}
      <div className="py-12 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-xl font-bold">
            Dominate {industry.shortName} Recommendations in {country.name}
          </h3>
          <p className="mt-2 text-xs text-slate-400">
            Start free on Prezlo.io. No credit card required. Full white-label and agency support available.
          </p>
          <div className="mt-6">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Get Started on Prezlo.io</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
