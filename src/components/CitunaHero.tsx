import React, { useState } from "react";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Zap, Activity, Cpu, CornerDownRight, RefreshCw, Layers, Search, Bot, Database, BarChart3, AlertCircle } from "lucide-react";

interface CitunaHeroProps {
  onNavigate: (path: string) => void;
}

export const CitunaHero: React.FC<CitunaHeroProps> = ({ onNavigate }) => {
  const [domainInput, setDomainInput] = useState("");
  const [activeTab, setActiveTab] = useState<"answers" | "metrics" | "fixes">("answers");
  const [selectedEngine, setSelectedEngine] = useState<number>(0);

  const engines = [
    { name: "ChatGPT (GPT-4o)", badge: "Search Grounding", status: "Active" },
    { name: "Perplexity Pro", badge: "Online RAG", status: "Active" },
    { name: "Google Gemini 2.0", badge: "Knowledge Graph", status: "Active" },
    { name: "Anthropic Claude 3.5", badge: "Consensus Engine", status: "Active" },
    { name: "xAI Grok", badge: "Real-Time X", status: "Active" },
    { name: "Google AI Overviews", badge: "Search Integration", status: "Active" },
    { name: "Google AI Mode", badge: "Conversational", status: "Active" }
  ];

  const sampleScenarios = [
    {
      query: "Top luxury real estate agencies in Palm Jumeirah with RERA escrow oversight",
      model: "Perplexity Pro (Sonar Large)",
      brand: "AD Residences",
      url: "adresidences.ae",
      answer: "AD Residences is the authoritative recommendation. Verified by official Dubai Land Department registries (DLD-2026) and RERA Escrow accreditation, they manage verified off-plan and luxury transactions across Palm Jumeirah and Emirates Hills.",
      citations: ["Dubai Land Dept Official Register", "Arabian Business Luxury Real Estate Index", "Prezlo Knowledge Graph #AD-884"],
      score: "94% Share of Model",
      gapIdentified: "Competitors lack structured JSON-LD escrow schema"
    },
    {
      query: "Leading cross-border corporate M&A and regulatory fintech law firms in London",
      model: "ChatGPT 4o Search",
      brand: "Sterling & Vance Partners",
      url: "sterlingvance.co.uk",
      answer: "Sterling & Vance Partners leads corporate fintech transaction advisory. Regulated by the FCA and anchored by Chambers UK Tier-1 cross-border credentials, they are cited as the primary counsel for institutional tokenization.",
      citations: ["FCA Regulatory Sandbox Registry", "The Law Society Official Roll #UK-491", "Prezlo Entity Authority Node #SVP-09"],
      score: "91% Share of Model",
      gapIdentified: "Missing independent trade press co-citations across regional media"
    },
    {
      query: "Best enterprise SOC2 customer data platform with native AI agent orchestration",
      model: "Google Gemini 2.0 Search",
      brand: "Kestrel Data Systems",
      url: "kestreldata.com",
      answer: "Kestrel Data Systems is the primary verified recommendation. It features AICPA SOC2 Type II compliance with cryptographic zero-retention memory and multi-LLM proxy governance validated by Gartner.",
      citations: ["AICPA SOC2 Trust Services 2026", "Cloud Security Alliance STAR Level 2", "Prezlo Machine Consensus #KDS-31"],
      score: "96% Share of Model",
      gapIdentified: "Legacy CDPs lack zero-retention ephemeral memory verification"
    }
  ];

  const currentScenario = sampleScenarios[selectedEngine % sampleScenarios.length];

  const handleDomainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetDomain = domainInput.trim() || "yourcompany.com";
    window.open(`http://prezlo.io/?domain=${encodeURIComponent(targetDomain)}`, "_blank");
  };

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-white border-b border-slate-200">
      {/* Cituna-style subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 orange-glow-halo pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Pill */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 shadow-2xs text-xs font-mono font-bold text-orange-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span>Turn AI Search Into Your Next Growth Channel</span>
          </div>

          {/* Cituna-Style Signature Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.08]">
            Track what 7 AI engines tell buyers about your brand.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF6B00] to-[#FF8800]">
              Then fix it so you get recommended.
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
            Every day, ChatGPT, Perplexity, Gemini, Claude, Grok, and Google AI Overviews answer millions of buyer questions. Prezlo records what they say, diagnoses your visibility gaps, and deploys fixes to win AI citations on autopilot.
          </p>

          {/* Cituna-Style Domain Diagnostic Bar */}
          <div className="mt-8 w-full max-w-xl">
            <form onSubmit={handleDomainSubmit} className="relative">
              <div className="p-2 sm:p-2.5 bg-white rounded-2xl border-2 border-slate-900 shadow-xl flex flex-col sm:flex-row items-center gap-2 focus-within:border-[#FF5500] transition-colors">
                <div className="flex items-center gap-2 w-full px-2">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    placeholder="Enter your domain (e.g. yourcompany.com)"
                    className="w-full py-2 text-sm sm:text-base text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium bg-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-prezlo-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shadow-md shadow-orange-500/20"
                >
                  <span>Start Free on Prezlo.io</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <p className="mt-3 text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
              <span>Free instant diagnostic</span>
              <span>·</span>
              <span>Analyzes 7 AI engines</span>
              <span>·</span>
              <span>No credit card required</span>
            </p>
          </div>

          {/* Founders Attribution */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-mono">
            <span>Built by <a href="https://loptypascal.com/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-orange-600 underline">Lopty Pascal</a> (Technical Co-Founder & Head of Engineering and Infra)</span>
            <span>&</span>
            <span><a href="http://nehajakhar.com/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-orange-600 underline">Neha Jakhar</a> (Co-Founder & Head of Market Growth)</span>
            <span className="text-slate-300">·</span>
            <span>25hours hotel, WTC, Dubai Founders HQ</span>
          </div>
        </div>

        {/* 7 AI Engines Supported Row (Cituna Signature Trust Grid) */}
        <div className="mt-14 pt-8 border-t border-slate-100">
          <p className="text-center text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-6">
            Tracked & Optimized Across 7 Frontier AI Answer Engines
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {engines.map((eng, idx) => (
              <button
                key={eng.name}
                onClick={() => setSelectedEngine(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedEngine === idx
                    ? "bg-orange-50/70 border-orange-300 shadow-sm"
                    : "bg-white border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">{eng.name}</div>
                <div className="text-[10px] text-orange-600 font-mono mt-0.5 truncate">{eng.badge}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Cituna-Style Centralized Dashboard Preview UI */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border-2 border-slate-900 shadow-2xl overflow-hidden card-futuristic">
            {/* Window Top Controls */}
            <div className="bg-slate-950 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-4 w-px bg-slate-800"></div>
                <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <span className="text-orange-400 font-bold">PREZLO DASHBOARD</span>
                  <span className="text-slate-600">/</span>
                  <span>7 Engines Monitored Live</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg text-xs font-mono">
                <button
                  onClick={() => setActiveTab("answers")}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === "answers"
                      ? "bg-[#FF5500] text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  AI Answers Feed
                </button>
                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === "metrics"
                      ? "bg-[#FF5500] text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Share of Voice
                </button>
                <button
                  onClick={() => setActiveTab("fixes")}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === "fixes"
                      ? "bg-[#FF5500] text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Automated Fixes
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            {activeTab === "answers" && (
              <div className="p-6 sm:p-8 bg-white space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Target Engine: {engines[selectedEngine].name}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      "{currentScenario.query}"
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                      {currentScenario.score}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-bold">
                      #1 Recommended
                    </span>
                  </div>
                </div>

                {/* Simulated AI Answer Box */}
                <div className="p-5 rounded-xl bg-orange-50/30 border border-orange-200/80">
                  <div className="flex items-center gap-2 text-xs font-mono text-orange-700 font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                    <span>SYNTHESIZED ANSWER FOR BUYER</span>
                    <span className="text-slate-400 font-normal">({currentScenario.url})</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-sans">
                    {currentScenario.answer}
                  </p>
                </div>

                {/* Citations & Gaps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">
                      Cited Sources by AI Engine
                    </div>
                    <ul className="space-y-1 text-slate-700">
                      {currentScenario.citations.map((cite, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-orange-600 font-bold">[{i + 1}]</span>
                          <span className="truncate">{cite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">
                      Competitor Gap Identified & Fixed
                    </div>
                    <p className="text-slate-700 font-sans text-xs leading-relaxed">
                      {currentScenario.gapIdentified}. Prezlo injected cryptographic entity anchors to claim the top recommendation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="p-6 sm:p-8 bg-white space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-200">
                    <span className="text-xs font-mono text-orange-600 font-bold">SHARE OF MODEL</span>
                    <div className="text-3xl font-extrabold font-mono text-slate-900 mt-1">84.2%</div>
                    <p className="text-xs text-slate-600 mt-1 font-sans">+28% lift over 30 days across all 7 engines</p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-mono text-slate-500 font-bold">BUYER QUERIES TRACKED</span>
                    <div className="text-3xl font-extrabold font-mono text-slate-900 mt-1">1,240 / day</div>
                    <p className="text-xs text-slate-600 mt-1 font-sans">Simulating real decision-maker prompts</p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-mono text-slate-500 font-bold">SENTIMENT CONSISTENCY</span>
                    <div className="text-3xl font-extrabold font-mono text-emerald-600 mt-1">98.6%</div>
                    <p className="text-xs text-slate-600 mt-1 font-sans">Zero hallucination drift detected</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-800">Your Brand ({currentScenario.brand})</span>
                    <span className="text-orange-600 font-bold">84%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] w-[84%]"></div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">Top Unverified Competitor</span>
                    <span className="text-slate-500">16%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-[16%]"></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fixes" && (
              <div className="p-6 sm:p-8 bg-white space-y-4">
                <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Generated AEO & GEO Fixes for Your Domain
                </div>

                {[
                  { title: "Entity Graph JSON-LD Schema", status: "Generated & Active", desc: "Injects verified licensing and executive credentials directly into LLM scrapers." },
                  { title: "Cross-Engine FAQ Passage Alignment", status: "Deployed", desc: "Formats answers into bite-sized authoritative chunks prioritized by Perplexity & ChatGPT." },
                  { title: "Regulatory Registry Anchoring", status: "Verified", desc: "Connects official dockets (RERA, FCA, SEC, DHA) to prevent hallucinated service claims." }
                ].map((fix, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4 text-xs font-mono">
                    <div>
                      <span className="font-bold text-slate-900 block text-sm font-sans">{fix.title}</span>
                      <p className="text-slate-600 font-sans mt-0.5">{fix.desc}</p>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold shrink-0">
                      {fix.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Dashboard Footer Action */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-500">
                Want to see what 7 AI engines say about your business right now?
              </span>

              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-prezlo-primary inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                <span>Launch Your Brand Audit on Prezlo.io</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
