import React from "react";
import { ExternalLink, ArrowRight, Database, Bot, Network, Zap, Check, ShieldCheck, Sparkles, Activity } from "lucide-react";

interface ClayBentoBlocksProps {
  onNavigate: (path: string) => void;
}

export const ClayBentoBlocks: React.FC<ClayBentoBlocksProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto w-full">
      {/* Block 1: Multi-Model Discovery Matrix */}
      <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 hover:border-orange-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 card-futuristic">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-4">
            <Database className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>NEURAL DATA INFRASTRUCTURE · 01</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Get cited across the most complete AI search matrix
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            One platform to monitor and influence citations across ChatGPT, Perplexity, Google Gemini, Claude, and Grok. Create verified brand authority from anything on the web. Bring official registries, patents, and customer proof together.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-xs text-slate-700">
            <span className="font-bold text-orange-700 block font-mono mb-1">
              Anthropic, Perplexity & OpenAI RAG Consensus
            </span>
            <p>
              Prezlo verified brands achieve 3.2x higher conversion from conversational search citations than standard Google organic clicks.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              <span>Start free trial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/platform"
              onClick={(e) => handleNav("/platform", e)}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>Explore data matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono font-bold text-slate-500">
            <span>RAG COVERAGE TELEMETRY</span>
            <span className="text-orange-600">5/5 ENGINES</span>
          </div>

          <div className="space-y-3 my-4">
            {[
              { name: "Perplexity Pro (Sonar)", coverage: "99.4%", status: "Optimal" },
              { name: "ChatGPT 4o Search", coverage: "97.8%", status: "Optimal" },
              { name: "Google Gemini 2.0", coverage: "98.2%", status: "Optimal" },
              { name: "Claude 3.5 Artifacts", coverage: "96.5%", status: "Optimal" },
              { name: "xAI Grok Real-Time", coverage: "94.1%", status: "Synced" }
            ].map((engine) => (
              <div key={engine.name} className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                <span className="font-semibold text-slate-800">{engine.name}</span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-slate-500">{engine.coverage}</span>
                  <span className="text-[10px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-bold border border-orange-200">
                    {engine.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 text-center">
            Updated via Prezlo Neural Crawler v2.6
          </div>
        </div>
      </div>

      {/* Block 2: Autonomous Neural Probers */}
      <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 hover:border-orange-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 card-futuristic">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-4">
            <Bot className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>AGENTIC SEARCH ENGINE · 02</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Autonomous neural probers that simulate thousands of buyer prompts
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Stop guessing what AI assistants tell your prospects. Prezlo continuously executes synthetic buyer dialogues across every major model, identifying exactly when your competitors are recommended and what knowledge gaps caused your exclusion.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-xs text-slate-700">
            <span className="font-bold text-orange-700 block font-mono mb-1">
              Autonomous Probing Frequency
            </span>
            <p>
              Prezlo tests 2,400 query permutations every 24 hours per client domain, detecting hallucinations before they impact commercial pipeline.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              <span>Automate brand probing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/for-brands"
              onClick={(e) => handleNav("/for-brands", e)}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>View brand safeguards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 bg-slate-50/70 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono font-bold text-slate-500">
            <span>SYNTHETIC PROBING PIPELINE</span>
            <span className="text-emerald-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              ACTIVE
            </span>
          </div>

          <div className="space-y-2.5 my-4 text-xs">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Query Permutation #1842</span>
              <span className="font-semibold text-slate-900 block mt-0.5 truncate">
                "Top private equity legal counsel in UAE"
              </span>
              <div className="mt-1 flex items-center gap-2 text-[10px] text-emerald-700 font-mono">
                <Check className="w-3 h-3 text-emerald-600" />
                <span>Primary Recommendation Captured</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Query Permutation #1843</span>
              <span className="font-semibold text-slate-900 block mt-0.5 truncate">
                "Best off-plan residential broker DIFC"
              </span>
              <div className="mt-1 flex items-center gap-2 text-[10px] text-emerald-700 font-mono">
                <Check className="w-3 h-3 text-emerald-600" />
                <span>RERA Escrow Citation Confirmed</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Query Permutation #1844</span>
              <span className="font-semibold text-slate-900 block mt-0.5 truncate">
                "SOC2 compliance vendor comparison"
              </span>
              <div className="mt-1 flex items-center gap-2 text-[10px] text-orange-600 font-mono">
                <Zap className="w-3 h-3 text-orange-500" />
                <span>Entity Graph Injected in 18ms</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 text-center">
            Probing across 6 high-value international regions
          </div>
        </div>
      </div>

      {/* Block 3: Cross-Source Consensus */}
      <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 hover:border-orange-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 card-futuristic">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-4">
            <Network className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>KNOWLEDGE GRAPH CONSENSUS · 03</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Engineered consensus: How neural rerankers pick winners
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Generative engines do not count backlinks. They look for corroborating evidence across independent authority nodes. Prezlo anchors your brand across government licensing registries, patent databases, Wikipedia entity graphs, and Tier-1 press.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-xs text-slate-700">
            <span className="font-bold text-orange-700 block font-mono mb-1">
              Cross-Source Corroboration Engine
            </span>
            <p>
              When 4 or more verified third-party sources corroborate your entity parameters, LLM recommendation confidence jumps from 24% to over 96%.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              <span>Build entity graph</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/geo-framework"
              onClick={(e) => handleNav("/geo-framework", e)}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>7-Pillar GEO Framework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono font-bold text-slate-500">
            <span>CONSENSUS NODE VERIFICATION</span>
            <span className="text-orange-600 font-bold">98.4% SCORE</span>
          </div>

          <div className="space-y-2.5 my-4">
            {[
              { node: "Official Government Licensing (RERA / SEC / FCA)", verified: true },
              { node: "Tier-1 Industry Trade Press Citations", verified: true },
              { node: "Prezlo Cryptographic Schema Graph", verified: true },
              { node: "Executive Leadership Verification (Lopty / Neha)", verified: true }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-800">{item.node}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 text-center">
            Multi-source validation guarantees zero hallucination
          </div>
        </div>
      </div>

      {/* Block 4: Agency White-Label & Retainer Scaling */}
      <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 hover:border-orange-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 card-futuristic">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-4">
            <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>AGENCY ENABLEMENT · 04</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Package high-margin GEO retainers for your agency clients
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            SEO agencies are losing clients who demand answers about why their business doesn't appear in ChatGPT or Perplexity. Prezlo empowers agencies to deliver white-labeled AI visibility audits, package monthly GEO retainers from $2,500 to $8,000, and generate automated proof reports.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-xs text-slate-700">
            <span className="font-bold text-orange-700 block font-mono mb-1">
              Agency Partner Enablement Program
            </span>
            <p>
              Led by Neha Jakhar, Co-Founder and Head of Market Growth at Prezlo. Over 45 digital agencies across Dubai, London, New York, and Sydney now use Prezlo.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              <span>Join agency partner program</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/for-agencies"
              onClick={(e) => handleNav("/for-agencies", e)}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>Explore agency tier details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 bg-slate-50/70 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono font-bold text-slate-500">
            <span>AGENCY REVENUE UNIT ECONOMICS</span>
            <span className="text-emerald-600 font-bold">+$32,000/MO</span>
          </div>

          <div className="space-y-3 my-4 text-xs font-mono">
            <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600">Average GEO Client Retainer:</span>
              <span className="font-bold text-slate-900">$4,500 / mo</span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600">Client Retention Period:</span>
              <span className="font-bold text-emerald-600">14.2 months</span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600">Agency Cost per Client (Prezlo):</span>
              <span className="font-bold text-orange-600">$199 / mo</span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
              <span className="text-slate-600">Gross Margin:</span>
              <span className="font-bold text-slate-900">95.5%</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 text-center">
            Turn-key white label reports delivered in 60 seconds
          </div>
        </div>
      </div>
    </div>
  );
};
