import React from "react";
import { FaqSection } from "../components/FaqSection";
import { ExternalLink, Check, ArrowRight } from "lucide-react";

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pricingFaqs = [
    {
      question: "Can I try Prezlo for free?",
      answer: "Yes. You can run an initial AI visibility audit and begin a 14-day free trial on Prezlo.io without entering a credit card."
    },
    {
      question: "Can we upgrade or downgrade our plan at any time?",
      answer: "Yes, all plans are flexible month-to-month contracts. You can upgrade to add more brand slots or agency client seats at any point directly from the Prezlo dashboard."
    },
    {
      question: "Are custom enterprise security agreements supported?",
      answer: "Yes. For global corporations and holding agencies requiring custom SOC2 compliance reviews, dedicated IP proxies, and custom SLA agreements, our Enterprise plan provides tailored terms."
    }
  ];

  const plans = [
    {
      name: "Free Trial / Audit",
      price: "$0",
      cadence: "14-day full access",
      description: "Ideal for testing your initial Share of Model and reviewing factual discrepancies across major models.",
      features: [
        "1 Brand Footprint Monitored",
        "ChatGPT & Perplexity Probing",
        "Basic Share of Model Scorecard",
        "Initial Hallucination Diagnostic",
        "Exportable PDF Summary"
      ],
      buttonText: "Start Free on Prezlo.io",
      highlighted: false
    },
    {
      name: "Professional Brand",
      price: "$299",
      cadence: "per month",
      description: "Complete Generative Engine Optimization for high-growth enterprises and market leaders.",
      features: [
        "Up to 3 Brand Domains",
        "5 Major Models Monitored Daily",
        "Automated Schema.org Generator",
        "Continuous Hallucination Sentinel",
        "Competitor Displacement Tracking",
        "Regional Multi-Geo Probing",
        "Priority Technical Support"
      ],
      buttonText: "Deploy Brand Plan on Prezlo.io",
      highlighted: true
    },
    {
      name: "Agency Partner",
      price: "$799",
      cadence: "per month",
      description: "Turnkey white-label platform for digital marketing agencies, PR studios, and SEO consultancies.",
      features: [
        "15 Client Brands Included",
        "Full White-Label Client Portal",
        "Branded Automated Client Audits",
        "Multi-User Team Role Access",
        "Pitch Decks & Sales Enablement",
        "Client Retention Dashboards",
        "Direct Slack Access to Founders"
      ],
      buttonText: "Join Agency Tier on Prezlo.io",
      highlighted: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
            Plans & Access
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Transparent Pricing for Brands and Growth Agencies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the tier tailored to your operational footprint. Every plan connects directly to the core platform at prezlo.io.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  plan.highlighted
                    ? "border-2 border-slate-900 bg-white shadow-md relative"
                    : "border border-slate-200 bg-slate-50/50 hover:bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-mono font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900 font-mono tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{plan.cadence}</span>
                  </div>
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-200/80">
                    <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider block mb-4">
                      What's Included:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/80">
                  <a
                    href="http://prezlo.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold rounded-lg transition-colors ${
                      plan.highlighted
                        ? "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Pricing & Billing FAQs"
        subtitle="Common questions regarding trial periods, agency seats, and enterprise invoicing."
        faqs={pricingFaqs}
      />
    </div>
  );
};
