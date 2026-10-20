import React from "react";
import { ExternalLink, ArrowRight, MapPin, Building2, Briefcase, Award, ShieldCheck, Sparkles } from "lucide-react";

interface FoundersShowcaseProps {
  onNavigate: (path: string) => void;
}

export const FoundersShowcase: React.FC<FoundersShowcaseProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-600 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDERS & EXECUTIVE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Meet the Founders Behind Prezlo
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Headquartered in Dubai at Dubai Founders HQ, pioneering verified machine identity and Generative Engine Optimization for global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lopty Pascal Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-orange-300 shadow-xl flex flex-col justify-between transition-all duration-300 card-futuristic">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <img
                  src="/public/assets/aistudio/lopty-pascal_8b18be27.webp"
                  alt="Lopty Pascal, Technical Co-Founder and Head of Engineering and Infra at Prezlo"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#FF5500] shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-slate-900">Lopty Pascal</h3>
                  </div>
                  <p className="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200 inline-block mt-1">
                    Technical Co-Founder & Head of Engineering & Infra
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>25hours hotel, WTC (Floor 1, Dubai Founders HQ)</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  <strong className="text-slate-900">Lopty Pascal</strong> is a Dubai-based AI SEO and Generative Engine Optimization (GEO) expert, technology entrepreneur, and technical co-founder and Head of Engineering and Infrastructure at Prezlo. With over a decade of search optimization experience and a professional portfolio spanning more than 300 projects, he began researching generative AI's implications for search and digital discovery in 2022.
                </p>
                <p>
                  His work on AI search visibility and entity optimization is recognized internationally by industry authorities including <strong className="text-slate-800">JC Chouinard</strong> and <strong className="text-slate-800">Xpert.Digital</strong>, and publicly credited across the UAE by organizations including <strong className="text-slate-800">AD Residences, Jeffaro, KOF Technical Services, NXTSTAR, and Najd Rent a Car</strong>.
                </p>
              </div>

              {/* Verified Badges */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                <span className="bg-orange-50 border border-orange-200 text-orange-800 px-2.5 py-1 rounded-md font-semibold">300+ Search Projects</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">Started GEO in 2022</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">Top 10 Dubai GEO Expert</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href="https://loptypascal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-prezlo-primary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl"
              >
                <span>Visit loptypascal.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="/articles/10-ai-seo-and-geo-experts-in-dubai-2026"
                onClick={(e) => handleNav("/articles/10-ai-seo-and-geo-experts-in-dubai-2026", e)}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center justify-center gap-1"
              >
                <span>Read 2026 Dubai GEO List</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Neha Jakhar Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-orange-300 shadow-xl flex flex-col justify-between transition-all duration-300 card-futuristic">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <img
                  src="/assets/neha-jakhar.png"
                  alt="Neha Jakhar, Co-Founder of Prezlo"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#FF5500] shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-slate-900">Neha Jakhar</h3>
                  </div>
                  <p className="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200 inline-block mt-1">
                    Co-Founder & Head of Growth
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Dubai Founders HQ · Global Enterprise Growth</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  <strong className="text-slate-900">Neha Jakhar</strong> is a growth strategist, enterprise digital transformation leader, and co-founder and Head of Market Growth at Prezlo. She directs global client expansion, agency enablement, and commercialization of Prezlo's Generative Engine Optimization technologies across international markets.
                </p>
                <p>
                  Her strategic focus addresses how multi-national enterprises and fast-growing organizations adapt their acquisition engines from keyword rankings to AI citation share. Neha has designed commercial architectures helping agencies launch profitable GEO retainers across the UAE, UK, US, and Australian markets.
                </p>
              </div>

              {/* Verified Badges */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                <span className="bg-orange-50 border border-orange-200 text-orange-800 px-2.5 py-1 rounded-md font-semibold">Global Enterprise Growth</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">Agency Enablement Lead</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md">GCC & Global Expansion</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href="http://nehajakhar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-prezlo-primary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl"
              >
                <span>Visit nehajakhar.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="/for-agencies"
                onClick={(e) => handleNav("/for-agencies", e)}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center justify-center gap-1"
              >
                <span>Agency Enablement Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
