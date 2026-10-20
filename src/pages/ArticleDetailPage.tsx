import React from "react";
import { BLOG_POSTS, BlogPost } from "../data/blogData";
import { FaqSection } from "../components/FaqSection";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate
}) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find related posts
  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));

  const isLopty = post.id === "lopty-pascal" || post.author.name.includes("Lopty");
  const isNeha = post.id === "neha-jakhar" || post.author.name.includes("Neha");

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-mono">
          <a href="/" onClick={(e) => handleNav("/", e)} className="hover:text-slate-900">
            Home
          </a>
          <span>/</span>
          <a href="/articles" onClick={(e) => handleNav("/articles", e)} className="hover:text-slate-900">
            Research & Articles
          </a>
          <span>/</span>
          <span className="text-slate-900 truncate font-medium">
            {post.title}
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="pt-12 pb-10 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/articles"
            onClick={(e) => handleNav("/articles", e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 mb-6 font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </a>

          {/* Clean unboxed metadata with dot separators per design constitution */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4">
            <span className="font-semibold text-slate-800">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author info box */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {isLopty ? (
                <a
                  href="https://loptypascal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <img
                    src="/public/assets/aistudio/lopty-pascal_8b18be27.webp"
                    alt="Lopty Pascal"
                    className="w-12 h-12 rounded-xl object-cover border border-slate-300 hover:opacity-90 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ) : isNeha ? (
                <a
                  href="http://nehajakhar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <img
                    src="/public/assets/aistudio/neha-hero_c0c1e4d9.jpg"
                    alt="Neha Jakhar"
                    className="w-12 h-12 rounded-xl object-cover border border-slate-300 hover:opacity-90 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  P
                </div>
              )}
              <div>
                {isLopty ? (
                  <a
                    href="https://loptypascal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 text-sm hover:underline flex items-center gap-1"
                  >
                    <span>Lopty Pascal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                ) : isNeha ? (
                  <a
                    href="http://nehajakhar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 text-sm hover:underline flex items-center gap-1"
                  >
                    <span>Neha Jakhar</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                ) : (
                  <span className="font-semibold text-slate-900 text-sm block">
                    {post.author.name}
                  </span>
                )}
                <span className="text-xs text-slate-500 font-mono">
                  {post.author.role} · {isLopty ? "Dubai Founders HQ" : "Prezlo Research"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isLopty && (
                <a
                  href="https://loptypascal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  <span>loptypascal.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {isNeha && (
                <a
                  href="http://nehajakhar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  <span>nehajakhar.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <a
                href="http://prezlo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
              >
                <span>Try Prezlo Free</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-4">
              Executive Summary & Key Takeaways
            </span>
            <ul className="space-y-3">
              {post.content.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Prose */}
          <article className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
            <div className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-10 pb-8 border-b border-slate-100">
              {post.content.introduction}
            </div>

            {post.content.sections.map((section, idx) => (
              <section key={idx} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => {
                    // Check if paragraph mentions loptypascal.com or nehajakhar.com and make them clickable
                    if (p.includes("loptypascal.com")) {
                      return (
                        <p key={pIdx}>
                          {p.split("loptypascal.com")[0]}
                          <a
                            href="https://loptypascal.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-slate-900 underline hover:text-blue-600"
                          >
                            loptypascal.com
                          </a>
                          {p.split("loptypascal.com")[1]}
                        </p>
                      );
                    }
                    if (p.includes("nehajakhar.com")) {
                      return (
                        <p key={pIdx}>
                          {p.split("nehajakhar.com")[0]}
                          <a
                            href="http://nehajakhar.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-slate-900 underline hover:text-blue-600"
                          >
                            nehajakhar.com
                          </a>
                          {p.split("nehajakhar.com")[1]}
                        </p>
                      );
                    }
                    return <p key={pIdx}>{p}</p>;
                  })}
                </div>

                {section.quote && (
                  <blockquote className="my-6 p-6 border-l-4 border-slate-900 bg-slate-50 rounded-r-xl italic text-slate-800 text-base">
                    "{section.quote}"
                  </blockquote>
                )}

                {section.codeSnippet && (
                  <div className="my-6 rounded-xl bg-slate-900 text-slate-200 p-5 font-mono text-xs overflow-x-auto shadow-inner">
                    <pre>
                      <code>{section.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Conclusion</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {post.content.conclusion}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono">
                  Ready to put this research into production?
                </span>
                <a
                  href="http://prezlo.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-white rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <span>Start Free Trial on Prezlo.io</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Article FAQs */}
      {post.faqs && post.faqs.length > 0 && (
        <FaqSection
          title="Frequently Asked Questions on this Topic"
          subtitle="Expert answers regarding technical implementation and platform governance."
          faqs={post.faqs}
        />
      )}

      {/* Interlinked Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6">
              Related Research & Executive Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  onClick={(e) => handleNav(`/articles/${rel.slug}`, e)}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-900 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{rel.readTime}</span>
                    <span className="font-semibold text-slate-900 flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
