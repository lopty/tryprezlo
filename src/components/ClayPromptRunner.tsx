import React, { useState } from "react";
import { ArrowRight, Search, ExternalLink, CheckCircle, Sparkles, Terminal } from "lucide-react";

interface ClayPromptRunnerProps {
  onRunQuery?: (query: string) => void;
}

export const ClayPromptRunner: React.FC<ClayPromptRunnerProps> = ({ onRunQuery }) => {
  const [query, setQuery] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluatedResult, setEvaluatedResult] = useState<{
    prompt: string;
    model: string;
    consensus: string;
    topEntity: string;
    sources: string;
  } | null>(null);

  const sampleChips = [
    "Palm Jumeirah luxury villa brokers with RERA escrow",
    "Top DIFC corporate M&A law firms",
    "Leading Harley Street cosmetic surgeons in London",
    "B2B SOC2 compliant customer data platforms"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluatedResult({
        prompt: query,
        model: "Perplexity & ChatGPT Cross-Synthesized",
        consensus: "98% Verified Consensus",
        topEntity: "Prezlo Verified Client Entity",
        sources: "Government Registries · Tier-1 Trade Press · Structured Graph"
      });
      if (onRunQuery) onRunQuery(query);
    }, 600);
  };

  const handleChipClick = (chipText: string) => {
    setQuery(chipText);
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluatedResult({
        prompt: chipText,
        model: "Perplexity & ChatGPT Cross-Synthesized",
        consensus: "97% Verified Consensus",
        topEntity: "Prezlo Verified Partner",
        sources: "Official Licensing Records · GCC Industry Analyses"
      });
      if (onRunQuery) onRunQuery(chipText);
    }, 500);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>NEURAL QUERY EXPLORER</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          What query do you want to verify?
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Type any high-intent commercial prompt to test how generative search models synthesize recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="p-2 sm:p-2.5 bg-white rounded-2xl border-2 border-slate-900 shadow-xl flex items-center gap-2 focus-within:border-orange-500 transition-colors">
          <Search className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Best real estate agency in Dubai Marina for high-net-worth investors..."
            className="w-full py-2 px-1 text-sm sm:text-base text-slate-900 focus:outline-none placeholder:text-slate-400 bg-transparent font-medium"
          />
          <button
            type="submit"
            disabled={isEvaluating}
            className="btn-prezlo-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shrink-0 disabled:opacity-75"
          >
            {isEvaluating ? (
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                <span>Probing...</span>
              </span>
            ) : (
              <>
                <span>Run Probe</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Suggested Prompt Chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-500 font-mono text-[11px]">Try prompt:</span>
        {sampleChips.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleChipClick(chip)}
            className="px-3 py-1 bg-white hover:bg-orange-50 hover:border-orange-300 text-slate-700 hover:text-orange-600 rounded-full border border-slate-200 transition-colors text-xs font-medium"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Evaluation Results Card */}
      {evaluatedResult && (
        <div className="mt-6 p-6 rounded-2xl bg-white border border-orange-200 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-mono font-bold text-slate-900">
                PROBE RESULT: {evaluatedResult.model}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {evaluatedResult.consensus}
            </span>
          </div>

          <div className="mt-4 space-y-2 text-xs font-mono">
            <div className="flex items-start gap-2">
              <span className="text-slate-400 shrink-0">Evaluated Query:</span>
              <span className="text-slate-900 font-bold">"{evaluatedResult.prompt}"</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-400 shrink-0">Dominant Citation:</span>
              <span className="text-orange-600 font-bold">{evaluatedResult.topEntity}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-400 shrink-0">Authoritative Sources:</span>
              <span className="text-slate-700">{evaluatedResult.sources}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Want your company recommended for this search?</span>
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold"
            >
              <span>Audit On Prezlo.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
