import React, { useState } from "react";
import { ExternalLink, Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Platform", path: "/platform" },
    { label: "Agencies", path: "/for-agencies" },
    { label: "Brands", path: "/for-brands" },
    { label: "GEO Framework", path: "/geo-framework" },
    { label: "Solutions", path: "/solutions" },
    { label: "Articles", path: "/articles" },
    { label: "Pricing", path: "/pricing" }
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Product Growth Banner */}
      <div className="bg-orange-50/70 border-b border-orange-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="font-mono text-orange-600 font-bold uppercase tracking-wider text-[10px] bg-white px-2.5 py-0.5 rounded-full border border-orange-200 flex items-center gap-1.5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse"></span>
          Prezlo Intelligence OS
        </span>
        <a
          href="http://prezlo.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 flex items-center gap-1 text-slate-700 transition-colors"
        >
          <span>Track what 7 AI engines tell buyers about your brand on autopilot</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Brand wordmark with vibrant orange mark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick("/", e)}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5500] to-[#FFA040] flex items-center justify-center text-white shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform">
              <span className="font-bold text-lg leading-none font-mono tracking-tighter">P</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                Prezlo
              </span>
              <span className="text-[10px] font-mono font-medium text-orange-600 bg-orange-50 border border-orange-200/80 px-1.5 py-0.5 rounded">
                tryprezlo.com
              </span>
            </div>
          </a>

          {/* Navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF5500] to-[#FF8800] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-600 hover:text-orange-600 hidden sm:inline-block px-3 py-1.5 transition-colors"
            >
              Sign in
            </a>

            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prezlo-primary inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap"
            >
              <span>Try Prezlo Free</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    currentPath === link.path
                      ? "bg-orange-50 text-orange-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-prezlo-primary flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl"
              >
                <span>Try Prezlo Free on prezlo.io</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
