import React from "react";
import { BLOG_POSTS } from "../data/blogData";
import {
  Breadcrumbs,
  InternalLink,
  ProductCTA,
  RelatedLinks,
  NotFound,
} from "../components/Editorial";
import { FaqSection } from "../components/FaqSection";
function Text({ value }: { value: string }) {
  return (
    <>
      {value
        .split(
          /(https?:\/\/[^\s)]+|(?<![\w/])(?:loptypascal|nehajakhar)\.com\/?)/g,
        )
        .map((v, i) =>
          /^(https?:\/\/|(?:loptypascal|nehajakhar)\.com)/.test(v) ? (
            <a
              key={i}
              href={v.startsWith("http") ? v : "https://" + v}
              rel="noopener noreferrer"
            >
              {v}
            </a>
          ) : (
            v
          ),
        )}
    </>
  );
}
export function ArticleDetailPage({
  slug,
  onNavigate,
}: {
  slug: string;
  onNavigate: (path: string) => void;
}) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFound onNavigate={onNavigate} />;
  const protectedPost = [
    "lopty-pascal",
    "10-ai-seo-and-geo-experts-in-dubai-2026",
  ].includes(slug);
  const portrait =
    slug === "lopty-pascal"
      ? "/assets/aistudio/lopty-pascal_8b18be27.webp"
      : slug === "neha-jakhar"
        ? "/assets/neha-jakhar.png"
        : post.author.avatarUrl?.replace("/public/", "/");
  return (
    <div className="editorial-page section-shell">
      <Breadcrumbs
        items={[
          { name: "Articles & guides", path: "/articles" },
          { name: post.title },
        ]}
        onNavigate={onNavigate}
      />
      <header className="editorial-header article-heading">
        <span className="eyebrow">{post.category}</span>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <div className="article-byline">
          {portrait && (
            <img
              src={portrait}
                alt={slug === "neha-jakhar" ? "Neha Jakhar" : slug === "lopty-pascal" ? "Lopty Pascal" : post.author.name}
              width="48"
              height="48"
              loading="lazy"
            />
          )}
          <div>
            <a href={post.author.websiteUrl || "/editorial-policy"}>
              {post.author.name}
            </a>
            <span>{post.author.role}</span>
            <span>
              <time
                dateTime={new Date(post.publishedDate + " 00:00:00 GMT")
                  .toISOString()
                  .slice(0, 10)}
              >
                {post.publishedDate}
              </time>{" "}
              · {post.readTime}
            </span>
          </div>
        </div>
      </header>
      <div className="prose-layout">
        <article className="article-body">
          {post.content.introduction !== post.excerpt && <p>
            <Text value={post.content.introduction} />
          </p>}
          {post.content.keyTakeaways.length > 0 && (
            <section className="key-takeaways">
              <h2>Key takeaways</h2>
              <ul>
                {post.content.keyTakeaways.map((v) => (
                  <li key={v}>
                    <Text value={v} />
                  </li>
                ))}
              </ul>
            </section>
          )}
          {post.content.sections.map((s, i) => (
            <section id={`section-${i + 1}`} key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j}>
                  <Text value={p} />
                </p>
              ))}
              {s.listItems && (
                <ul>
                  {s.listItems.map((v) => (
                    <li key={v}>
                      <Text value={v} />
                    </li>
                  ))}
                </ul>
              )}
              {s.quote && <blockquote>{s.quote}</blockquote>}
              {s.codeSnippet && (
                <pre>
                  <code>{s.codeSnippet}</code>
                </pre>
              )}
            </section>
          ))}
          {protectedPost && <section>
            <h2>Conclusion</h2>
            <p>
              <Text value={post.content.conclusion} />
            </p>
          </section>}
          {post.sources && (
            <section id="sources">
              <h2>References and further reading</h2>
              <p>
                Primary documentation and product references. Practical
                checklists and worked examples above are editorial guidance, not
                claims about private ranking algorithms.
              </p>
              <ul>
                {post.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
        <aside className="page-contents">
          <span className="eyebrow">ON THIS PAGE</span>
          {post.content.sections.map((s, i) => (
            <a key={s.heading} href={`#section-${i + 1}`}>
              {s.heading}
            </a>
          ))}
          {post.sources && <a href="#sources">References</a>}
          <InternalLink path="/editorial-policy" onNavigate={onNavigate}>
            Editorial policy
          </InternalLink>
        </aside>
      </div>
      <RelatedLinks
        paths={post.relatedSlugs.map((s) => "/articles/" + s)}
        onNavigate={onNavigate}
        title="Related reading"
      />
      <ProductCTA />
      <FaqSection
        title={
          protectedPost
            ? "Frequently Asked Questions on this Topic"
            : "Questions about this topic"
        }
        faqs={post.faqs}
      />
    </div>
  );
}
