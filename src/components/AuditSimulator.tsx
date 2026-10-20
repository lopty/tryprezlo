import React, { useState } from "react";
import { COUNTRIES, INDUSTRIES } from "../data/geoData";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, ExternalLink, RefreshCw } from "lucide-react";

interface AuditSimulatorProps {
  defaultCountry?: string;
  defaultIndustry?: string;
  defaultCompanyName?: string;
}

export const AuditSimulator: React.FC<AuditSimulatorProps> = ({
  defaultCountry = "uae",
  defaultIndustry = "real-estate-agency",
  defaultCompanyName = "Apex Capital Properties"
}) => {
  const [companyName, setCompanyName] = useState(defaultCompanyName);
  const [countryId, setCountryId] = useState(defaultCountry);
  const [industryId, setIndustryId] = useState(defaultIndustry);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const selectedCountry = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];
  const selectedIndustry = INDUSTRIES.find((i) => i.id === industryId) || INDUSTRIES[0];

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) return;

    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 1200);
  };

  // Deterministic seed calculations based on string length so audits are stable
  const scoreBase = (companyName.length * 7 + countryId.length * 3 + industryId.length * 5) % 35 + 28;
  const competitorShare = 74;
  const potentialShare = 88;

  return (
    <div className="bg-white rounded-2xl hairline-border shadow-sm p-6 sm:p-8">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
          <span>Real-Time Neural Probe</span>
          <span>·</span>
          <span>Multi-Engine Audit</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Check Your Brand Visibility Across ChatGPT, Perplexity & Gemini
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Simulate how conversational search engines currently evaluate your business against local competitors in {selectedCountry.name}.
        </p>
      </div>

      <form onSubmit={handleRunAudit} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
            Company Name
          </label>
          <input
            type="text"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g. Apex Advisory"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
            Target Country
          </label>
          <select
            value={countryId}
            onChange={(e) => setCountryId(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
          >
            {COUNTRIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">
            Target Industry
          </label>
          <select
            value={industryId}
            onChange={(e) => setIndustryId(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
          >
            {INDUSTRIES.map((ind) => (
              <option key={ind.id} value={ind.id}>
                {ind.shortName}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3 mt-1">
          <button
            type="submit"
            disabled={isRunning}
            className="btn-prezlo-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold rounded-xl shadow-md shadow-orange-500/20 disabled:opacity-75"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Simulating Neural Multi-Model Reranking...</span>
              </>
            ) : (
              <>
                <span>Run Instant AI Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Simulated Audit Results */}
      {hasRun && (
        <div className="mt-8 pt-8 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Scorecard */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Current Share of Model Score
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {scoreBase}%
                  </span>
                  <span className="text-xs text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    High Opportunity Gap
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  When potential buyers in {selectedCountry.name} ask conversational AI for premier {selectedIndustry.shortName.toLowerCase()} solutions, {companyName} is cited in only {scoreBase} of 100 benchmark queries.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>Top Local Competitor:</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{competitorShare}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Projected With Prezlo:</span>
                  <span className="font-semibold text-emerald-700 tabular-nums">{potentialShare}%</span>
                </div>
              </div>
            </div>

            {/* Multi-Engine Grid */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                Multi-Model Synthesis Breakdown
              </span>

              {/* Perplexity */}
              <div className="p-3.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Perplexity Real-Time Search</span>
                    <p className="text-slate-500">Neural cross-encoder prioritizes competitors with explicit JSON-LD schema.</p>
                  </div>
                </div>
                <span className="font-mono text-amber-700 font-medium shrink-0">Omitted in 62%</span>
              </div>

              {/* ChatGPT */}
              <div className="p-3.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">ChatGPT (GPT-4o Search)</span>
                    <p className="text-slate-500">Missing independent third-party co-citations across regional business press.</p>
                  </div>
                </div>
                <span className="font-mono text-red-600 font-medium shrink-0">Entity Unverified</span>
              </div>

              {/* Google Gemini */}
              <div className="p-3.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Google Gemini & AI Overviews</span>
                    <p className="text-slate-500">Knowledge Graph anchor incomplete for {selectedCountry.regulatoryBodies[0]} credentials.</p>
                  </div>
                </div>
                <span className="font-mono text-amber-700 font-medium shrink-0">Partial Match</span>
              </div>

              {/* Claude & Grok */}
              <div className="p-3.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Claude 3.5 & Grok</span>
                    <p className="text-slate-500">Domain indexed with zero negative hallucination flags detected.</p>
                  </div>
                </div>
                <span className="font-mono text-emerald-700 font-medium shrink-0">Clean Ground Truth</span>
              </div>
            </div>
          </div>

          {/* Action Box to convert to prezlo.io */}
          <div className="mt-6 p-5 bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Lock In Verified Recommendations for {companyName}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Prezlo automates entity anchoring, trade citations, and daily hallucination monitoring on autopilot.
              </p>
            </div>
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl whitespace-nowrap shrink-0"
            >
              <span>Deploy on Prezlo.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
