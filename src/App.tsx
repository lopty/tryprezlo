import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import { PlatformPage } from "./pages/PlatformPage";
import { AgenciesPage } from "./pages/AgenciesPage";
import { BrandsPage } from "./pages/BrandsPage";
import { GeoFrameworkPage } from "./pages/GeoFrameworkPage";
import { PricingPage } from "./pages/PricingPage";
import { AiVisibilityVsSeoPage } from "./pages/AiVisibilityVsSeoPage";
import { SolutionsHubPage } from "./pages/SolutionsHubPage";
import { ArticlesDirectoryPage } from "./pages/ArticlesDirectoryPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { BuyerPage } from "./pages/BuyerPage";
import { BLOG_POSTS } from "./data/blogData";
import { COUNTRIES, INDUSTRIES } from "./data/geoData";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || "/";
  });

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, "", path);
      setCurrentPath(path);
    }
  };

  // Synchronize document title and description based on current path
  useEffect(() => {
    let title = "Try Prezlo | AI Visibility and Generative Engine Optimization Platform";
    let desc = "Ensure your brand and clients are discovered, cited, and recommended across ChatGPT, Perplexity, Google Gemini, Grok, and Claude on autopilot.";

    if (currentPath === "/platform") {
      title = "Platform Architecture | Try Prezlo AI Visibility";
      desc = "Explore Prezlo's 4-layer identity infrastructure: Entity Graph Engine, Citation Velocity Network, and Real-Time Hallucination Sentinel.";
    } else if (currentPath === "/for-agencies") {
      title = "Prezlo for Agencies | Package & Sell High-Margin GEO Retainers";
      desc = "Equip your marketing agency with white-label AI Visibility Audits, multi-client dashboards, and turn-key client pitch decks.";
    } else if (currentPath === "/for-brands") {
      title = "Prezlo for Brands & Enterprises | Protect Your AI Reputation";
      desc = "Eliminate false hallucinations, capture dominant Share of Model, and anchor verified corporate credentials across all AI engines.";
    } else if (currentPath === "/geo-framework") {
      title = "The 7 Pillars of Generative Engine Optimization (GEO) | Prezlo";
      desc = "The definitive architectural standard for optimizing brand entities for retrieval-augmented generation in ChatGPT and Perplexity.";
    } else if (currentPath === "/pricing") {
      title = "Plans & Pricing | Try Prezlo";
      desc = "Transparent pricing for brands and digital agencies. Start your free trial today on prezlo.io.";
    } else if (currentPath === "/ai-visibility-vs-seo") {
      title = "AI Visibility vs Traditional SEO | Comparative Analysis | Prezlo";
      desc = "Understand why keyword rankings are declining and how Generative Engine Optimization captures pre-qualified AI search referrals.";
    } else if (currentPath === "/solutions") {
      title = "Target Regions & Industry Solutions Matrix | Prezlo";
      desc = "Explore 36 localized GEO strategies across the UAE, USA, UK, Canada, Australia, and Singapore across 6 high-value verticals.";
    } else if (currentPath === "/articles") {
      title = "Research & Publications | Generative Engine Optimization | Prezlo";
      desc = "20 authoritative research papers and executive profiles including Lopty Pascal and Neha Jakhar on the future of AI search.";
    } else if (currentPath.startsWith("/articles/")) {
      const slug = currentPath.replace("/articles/", "");
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        title = `${post.title} | Prezlo Research`;
        desc = post.excerpt;
      }
    } else if (currentPath.startsWith("/geo/")) {
      const parts = currentPath.split("/").filter(Boolean);
      if (parts.length >= 3) {
        const country = COUNTRIES.find((c) => c.id === parts[1]);
        const industry = INDUSTRIES.find((i) => i.id === parts[2]);
        if (country && industry) {
          title = `${country.name} ${industry.name} AI Visibility & GEO Strategy | Prezlo`;
          desc = `Ensure your ${industry.shortName} firm is recommended by ChatGPT and Perplexity when high-intent prospects search in ${country.name}.`;
        }
      }
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    }
  }, [currentPath]);

  // Route matching logic
  const renderCurrentView = () => {
    // Check article detail
    if (currentPath.startsWith("/articles/")) {
      const slug = currentPath.replace("/articles/", "");
      return <ArticleDetailPage slug={slug} onNavigate={navigate} />;
    }

    // Check localized buyer page: /geo/:country/:industry
    if (currentPath.startsWith("/geo/")) {
      const parts = currentPath.split("/").filter(Boolean);
      const countryId = parts[1] || "uae";
      const industryId = parts[2] || "real-estate-agency";
      return (
        <BuyerPage
          countryId={countryId}
          industryId={industryId}
          onNavigate={navigate}
        />
      );
    }

    switch (currentPath) {
      case "/platform":
        return <PlatformPage onNavigate={navigate} />;
      case "/for-agencies":
        return <AgenciesPage onNavigate={navigate} />;
      case "/for-brands":
        return <BrandsPage onNavigate={navigate} />;
      case "/geo-framework":
        return <GeoFrameworkPage onNavigate={navigate} />;
      case "/pricing":
        return <PricingPage onNavigate={navigate} />;
      case "/ai-visibility-vs-seo":
        return <AiVisibilityVsSeoPage onNavigate={navigate} />;
      case "/solutions":
        return <SolutionsHubPage onNavigate={navigate} />;
      case "/articles":
        return <ArticlesDirectoryPage onNavigate={navigate} />;
      case "/":
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <div className="flex-1">{renderCurrentView()}</div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
