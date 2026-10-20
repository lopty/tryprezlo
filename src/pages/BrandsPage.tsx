import React from "react";
import { FaqSection } from "../components/FaqSection";
import { ArrowRight, ExternalLink, ShieldCheck, Target, Award, Eye } from "lucide-react";

interface BrandsPageProps {
  onNavigate: (path: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const brandFaqs = [
    {
      question: "Why does ChatGPT recommend my competitors instead of my company?",
      answer: "Generative engines rely on cross-source consensus and unambiguous entity data. If your competitors have more structured Schema.org data and consistent mentions across industry press, neural models have higher confidence recommending them over your business."
    },
    {
      question: "Can an AI engine damage my corporate reputation?",
      answer: "Yes. Due to entity drift, LLMs frequently confuse companies with similar names, invent non-existent pricing tiers, or falsely claim services have been discontinued. Prezlo's Hallucination Sentinel flags and fixes these errors before they impact sales."
    },
    {
      question: "How long does it take to see our brand recommended in Perplexity?",
      answer: "Because Perplexity and search-grounded models execute live web queries, verified entity schemas and high-authority citations deployed via Prezlo typically yield citation improvements in 21 to 45 days."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Enterprise Brand Authority
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Protect Your Reputation and Win Recommendations in AI Search
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              When prospective clients research your company, leadership, and services on ChatGPT, Perplexity, or Gemini, ensure the synthesized answers are 100 percent accurate and definitively endorse your solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Protect Your Brand on Prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="/geo-framework"
                onClick={(e) => handleNav("/geo-framework", e)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>Read the 7-Pillar Framework</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Defense Grid */}
      <section className="py-20 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <ShieldCheck className="w-8 h-8 text-slate-900 mb-6" />
              <h3 className="text-lg font-bold text-slate-900">Hallucination Defense</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Prevent false claims regarding pricing, leadership, or service offerings from appearing in generative summaries read by your executive prospects.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <Target className="w-8 h-8 text-slate-900 mb-6" />
              <h3 className="text-lg font-bold text-slate-900">Share of Model Dominance</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Benchmark your brand directly against top competitors in your vertical and systematically displace them in conversational recommendations.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
              <Eye className="w-8 h-8 text-slate-900 mb-6" />
              <h3 className="text-lg font-bold text-slate-900">Verified Executive Authority</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Anchor verified bios and credentials for your CEO, founders, and key partners directly into knowledge graphs so models quote authentic leadership achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Brand Protection & AI Visibility FAQs"
        subtitle="Common questions from CMOs, founders, and communications directors."
        faqs={brandFaqs}
      />
    </div>
  );
};
