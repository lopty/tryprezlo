import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, Sparkles, Cpu } from "lucide-react";

export const ClayTrustMosaic: React.FC = () => {
  const brandLogos = [
    { name: "Perplexity Pro", badge: "Online Reranker", highlight: true },
    { name: "OpenAI ChatGPT", badge: "GPT-4o Search", highlight: true },
    { name: "Google Gemini", badge: "AI Overviews", highlight: true },
    { name: "Anthropic Claude", badge: "RAG & Consensus", highlight: true },
    { name: "xAI Grok", badge: "Real-Time X", highlight: false },
    { name: "AD Residences", badge: "Dubai Real Estate", highlight: false },
    { name: "Jeffaro", badge: "VIP Concierge", highlight: false },
    { name: "NXTSTAR Media", badge: "Enterprise Growth", highlight: false }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Floating White Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl card-futuristic">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>FRONTIER MODEL TELEMETRY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Engineered for every major conversational search platform
          </h3>
        </div>

        {/* 3 Metric Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>CONVERSION LIFT</span>
                <TrendingUp className="w-4 h-4 text-[#FF5500]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums">
                3.2x
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                Visitors referred by AI citations convert at over three times the rate of standard Google organic search.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-orange-600 font-semibold">
              Validated across 300+ client projects
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>SHARE OF MODEL (SoM)</span>
                <Zap className="w-4 h-4 text-[#FF5500]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5500] font-mono tabular-nums">
                +140%
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                Average lift in recommendation frequency across ChatGPT and Perplexity within 90 days.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
              Continuous 24/7 automated probing
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>ZERO DRIFT INTEGRITY</span>
                <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums">
                98.4%
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                Cryptographic schema graphs prevent AI models from generating inaccurate prices, services, or locations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
              Live multi-node consensus locking
            </div>
          </div>
        </div>

        {/* Brand & Engine Grid */}
        <div className="pt-6 border-t border-slate-100">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
            Directly indexing into frontier retrieval-augmented generation pipelines
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50/70 hover:bg-orange-50/50 hover:border-orange-200 border border-slate-200/80 transition-colors flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-900 truncate">{brand.name}</span>
                <span className="text-[10px] font-mono text-orange-600 font-bold bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {brand.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
