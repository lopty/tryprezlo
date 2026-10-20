import React from "react";
import { FaqSection } from "../components/FaqSection";
import { ExternalLink, ArrowRight, Check } from "lucide-react";

interface GeoFrameworkPageProps {
  onNavigate: (path: string) => void;
}

export const GeoFrameworkPage: React.FC<GeoFrameworkPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pillars = [
    {
      num: "01",
      title: "Entity Anchoring & Ontological Definition",
      summary: "LLMs require a definitive, unambiguous record of your company's core existence, offerings, and jurisdiction.",
      details: "By establishing identical organization records across official government registries, Wikidata, and root domains using high-density JSON-LD, your entity is protected against vector ambiguity."
    },
    {
      num: "02",
      title: "Cross-Source Consensus Engineering",
      summary: "Models do not trust single-domain claims; they evaluate consensus across trusted independent sources.",
      details: "Prezlo orchestrates structured co-citations in high-authority industry trade press and regulatory directories to satisfy the model's required multi-source quorum."
    },
    {
      num: "03",
      title: "Structured Data & AI Crawler Optimization",
      summary: "Equipping your digital properties for GPTBot, PerplexityBot, and Google-Extended crawlers.",
      details: "Deploying rich, error-free Schema.org markup that maps service offerings, pricing transparency, and verified executive credentials with zero parsing latency."
    },
    {
      num: "04",
      title: "Neural Reranker Passage Alignment",
      summary: "Optimizing text density and factual clarity for vector cross-encoders.",
      details: "Writing answers that directly satisfy conversational intent qualifiers (such as pricing constraints, location specifics, and accreditation proofs) so passages score in the top reranking percentile."
    },
    {
      num: "05",
      title: "Continuous Hallucination Detection & Remediation",
      summary: "Automated probers that isolate and eliminate factual errors.",
      details: "Running daily synthetic multi-turn prompts across all models to detect false claims and deploying 4-step consensus re-anchoring protocols immediately."
    },
    {
      num: "06",
      title: "Multi-Region Regulatory Grounding",
      summary: "Tailoring authority signals to local legal frameworks in UAE, US, UK, Canada, Australia, and Singapore.",
      details: "Embedding regional license numbers (such as RERA, DHA, FCA, SEC, or MAS) to bypass geographic safety filters and capture local buyer intent."
    },
    {
      num: "07",
      title: "Share of Model (SoM) Analytics & Executive KPIs",
      summary: "Quantifying your brand's actual recommendation percentage in conversational AI.",
      details: "Replacing obsolete keyword rankings with definitive Share of Model metrics that benchmark your company against market competitors across hundreds of commercial queries."
    }
  ];

  const frameworkFaqs = [
    {
      question: "Who developed the 7-Pillar GEO Framework?",
      answer: "The 7-Pillar GEO Framework was architected by Lopty Pascal, solo technical founder and software architect of Prezlo, based on empirical reverse engineering of retrieval-augmented generation pipelines."
    },
    {
      question: "Can these pillars be implemented without Prezlo?",
      answer: "While the theoretical principles are open, manually probing multiple models across hundreds of prompt permutations and tracking vector citations daily requires hundreds of engineering hours. Prezlo automates the entire 7-pillar workflow on autopilot."
    },
    {
      question: "Where can our team access the complete implementation tooling?",
      answer: "You can access the automated platform and run your first audit at http://prezlo.io/."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Methodology & Standards
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              The 7 Pillars of Generative Engine Optimization (GEO)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              The definitive architectural standard for establishing machine-readable brand authority, consensus citations, and dominant Share of Model across all conversational AI engines.
            </p>

            <div className="mt-8">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Deploy the Framework on Prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pillars Walkthrough */}
      <section className="py-20 bg-white hairline-border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-lg shrink-0">
                {pillar.num}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  {pillar.summary}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {pillar.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Frequently Asked Questions on GEO Methodology"
        subtitle="Clear answers on implementing the 7 pillars across your client and brand portfolio."
        faqs={frameworkFaqs}
      />
    </div>
  );
};
