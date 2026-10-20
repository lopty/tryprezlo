import React, { useState } from "react";
import { BLOG_POSTS } from "../data/blogData";
import { Breadcrumbs, InternalLink, ProductCTA } from "../components/Editorial";
export function ArticlesDirectoryPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(BLOG_POSTS.map((p) => p.category))];
  const posts = BLOG_POSTS.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.title} ${p.excerpt} ${p.author.name}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="editorial-page section-shell">
      <Breadcrumbs
        items={[{ name: "Articles & guides" }]}
        onNavigate={onNavigate}
      />
      <header className="editorial-header">
        <span className="eyebrow">THE KNOWLEDGE LIBRARY</span>
        <h1>Practical answers for a changing search landscape.</h1>
        <p>
          Guides to AI visibility measurement, source research and useful
          implementation. Start with the fundamentals, work through a specific
          problem, or explore the people behind Prezlo.
        </p>
      </header>
      <nav className="learning-path" aria-label="Suggested reading path">
        <strong>New to AI visibility?</strong>
        {[
          ["1. Understand GEO", "what-is-generative-engine-optimization"],
          ["2. Build a measurement method", "measuring-share-of-model"],
          ["3. Plan the work", "agency-playbook-ai-visibility"],
        ].map(([label, slug]) => (
          <InternalLink
            path={"/articles/" + slug}
            key={slug}
            onNavigate={onNavigate}
          >
            {label} ↗
          </InternalLink>
        ))}
      </nav>
      <div className="directory-filters">
        <label>
          Search guides
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Topic, title or author"
          />
        </label>
        <label>
          Topic
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="directory-count" aria-live="polite">
        {posts.length} articles and profiles
      </p>
      <div className="article-directory">
        {posts.map((p) => (
          <article key={p.slug}>
            <span className="eyebrow">{p.category}</span>
            <h2>
              <InternalLink
                path={"/articles/" + p.slug}
                onNavigate={onNavigate}
              >
                {p.title}
              </InternalLink>
            </h2>
            <p>{p.excerpt}</p>
            <div>
              <span>
                {p.author.name} · {p.readTime}
              </span>
              <InternalLink
                path={"/articles/" + p.slug}
                onNavigate={onNavigate}
              >
                Read guide ↗
              </InternalLink>
            </div>
          </article>
        ))}
      </div>
      {!posts.length && (
        <p>
          No guides match.{" "}
          <button
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters
          </button>
        </p>
      )}
      <ProductCTA />
    </div>
  );
}
