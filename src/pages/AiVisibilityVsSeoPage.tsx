import React from "react";
import { FaqSection } from "../components/FaqSection";
import { ArrowRight, ExternalLink } from "lucide-react";

interface AiVisibilityVsSeoPageProps {
  onNavigate: (path: string) => void;
}

export const AiVisibilityVsSeoPage: React.FC<AiVisibilityVsSeoPageProps> = ({
  onNavigate
}) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const comparisonRows = [
    {
      factor: "Core Goal",
      seo: "Rank URLs on Page 1 of search engine result pages.",
      geo: "Be synthesized and recommended as the trusted solution in conversational AI answers."
    },
    {
      factor: "Underlying Algorithm",
      seo: "PageRank, inverted text keyword indexing, and backlink graphs.",
      geo: "Vector embeddings, neural cross-encoders, and multi-source consensus quorums."
    },
    {
      factor: "User Intent Query Type",
      seo: "Short keywords ('luxury real estate dubai').",
      geo: "Multi-constraint natural language prompts ('Which broker specializes in off-plan Palm villas with escrow protection for European buyers?')."
    },
    {
      factor: "Primary Discovery Channel",
      seo: "Desktop & mobile web browser search bars.",
      geo: "ChatGPT, Perplexity, Google Gemini, Claude, Grok, and smart voice assistants."
    },
    {
      factor: "Conversion Rate Quality",
      seo: "Baseline organic web conversion (approx. 1.2% - 2.4%).",
      geo: "3.2x higher conversion rate due to pre-qualified AI model endorsement."
    },
    {
      factor: "Reputation Monitoring",
      seo: "Only detects web review stars or manual mentions.",
      geo: "Continuous Hallucination Sentinel monitoring model outputs for false claims."
    },
    {
      factor: "Agency Retainer Value",
      seo: "High client churn due to declining Google click volumes.",
      geo: "High-margin strategic GEO retainers ($2.5k - $8k/mo) tied to Share of Model."
    }
  ];

  const faqs = [
    {
      question: "Does GEO replace our existing SEO work entirely?",
      answer: "GEO builds upon the foundations of technical website health while redirecting strategy toward entity schemas, multi-source consensus, and vector retrieval. High-authority SEO foundations assist AI web crawlers, but GEO ensures the AI actually quotes and recommends you in the written answer."
    },
    {
      question: "Why can't traditional SEO tools track AI search?",
      answer: "Traditional SEO tools are hardcoded to scrape static HTML pages from Google. Generative search answers are dynamic, synthesized on the fly via RAG pipelines, and require multi-turn synthetic probers like Prezlo."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Comparative Analysis
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              AI Visibility vs. Traditional SEO: The Architectural Shift
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Why keyword rankings are no longer translating to business revenue, and how forward-looking companies capture qualified buyers inside generative answers.
            </p>

            <div className="mt-8">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Upgrade Your Stack on Prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white hairline-border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-slate-900 text-white text-xs font-mono uppercase tracking-wider py-4 px-6">
              <div className="col-span-3">Dimension</div>
              <div className="col-span-4 text-slate-400">Traditional SEO</div>
              <div className="col-span-5 text-emerald-400 font-semibold">Generative Engine Optimization (Prezlo)</div>
            </div>

            <div className="divide-y divide-slate-100 text-sm">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 py-5 px-6 items-start gap-4">
                  <div className="col-span-3 font-bold text-slate-900 text-xs font-mono">
                    {row.factor}
                  </div>
                  <div className="col-span-4 text-slate-600 text-xs sm:text-sm">
                    {row.seo}
                  </div>
                  <div className="col-span-5 text-slate-900 font-medium text-xs sm:text-sm">
                    {row.geo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Comparison FAQs"
        subtitle="Clarifying the differences between page-level ranking and neural entity recommendation."
        faqs={faqs}
      />
    </div>
  );
};
