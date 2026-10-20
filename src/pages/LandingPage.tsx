import React from "react";
import { CitunaHero } from "../components/CitunaHero";
import { CitunaHowItWorks } from "../components/CitunaHowItWorks";
import { ClayWorkflowCanvas } from "../components/ClayWorkflowCanvas";
import { ClayBentoBlocks } from "../components/ClayBentoBlocks";
import { FoundersShowcase } from "../components/FoundersShowcase";
import { ClayTestimonials } from "../components/ClayTestimonials";
import { FaqSection } from "../components/FaqSection";
import { COUNTRIES } from "../data/geoData";
import { ArrowRight, ExternalLink, Globe2, Sparkles } from "lucide-react";

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const landingFaqs = [
    {
      question: "What is Prezlo and how does it help agencies and brands?",
      answer: "Prezlo is an identity infrastructure and AI visibility platform that tracks how 7 frontier AI engines (ChatGPT, Perplexity, Gemini, Claude, Grok, Google AI Overviews, and AI Mode) answer buyer questions, identifies citation gaps, and deploys fixes to establish your brand as the #1 recommended answer."
    },
    {
      question: "Why is traditional SEO no longer enough in 2026?",
      answer: "Over 38 percent of high-intent commercial investigation queries now occur inside conversational AI interfaces rather than on traditional search engine results pages. Traditional SEO focuses on keyword stuffing and backlinks, which neural rerankers ignore in favor of cross-source consensus, structured entity graphs, and verified third-party citations."
    },
    {
      question: "Who are Lopty Pascal and Neha Jakhar?",
      answer: "Lopty Pascal (https://loptypascal.com/) is the technical co-founder and Head of Engineering and Infrastructure at Prezlo, with his office at 25hours hotel, World Trade Centre (Floor 1, Dubai Founders HQ). He is an AI SEO and GEO pioneer who began research in 2022 and built Prezlo's architecture. Neha Jakhar (http://nehajakhar.com/) is co-founder and Head of Market Growth, leading enterprise expansion and agency enablement."
    },
    {
      question: "Can marketing agencies white-label Prezlo for their clients?",
      answer: "Yes. Prezlo offers a dedicated agency partner tier that enables digital marketing agencies to generate branded AI Visibility Audits, package monthly GEO retainers between 2,500 and 8,000 dollars, and monitor multi-client portfolios under their own brand."
    },
    {
      question: "How do I sign up and start using Prezlo?",
      answer: "You can start your free trial and run your initial comprehensive brand audit across all 7 AI engines immediately by visiting http://prezlo.io/."
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#FF5500] selection:text-white">
      {/* Cituna-Style Signature Hero with Domain Diagnostic & 7 Engines */}
      <CitunaHero onNavigate={onNavigate} />

      {/* Cituna-Style How It Works (Track, Diagnose, Deploy Fixes) */}
      <CitunaHowItWorks onNavigate={onNavigate} />

      {/* Multi-Model Citation Pipeline Table (Real Client Proof) */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClayWorkflowCanvas />
        </div>
      </section>

      {/* 4 Feature Bento Blocks in Orange on White Theme */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPLETE DISCOVERY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Everything you need to lead in AI recommendations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Modular components designed by Lopty Pascal to engineer machine consensus across all frontier LLMs.
            </p>
          </div>

          <ClayBentoBlocks onNavigate={onNavigate} />
        </div>
      </section>

      {/* Leadership Showcase: Lopty Pascal & Neha Jakhar */}
      <FoundersShowcase onNavigate={onNavigate} />

      {/* Client Impact and Proof */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClayTestimonials onNavigate={onNavigate} />
        </div>
      </section>

      {/* 36 Localized Segment Explorer (6 Countries & 6 Industries) */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-2">
                <Globe2 className="w-3.5 h-3.5" />
                <span>LOCALIZED SEO & GEO STRATEGIES</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Targeting 6 High-Value Global Regions & 6 Key Verticals
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Explore tailored generative optimization strategies designed for regional regulatory frameworks (RERA, DHA, DIFC, FCA, SEC, ADGM, MAS) and localized buyer queries.
              </p>
            </div>
            <a
              href="/solutions"
              onClick={(e) => handleNav("/solutions", e)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 underline shrink-0"
            >
              <span>Explore All 36 Local Segments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {COUNTRIES.map((country) => (
              <div
                key={country.id}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between card-futuristic"
              >
                <div>
                  <div className="text-2xl mb-2">{country.flag}</div>
                  <h3 className="font-bold text-slate-900 text-sm">{country.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-mono">{country.majorHubs[0]}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={`/geo/${country.id}/real-estate-agency`}
                    onClick={(e) => handleNav(`/geo/${country.id}/real-estate-agency`, e)}
                    className="text-xs font-bold text-orange-600 hover:underline block"
                  >
                    View Real Estate GEO
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqSection
        title="Frequently Asked Questions About Prezlo"
        subtitle="Clear, direct answers for agencies and brands ready to dominate AI recommendations."
        faqs={landingFaqs}
      />

      {/* Cituna-Style Final High-Impact Conversion Banner */}
      <section className="py-24 bg-white text-center border-t border-slate-200 relative overflow-hidden futuristic-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 orange-glow-halo pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span>Turn AI Search Into Growth</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ready to track what 7 AI engines tell buyers about you?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Run an instant multi-model audit and see which AI engines cite your brand, where competitors are recommended, and what fixes to deploy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-xl shadow-lg shadow-orange-500/25"
            >
              <span>Start Free Trial on Prezlo.io</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all shadow-xs"
            >
              <span>Book Strategy Walkthrough</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400 font-mono">
            Directly provisioned via http://prezlo.io/
          </p>
        </div>
      </section>
    </div>
  );
};
