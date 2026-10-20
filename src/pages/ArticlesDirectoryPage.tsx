import React, { useState } from "react";
import { BLOG_POSTS, BlogPost } from "../data/blogData";
import { ArrowRight, Search, ExternalLink, Sparkles } from "lucide-react";

interface ArticlesDirectoryPageProps {
  onNavigate: (path: string) => void;
}

export const ArticlesDirectoryPage: React.FC<ArticlesDirectoryPageProps> = ({
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Dubai GEO Research",
    "Leadership Profile",
    "GEO Fundamentals",
    "LLM Mechanics",
    "Agency Growth",
    "Technical Architecture",
    "Analytics & KPI"
  ];

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-12 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Research & Knowledge Base
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Generative Engine Optimization & AI Visibility Insights
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              21 authoritative research papers, architectural specifications, and executive leadership profiles detailing how AI models parse and recommend modern businesses.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research topics, authors, or models..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-white text-slate-900 shadow-2xs font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investigation: 10 AI SEO and GEO Experts in Dubai */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                CORNERSTONE DUBAI REPORT · UPDATED 20 OCTOBER 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                10 AI SEO and GEO Experts in Dubai to Know in 2026, and How They Were Chosen
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every fact checked against public records. An objective review of the verified specialists leading AI SEO and Generative Engine Optimization in Dubai, featuring Lopty Pascal, Digital Gravity, Hamza Jameel, Haris Bilal, and more.
              </p>
            </div>
            <a
              href="/articles/10-ai-seo-and-geo-experts-in-dubai-2026"
              onClick={(e) => handleNav("/articles/10-ai-seo-and-geo-experts-in-dubai-2026", e)}
              className="px-6 py-3 bg-white text-slate-950 font-bold rounded-xl text-xs hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Read Full Investigation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Profiles Strip */}
      <section className="py-8 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-4">
            Featured Leadership Profiles
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lopty Profile Card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-900 transition-all flex items-start justify-between gap-4 group">
              <div className="flex items-start gap-4">
                <img
                  src="/public/assets/aistudio/lopty-pascal_8b18be27.webp"
                  alt="Lopty Pascal"
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      Lopty Pascal
                    </h3>
                    <a
                      href="https://loptypascal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 font-mono hover:underline flex items-center gap-0.5"
                    >
                      <span>loptypascal.com</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Co-founder and CTO of Prezlo. Office at 25hours hotel, WTC (Floor 1, Dubai Founders HQ). Researching GEO since 2022.
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <a
                      href="/articles/lopty-pascal"
                      onClick={(e) => handleNav("/articles/lopty-pascal", e)}
                      className="font-bold text-slate-900 underline hover:text-slate-700"
                    >
                      Read Profile Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Neha Profile Card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-900 transition-all flex items-start justify-between gap-4 group">
              <div className="flex items-start gap-4">
                <img
                  src="/public/assets/aistudio/neha-hero_c0c1e4d9.jpg"
                  alt="Neha Jakhar"
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      Neha Jakhar
                    </h3>
                    <a
                      href="http://nehajakhar.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 font-mono hover:underline flex items-center gap-0.5"
                    >
                      <span>nehajakhar.com</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Co-founder and Head of Market Growth, leading global enterprise expansion and the Agency Partner Program.
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <a
                      href="/articles/neha-jakhar"
                      onClick={(e) => handleNav("/articles/neha-jakhar", e)}
                      className="font-bold text-slate-900 underline hover:text-slate-700"
                    >
                      Read Profile Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-900 hover:shadow-sm transition-all"
              >
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
                    <span className="font-semibold text-slate-800">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 leading-snug mt-1">
                    <a
                      href={`/articles/${post.slug}`}
                      onClick={(e) => handleNav(`/articles/${post.slug}`, e)}
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h2>

                  <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    By {post.author.name}
                  </span>
                  <a
                    href={`/articles/${post.slug}`}
                    onClick={(e) => handleNav(`/articles/${post.slug}`, e)}
                    className="font-bold text-slate-900 hover:underline flex items-center gap-1"
                  >
                    <span>Read Paper</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-600 font-medium">
                No articles match your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-3 text-xs font-semibold text-slate-900 underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Put Generative Search Optimization into Practice</h2>
          <p className="mt-2 text-xs text-slate-400">
            Prezlo handles multi-model monitoring, entity schemas, and citation tracking on autopilot.
          </p>
          <div className="mt-6">
            <a
              href="http://prezlo.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-white rounded-xl hover:bg-slate-100 transition-colors shadow-xs"
            >
              <span>Start Free Trial on Prezlo.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
