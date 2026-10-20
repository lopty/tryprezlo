import React from "react";
import { FaqSection } from "../components/FaqSection";
import { ArrowRight, ExternalLink, Briefcase, FileCheck, Users, TrendingUp } from "lucide-react";

interface AgenciesPageProps {
  onNavigate: (path: string) => void;
}

export const AgenciesPage: React.FC<AgenciesPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const agencyFaqs = [
    {
      question: "How can my agency package and sell AI Visibility services?",
      answer: "Most agency partners introduce an AI Visibility Audit as a paid initial discovery product (typically 1,500 to 3,500 dollars) or use it as a pitch closer. Ongoing GEO retainers are packaged between 2,500 and 8,000 dollars monthly for continuous Share of Model tracking, entity optimization, and citation expansion."
    },
    {
      question: "Can we put our own agency logo and branding on audit reports?",
      answer: "Yes. Prezlo's Agency Partner tier includes full white-label branding, custom domains, and downloadable client-ready PDF presentations."
    },
    {
      question: "How many client brands can we manage in one Prezlo account?",
      answer: "Our Agency tier includes multi-tenant workspace management, allowing you to manage from 10 to over 100 client brands with dedicated client logins, team roles, and segmented reporting."
    },
    {
      question: "Does Prezlo offer sales enablement and pitch collateral for agencies?",
      answer: "Yes. Led by co-founder Neha Jakhar, our Agency Partner Program provides complete sales decks, client objection handling scripts, and benchmark research to accelerate your pipeline."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-14 pb-16 bg-slate-50 hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Agency Enablement Program
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Transform Your Agency with Generative Engine Optimization
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Traditional SEO retainers are suffering high churn as organic search clicks drop 38 percent. Prezlo equips marketing agencies, PR consultancies, and growth studios to sell high-margin AI Visibility retainers on autopilot.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Join Agency Partner Program on Prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="/pricing"
                onClick={(e) => handleNav("/pricing", e)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>View Agency Pricing</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars for Agencies */}
      <section className="py-20 bg-white hairline-border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Everything Your Agency Needs to Deliver GEO
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Built in partnership with premier growth agencies across Dubai, London, New York, and Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">White-Label Audits</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Generate branded AI Visibility Audits in 60 seconds with your agency's logo, colors, and strategic recommendations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Multi-Client Portal</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Seamlessly manage dozens of client accounts in one dashboard with role-based access for strategists and copywriters.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Share of Model KPI</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Deliver monthly executive reports showing measurable gains in recommendation frequency across ChatGPT and Perplexity.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Pitch Enablement</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Co-created sales collateral by Neha Jakhar that demonstrates live competitor citation displacement to close new retainers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Testimonial */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-slate-100">
            "Prezlo allowed our digital agency in Dubai to launch an entirely new service tier within two weeks. We closed four enterprise clients on 4,500 dollar monthly GEO retainers in our first month alone."
          </blockquote>
          <div className="mt-6 text-xs font-mono text-slate-400">
            Director of Performance, Premier Media Partners (Dubai & London)
          </div>
        </div>
      </section>

      {/* Agency FAQs */}
      <FaqSection
        title="Frequently Asked Questions for Marketing Agencies"
        subtitle="Operational details on pricing, whitelabeling, and client onboarding."
        faqs={agencyFaqs}
      />
    </div>
  );
};
