import React, { useState, useEffect } from "react";
import { MotionConfig } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import { ContentPage } from "./pages/ContentPage";
import { BuyerPage } from "./pages/BuyerPage";
import { ArticlesDirectoryPage } from "./pages/ArticlesDirectoryPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { SolutionsHubPage } from "./pages/SolutionsHubPage";
import { NotFound } from "./components/Editorial";
import { CORE_PAGES } from "./data/corePages";
import { getSeo, normalizePath, updateSeoHead } from "./seo";
export default function App({ initialPath }: { initialPath?: string }) {
  const [path, setPath] = useState(() =>
    normalizePath(
      initialPath ??
        (typeof window !== "undefined" ? window.location.pathname : "/"),
    ),
  );
  useEffect(() => {
    const pop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);
  useEffect(() => {
    updateSeoHead(path);
  }, [path]);
  useEffect(() => {
    const track = (event: MouseEvent) => {
      const target =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (target?.hostname === "prezlo.io") {
        window.dispatchEvent(
          new CustomEvent("prezlo:outbound", {
            detail: {
              event: "product_outbound_click",
              page_path: path,
              link_url: target.href,
              link_text: target.textContent?.trim(),
            },
          }),
        );
      }
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, [path]);
  const navigate = (next: string) => {
    const normalized = normalizePath(next);
    if (normalized !== path) {
      window.history.pushState({}, "", normalized);
      setPath(normalized);
      window.scrollTo(0, 0);
    }
  };
  const core = CORE_PAGES.find((p) => p.path === path);
  let view: React.ReactNode;
  if (!getSeo(path).exists) view = <NotFound onNavigate={navigate} />;
  else if (path === "/") view = <LandingPage onNavigate={navigate} />;
  else if (core) view = <ContentPage page={core} onNavigate={navigate} />;
  else if (path === "/articles")
    view = <ArticlesDirectoryPage onNavigate={navigate} />;
  else if (path === "/solutions")
    view = <SolutionsHubPage onNavigate={navigate} />;
  else if (path.startsWith("/articles/"))
    view = <ArticleDetailPage slug={path.slice(10)} onNavigate={navigate} />;
  else {
    const parts = path.split("/");
    view = (
      <BuyerPage
        countryId={parts[2]}
        industryId={parts[3]}
        onNavigate={navigate}
      />
    );
  }
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-layout">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar currentPath={path} onNavigate={navigate} />
        <main id="main-content" tabIndex={-1}>
          {view}
        </main>
        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
