import React from "react";
import { FaqSection } from "../components/FaqSection";
import { AuditSimulator } from "../components/AuditSimulator";
import { ArrowRight, ExternalLink, Cpu, Database, Network, ShieldCheck, Activity } from "lucide-react";

interface PlatformPageProps {
  onNavigate: (path: string) => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const platformFaqs = [
    {
      question: "Which artificial intelligence models does Prezlo monitor?",
      answer: "Prezlo actively tracks, evaluates, and optimizes your brand footprint across ChatGPT (GPT-4o and Search), Perplexity, Google Gemini and AI Overviews, Claude 3.5 Sonnet, and Grok."
    },
    {
      question: "How does Prezlo access and evaluate model answers?",
      answer: "Prezlo utilizes an automated synthetic probing infrastructure designed by Lopty Pascal. The system sends hundreds of natural language prompts across diverse conversational contexts, analyzing the vector embeddings, cited footnotes, and synthesized entity attributes in real time."
    },
    {
      question: "Does Prezlo require changes to our website code?",
      answer: "Prezlo provides ready-to-deploy Schema.org JSON-LD scripts that can be pasted into your website header or Google Tag Manager, as well as digital PR authority networks that build third-party consensus without modifying your core site code."
    },
    {
      question: "Can Prezlo detect when an AI model makes a false claim about my business?",
      answer: "Yes. Our Real-Time Hallucination Sentinel scans synthesized answers for factual discrepancies (such as erroneous pricing, incorrect leadership names, or discontinued services) and provides step-by-step consensus remediation paths."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Technical Architecture
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              The Identity Infrastructure for Artificial Intelligence Search
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Engineered by Lopty Pascal in Dubai, Prezlo is the unified operational layer that connects enterprise brand facts directly with the retrieval pipelines of generative engines.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Deploy on Prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/pricing"
                onClick={(e) => handleNav("/pricing", e)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>View Plans & Access</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How the Prezlo Multi-Model Pipeline Operates
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Moving from raw web text to machine-verified entity consensus across every major generative engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-6">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Layer 01
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Knowledge Ingestion & Entity Anchoring
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Prezlo parses your official registries, executive bios, and service offerings into high-density JSON-LD ontologies. This establishes verified ground truth before crawlers encounter ambiguous mentions.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-6">
                <Network className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Layer 02
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Cross-Encoder Consensus Network
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Neural rerankers require multiple independent validations. Prezlo maps authoritative trade press, regulatory registries, and verified third-party analyses to provide the required consensus quorum.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-6">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Layer 03
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Autonomous Probing & Sentinel Alerts
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                24/7 synthetic multi-turn prompts query models continuously. If an engine begins omitting your services or drifting into competitor citations, you receive instant alerts with corrective actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Test Platform Diagnostics
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Run an instant multi-model audit to see how the platform evaluates your business footprint.
            </p>
          </div>
          <AuditSimulator />
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Platform Architecture & Integration FAQs"
        subtitle="Technical details on data structures, model coverage, and security."
        faqs={platformFaqs}
      />
    </div>
  );
};
