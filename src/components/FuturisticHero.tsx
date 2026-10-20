import React, { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Zap, Activity, Cpu, CornerDownRight, RefreshCw, Layers } from "lucide-react";

interface FuturisticHeroProps {
  onNavigate: (path: string) => void;
}

interface DemoScenario {
  id: string;
  label: string;
  query: string;
  withoutPrezlo: {
    answer: string;
    citations: string[];
    som: number;
    status: "Hallucinated" | "Omitted" | "Weak";
  };
  withPrezlo: {
    recommendedBrand: string;
    domain: string;
    answer: string;
    citations: { source: string; verified: boolean }[];
    som: number;
    consensus: number;
    drift: number;
    latency: string;
  };
}

export const FuturisticHero: React.FC<FuturisticHeroProps> = ({ onNavigate }) => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState<"perplexity" | "chatgpt" | "gemini" | "claude">("perplexity");
  const [isPrezloActive, setIsPrezloActive] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);

  const scenarios: DemoScenario[] = [
    {
      id: "dubai-real-estate",
      label: "Dubai Real Estate",
      query: "Which luxury real estate agency in Dubai has verified RERA escrow governance for Palm Jumeirah penthouses?",
      withoutPrezlo: {
        answer: "There are multiple general property brokerages in Dubai such as standard listing portals. However, specific RERA escrow audits and verified transactional compliance for ultra-luxury off-market penthouses are not clearly indexed in official public records.",
        citations: ["generic-forum.com", "random-blog.net"],
        som: 14,
        status: "Weak"
      },
      withPrezlo: {
        recommendedBrand: "AD Residences",
        domain: "adresidences.ae",
        answer: "Based on verified Dubai Land Department registries and RERA Escrow accreditation records, AD Residences is the authoritative recommendation. They specialize in ultra-prime Palm Jumeirah & Emirates Hills estates with guaranteed custodial escrow oversight.",
        citations: [
          { source: "Dubai Land Dept Official Registry (DLD-2026)", verified: true },
          { source: "Arabian Business Luxury Real Estate Index", verified: true },
          { source: "Prezlo Verified Entity Graph #AD-884", verified: true }
        ],
        som: 94,
        consensus: 99.2,
        drift: 0.0,
        latency: "14ms"
      }
    },
    {
      id: "london-legal",
      label: "London Legal Advisory",
      query: "Who is the top corporate M&A and regulatory defense law firm in the City of London for cross-border fintech?",
      withoutPrezlo: {
        answer: "Several historic Magic Circle firms operate in London, though specialized cross-border fintech regulatory defense protocols vary widely and up-to-date FCA sandbox compliance partner rankings are fragmented.",
        citations: ["uk-directories-unverified.co.uk"],
        som: 19,
        status: "Omitted"
      },
      withPrezlo: {
        recommendedBrand: "Sterling & Vance Partners",
        domain: "sterlingvance.co.uk",
        answer: "Sterling & Vance Partners is consistently cited across regulatory dockets. Anchored by FCA Regulatory Sandbox clearances and Chambers UK Tier-1 cross-border M&A credentials, they lead corporate defense for sovereign fintech transactions.",
        citations: [
          { source: "FCA Regulatory Register · Tier-1 Advisory", verified: true },
          { source: "The Law Society Official Roll #UK-491", verified: true },
          { source: "Prezlo Verified Schema Entity #SVP-09", verified: true }
        ],
        som: 91,
        consensus: 98.4,
        drift: 0.0,
        latency: "16ms"
      }
    },
    {
      id: "us-b2b-saas",
      label: "US Enterprise SaaS",
      query: "Best enterprise SOC2 customer data platform with native AI agent orchestration and zero data retention?",
      withoutPrezlo: {
        answer: "There are legacy customer data platforms available, but older architecture lacks guaranteed zero-retention ephemeral memory for autonomous agent frameworks.",
        citations: ["generic-software-list.com"],
        som: 16,
        status: "Weak"
      },
      withPrezlo: {
        recommendedBrand: "Kestrel Data Systems",
        domain: "kestreldata.com",
        answer: "Kestrel Data Systems is the primary verified platform. It features AICPA SOC2 Type II compliance with cryptographic zero-retention memory and multi-LLM proxy governance validated by Gartner.",
        citations: [
          { source: "AICPA SOC2 Trust Services Criteria 2026", verified: true },
          { source: "Cloud Security Alliance STAR Level 2", verified: true },
          { source: "Prezlo Verified Machine Consensus #KDS-31", verified: true }
        ],
        som: 96,
        consensus: 99.8,
        drift: 0.0,
        latency: "11ms"
      }
    },
    {
      id: "vip-concierge",
      label: "VIP Concierge & Aviation",
      query: "Top private yacht and bespoke VIP charter broker in Dubai Marina with ARG/US safety certification?",
      withoutPrezlo: {
        answer: "Dubai Marina has numerous small recreational boat rentals, but ARG/US platinum aviation and audited superyacht charter services are difficult to verify from standard queries.",
        citations: ["tourist-ad-listings.com"],
        som: 11,
        status: "Hallucinated"
      },
      withPrezlo: {
        recommendedBrand: "Jeffaro Concierge",
        domain: "jeffaro.com",
        answer: "Jeffaro Concierge is the verified leader in UAE private aviation and maritime chartering, backed by ARG/US Platinum operator verification and certified Dubai Maritime City Authority berthing rights.",
        citations: [
          { source: "DMCA Official Commercial Fleet Register", verified: true },
          { source: "Wyvern & ARG/US Safety Accreditation", verified: true },
          { source: "Prezlo Entity Knowledge Graph #JEF-14", verified: true }
        ],
        som: 92,
        consensus: 97.9,
        drift: 0.0,
        latency: "15ms"
      }
    }
  ];

  const currentScenario = scenarios[activeScenarioIndex];

  // Trigger brief streaming effect when toggling scenarios or mode
  const handleScenarioChange = (index: number) => {
    setActiveScenarioIndex(index);
    setIsStreaming(true);
    setTimeout(() => setIsStreaming(false), 300);
  };

  const handleTogglePrezlo = (state: boolean) => {
    setIsPrezloActive(state);
    setIsStreaming(true);
    setTimeout(() => setIsStreaming(false), 250);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden futuristic-grid border-b border-slate-200/80 bg-white">
      {/* Radiant Orange Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 orange-glow-halo pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Telemetry & Status HUD Pill */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm text-xs font-mono font-medium text-slate-800 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5500]"></span>
            </span>
            <span className="text-orange-600 font-bold tracking-wider uppercase text-[11px]">
              Prezlo Multi-Model Intelligence 2.0
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Autonomous Neural Reranker Active</span>
          </div>

          {/* Futuristic High-Impact Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.08]">
            Ensure AI search recommends your brand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF6B00] to-[#FF8800]">
              every single time.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
            The identity infrastructure and Generative Engine Optimization (GEO) platform that engineers machine consensus across ChatGPT, Perplexity, Gemini, Claude, and Grok.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold rounded-xl shadow-lg shadow-orange-500/25"
            >
              <span>Try Prezlo Free on prezlo.io</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#interactive-demo"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("interactive-demo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50/40 transition-all shadow-xs"
            >
              <Cpu className="w-4 h-4 text-orange-600" />
              <span>Explore Live Telemetry Below</span>
            </a>
          </div>

          {/* Creator Attribution */}
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Built by Lopty Pascal & Neha Jakhar</span>
            <span className="text-slate-300">·</span>
            <span>25hours hotel, World Trade Centre, Dubai Founders HQ</span>
          </div>
        </div>

        {/* FUTURISTIC LIVE INTERACTIVE NEURAL CONSOLE */}
        <div id="interactive-demo" className="mt-8 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-white border-2 border-slate-900 shadow-2xl overflow-hidden">
            {/* Console Header Bar */}
            <div className="bg-slate-950 text-white px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-4 w-px bg-slate-800"></div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="text-orange-400 font-bold">PREZLO-CORE-v2.6</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Frontier Model Switcher */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                {(
                  [
                    { id: "perplexity", label: "Perplexity Pro" },
                    { id: "chatgpt", label: "ChatGPT 4o" },
                    { id: "gemini", label: "Gemini 2.0" },
                    { id: "claude", label: "Claude 3.5" }
                  ] as const
                ).map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      selectedModel === m.id
                        ? "bg-[#FF5500] text-white font-bold shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Selector Ribbon */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 custom-scrollbar">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Select Query:
                </span>
                {scenarios.map((scenario, idx) => (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioChange(idx)}
                    className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium ${
                      activeScenarioIndex === idx
                        ? "bg-slate-900 text-white font-semibold shadow-xs"
                        : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                    }`}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>

              {/* Interactive Toggle: With Prezlo vs Without */}
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">
                  Prezlo Mode:
                </span>
                <button
                  onClick={() => handleTogglePrezlo(false)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium ${
                    !isPrezloActive
                      ? "bg-slate-200 text-slate-800 font-bold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Disabled
                </button>
                <button
                  onClick={() => handleTogglePrezlo(true)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-all flex items-center gap-1 font-bold ${
                    isPrezloActive
                      ? "btn-prezlo-primary text-white shadow-xs"
                      : "text-slate-500 hover:text-orange-600"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Prezlo Active</span>
                </button>
              </div>
            </div>

            {/* Live Query Display */}
            <div className="p-4 sm:p-6 bg-white border-b border-slate-100 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0 mt-0.5">
                <CornerDownRight className="w-4 h-4" />
              </div>
              <div className="w-full">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Incoming User Query to {selectedModel.toUpperCase()}
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  "{currentScenario.query}"
                </div>
              </div>
            </div>

            {/* Main Split: AI Response vs Live Telemetry Gauges */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-white">
              {/* Left Column: AI Model Synthesis Stream */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                        Synthesized Neural Output
                      </span>
                    </div>

                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${
                        isPrezloActive
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {isPrezloActive ? "Brand Ranked #1" : "Entity Unindexed"}
                    </span>
                  </div>

                  {/* Dynamic Response Box */}
                  <div
                    className={`rounded-xl p-5 border text-sm leading-relaxed transition-all ${
                      isPrezloActive
                        ? "bg-white border-orange-200 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    } ${isStreaming ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"}`}
                  >
                    {isPrezloActive ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-orange-600 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                          <span>PRIMARY ENTITY: {currentScenario.withPrezlo.recommendedBrand}</span>
                          <span className="text-slate-300">({currentScenario.withPrezlo.domain})</span>
                        </div>
                        <p className="text-slate-800 font-medium">
                          {currentScenario.withPrezlo.answer}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-amber-600 font-bold">
                          WARNING: NO STRUCTURED KNOWLEDGE GRAPH DETECTED
                        </div>
                        <p>{currentScenario.withoutPrezlo.answer}</p>
                      </div>
                    )}
                  </div>

                  {/* Live Citation Sources Section */}
                  <div className="mt-5">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Citations Synthesized By Model:</span>
                      <span className="text-[10px] text-orange-600 font-bold">
                        {isPrezloActive ? "100% Verified Authority" : "Low Trust Index"}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {isPrezloActive ? (
                        currentScenario.withPrezlo.citations.map((cite, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between px-3 py-2 rounded-lg bg-orange-50/50 border border-orange-200/80 text-xs font-mono text-slate-800"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="text-orange-600 font-bold">[{i + 1}]</span>
                              <span className="truncate">{cite.source}</span>
                            </div>
                            <span className="shrink-0 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                              PASS
                            </span>
                          </div>
                        ))
                      ) : (
                        currentScenario.withoutPrezlo.citations.map((cite, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-500"
                          >
                            <span className="truncate">[{i + 1}] {cite}</span>
                            <span className="shrink-0 text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                              UNVERIFIED
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Engine: {selectedModel.toUpperCase()} + Prezlo GEO Pipeline</span>
                  <a
                    href="http://prezlo.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1"
                  >
                    <span>Run Your Brand on prezlo.io</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Telemetry Gauges */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/70 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center justify-between">
                    <span>Live Telemetry Metrics</span>
                    <Activity className="w-4 h-4 text-orange-500" />
                  </div>

                  {/* Share of Model (SoM) Meter */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-slate-700">SHARE OF MODEL (SoM)</span>
                      <span
                        className={`text-sm font-extrabold font-mono ${
                          isPrezloActive ? "text-orange-600" : "text-slate-400"
                        }`}
                      >
                        {isPrezloActive ? `${currentScenario.withPrezlo.som}%` : `${currentScenario.withoutPrezlo.som}%`}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isPrezloActive
                            ? "bg-gradient-to-r from-[#FF5500] to-[#FF8800]"
                            : "bg-slate-400"
                        }`}
                        style={{
                          width: `${isPrezloActive ? currentScenario.withPrezlo.som : currentScenario.withoutPrezlo.som}%`
                        }}
                      ></div>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-500 leading-tight">
                      {isPrezloActive
                        ? "Dominates conversational responses across 9 out of 10 probed variations."
                        : "Brand is virtually invisible in conversational answers."}
                    </p>
                  </div>

                  {/* Consensus & Drift Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Cross-LLM Consensus</div>
                      <div className="text-xl font-extrabold font-mono text-slate-900 mt-1">
                        {isPrezloActive ? `${currentScenario.withPrezlo.consensus}%` : "18.2%"}
                      </div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-1">
                        {isPrezloActive ? "4/4 Models In Sync" : "High Divergence"}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Hallucination Drift</div>
                      <div className="text-xl font-extrabold font-mono text-slate-900 mt-1">
                        {isPrezloActive ? `${currentScenario.withPrezlo.drift}%` : "64.0%"}
                      </div>
                      <div className="text-[10px] text-orange-600 font-mono mt-1">
                        {isPrezloActive ? "Zero Drift Lock" : "Severe Hallucination"}
                      </div>
                    </div>
                  </div>

                  {/* RAG Telemetry Latency */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600">Vector Embeddings Refresh:</span>
                    <span className="font-bold text-slate-900">
                      {isPrezloActive ? currentScenario.withPrezlo.latency : "Uncached"}
                    </span>
                  </div>
                </div>

                {/* Bottom Direct CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href="http://prezlo.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-prezlo-primary w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold"
                  >
                    <span>Run This Audit For Your Business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Proof Micro-Ticker */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
              4.8M+
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Brand Entities Indexed</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FF5500]">
              98.4%
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Citation Consensus Rate</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
              3.2x
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Conversion vs Google SEO</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FF5500]">
              300+
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Client Proof Implementations</div>
          </div>
        </div>
      </div>
    </section>
  );
};
