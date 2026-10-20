import React from "react";
import { Search, AlertTriangle, Zap, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

interface CitunaHowItWorksProps {
  onNavigate: (path: string) => void;
}

export const CitunaHowItWorks: React.FC<CitunaHowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: "01",
      tag: "TRACK DAILY",
      title: "Monitor what 7 AI engines tell buyers about you",
      description: "Prezlo automatically tests thousands of high-intent buyer prompts across ChatGPT, Perplexity, Gemini, Claude, Grok, and Google AI Overviews to record exactly when you are cited and when you are omitted.",
      features: [
        "Tracks 7 frontier AI engines every 24 hours",
        "Records full raw prompts and synthesized answers",
        "Documents every URL and third-party source cited"
      ],
      badge: "Real-Time Telemetry"
    },
    {
      number: "02",
      tag: "DIAGNOSE GAPS",
      title: "Pinpoint where competitors steal recommendations",
      description: "Discover the exact prompt topics where competitors win citations over your brand. Identify hallucinations, inaccurate pricing, missing services, and unindexed corporate entities.",
      features: [
        "Head-to-head competitor displacement matrix",
        "Hallucination Sentinel with instant drift alerts",
        "Cross-source consensus validation check"
      ],
      badge: "Algorithmic Diagnosis"
    },
    {
      number: "03",
      tag: "DEPLOY FIXES",
      title: "Launch automated fixes to win the top recommendation",
      description: "Prezlo deploys structured entity graphs, passage-aligned FAQs, and authority anchors that neural rerankers require to confidently select and cite your business.",
      features: [
        "Cryptographic Schema.org JSON-LD generation",
        "Official regulatory and registry anchoring",
        "High-authority trade press and co-citation sync"
      ],
      badge: "Autonomous Growth"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-3">
            <span>HOW PREZLO WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            From invisible in AI answers to the #1 cited authority
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A continuous 3-step loop designed to track, diagnose, and capture conversational AI search traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-md card-futuristic flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#FF5500]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {step.badge}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider mb-2">
                  {step.tag}
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-sans">
                  {step.description}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                  {step.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="http://prezlo.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 font-mono"
                >
                  <span>See live pipeline on prezlo.io</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
