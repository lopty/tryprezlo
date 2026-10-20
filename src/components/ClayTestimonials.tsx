import React from "react";
import { ArrowRight, ExternalLink, Play, Quote, MessageSquare } from "lucide-react";

interface ClayTestimonialsProps {
  onNavigate: (path: string) => void;
}

export const ClayTestimonials: React.FC<ClayTestimonialsProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-20 max-w-6xl mx-auto w-full">
      {/* Testimonials Block */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT PROOF & IMPACT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Hear from the teams that grow with Prezlo
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            From premier Dubai brokerages to international corporate practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-md card-futuristic flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-sm text-slate-700 leading-relaxed italic font-sans">
                "Before Prezlo, when European investors asked ChatGPT for top luxury brokerages in Palm Jumeirah, our competitors took 8 out of 10 citations. Within 60 days of entity deployment, AD Residences captured the primary recommendation slot."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">AD Residences</span>
                <span className="text-slate-500">Dubai Luxury Real Estate</span>
              </div>
              <span className="text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                +240% SoM
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-md card-futuristic flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-sm text-slate-700 leading-relaxed italic font-sans">
                "Prezlo gave our digital growth studio the exact infrastructure we needed to package high-margin GEO retainers. Clients instantly understand the value of being cited by Perplexity and Claude over dead keyword positions."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">NXTSTAR Media</span>
                <span className="text-slate-500">B2B Growth Agency</span>
              </div>
              <span className="text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                4 New Retainers
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-md card-futuristic flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-sm text-slate-700 leading-relaxed italic font-sans">
                "Lopty Pascal's early insights in 2022 gave us an unfair competitive advantage. Najd Rent a Car is now recommended across ChatGPT, Gemini, and Grok when travelers search for luxury exotic rentals in Dubai."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">Najd Rent a Car</span>
                <span className="text-slate-500">Luxury Mobility</span>
              </div>
              <span className="text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                Primary Citation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cituna-Style Revenue Growth & Engine Benchmark Feature */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center card-futuristic">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-3">
            <span>AEO & GEO ENGINE ARCHITECTURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Turn conversational AI search into your next predictable growth channel
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            When high-intent enterprise buyers ask ChatGPT, Perplexity, or Gemini for market recommendations, traditional search rankings don't matter. Prezlo provides the real-time telemetry, entity graph anchoring, and automated fixes required to win the top recommendation.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              <span>Start Free Trial on Prezlo.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/geo-framework"
              onClick={(e) => handleNav("/geo-framework", e)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 transition-colors"
            >
              <span>Explore 7-Pillar GEO Framework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 bg-slate-50/70 rounded-2xl p-6 border border-slate-200 text-xs font-mono space-y-3">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Cituna-Style Platform Metrics
          </div>
          <div className="space-y-2 text-slate-700">
            <div className="flex items-center justify-between">
              <span>Frontier AI Engines Tracked:</span>
              <span className="font-bold text-orange-600">7 Engines Daily</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Daily Buyer Prompts Evaluated:</span>
              <span className="font-bold text-slate-900">2,400+ Queries</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Average Lift in Share of Model:</span>
              <span className="font-bold text-emerald-600">+140% in 90 Days</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Hallucination Defense:</span>
              <span className="font-bold text-emerald-600">Zero-Drift Sentinel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
