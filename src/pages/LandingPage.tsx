import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Plus,
  Search,
} from "lucide-react";
import { COUNTRIES, INDUSTRIES } from "../data/geoData";
import { DashboardPreview, ENGINES } from "../components/DashboardPreview";
const FAQS = [
  [
    "What does Prezlo actually do?",
    "Prezlo measures how AI assistants describe and recommend your business, compares the results with competitors, and connects those findings to content, structured data, research and outreach.",
  ],
  [
    "Is AI visibility different from SEO?",
    "SEO helps people discover your website through search results. AI visibility looks at whether assistants mention, cite or recommend your business in their answers. The two share foundations, including useful content, clear business information and credible sources.",
  ],
  [
    "Can I use it for multiple clients?",
    "Yes. Prezlo supports multiple client profiles in one account, so agencies can manage measurement and execution across their client portfolio.",
  ],
  [
    "Will Prezlo guarantee that AI recommends my brand?",
    "No tool can guarantee a recommendation. Answers vary by assistant, prompt, location and time. Prezlo helps you measure those answers, identify gaps and improve the information available about your business.",
  ],
  [
    "How do I get started?",
    "Visit prezlo.io to create your account. New accounts start with a 14-day Pro trial. A card is required, and you can cancel before the trial ends to avoid a charge.",
  ],
];
const reveal = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6 },
};
export const LandingPage = ({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) => {
  const [audience, setAudience] = useState("agencies");
  const [country, setCountry] = useState("uae");
  const [industry, setIndustry] = useState("real-estate-agency");
  const local = (path: string) => (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="landing">
      <section className="hero-section">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content section-shell">
          <motion.div {...reveal}>
            <span className="eyebrow hero-eyebrow">
              <span className="status-dot" /> MEET YOUR NEXT GROWTH CHANNEL
            </span>
            <h1>
              Your next customer
              <br />
              is asking AI.
              <br />
              <span>Will it mention you?</span>
            </h1>
            <p className="hero-description">
              See where your brand stands in AI search.
              <br className="desktop-break" /> Understand what’s missing. Make
              your next move with Prezlo.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="https://prezlo.io/">
                Start your free trial <ArrowUpRight size={17} />
              </a>
              <a className="button-secondary" href="#product-preview">
                Take a look inside <ArrowRight size={17} />
              </a>
            </div>
            <p className="trial-note">
              14 days of Pro. Cancel anytime. Card required.
            </p>
          </motion.div>
          <div className="engine-strip">
            <span>
              One clear view.
              <br />
              <strong>Seven AI assistants.</strong>
            </span>
            <div>
              {ENGINES.map((name, i) => (
                <span className="engine-name" key={name}>
                  <span
                    className={`engine-symbol engine-${i}`}
                    aria-hidden="true"
                  >
                    {["◎", "⌘", "✦", "✳", "𝕏", "≈", "∞"][i]}
                  </span>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <motion.div {...reveal} className="dashboard-stage">
            <div className="dashboard-label">
              <span>
                <span className="status-dot" /> THE BIG PICTURE, FINALLY IN ONE
                PLACE
              </span>
              <span>Interactive product preview ↓</span>
            </div>
            <DashboardPreview />
          </motion.div>
        </div>
      </section>
      <section className="brand-section section-shell">
        <p>Helping ambitious businesses find their place in AI search</p>
        <div className="customer-wordmarks">
          <span>
            QInsights<span className="brand-light">.ai</span>
          </span>
          <span className="brand-serif">Valeo Health</span>
          <span>
            NXTSTAR<span className="brand-orange">↗</span>
          </span>
          <span className="brand-thin">Algebrik</span>
          <span className="brand-serif">Interlace</span>
          <span className="brand-thin">
            BNW <small>DEVELOPMENTS</small>
          </span>
        </div>
      </section>
      <section className="workflow-section section-shell">
        <motion.div {...reveal} className="section-heading">
          <div>
            <span className="eyebrow">FROM INSIGHT TO ACTION</span>
            <h2>
              Don’t just watch AI search.
              <br />
              <span>Do something about it.</span>
            </h2>
          </div>
          <p>
            A score is a starting point. Prezlo connects the answers, the
            evidence and the work that comes next.
          </p>
        </motion.div>
        <div className="workflow-grid">
          {[
            [
              "01",
              "See the whole picture.",
              "Track your brand, competitors and cited sources across seven AI assistants. Understand what buyers are actually being told.",
              "Track AI visibility",
              "/platform",
            ],
            [
              "02",
              "Find your missing signals.",
              "Connect each answer to the information behind it. See where your content, profiles and authority need attention.",
              "Understand the gaps",
              "/geo-framework",
            ],
            [
              "03",
              "Make your next move.",
              "Turn research into content, structured data and outreach, with approvals that keep your team in control.",
              "Explore the platform",
              "/platform",
            ],
          ].map(([n, title, copy, label, path], i) => (
            <motion.article
              {...reveal}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="workflow-step"
              key={n}
            >
              <div className={`step-art step-art-${i}`} aria-hidden="true">
                {i === 0 ? (
                  <div className="signal-stack">
                    {["ChatGPT", "Perplexity", "Gemini"].map((v, j) => (
                      <div key={v}>
                        <span className="tiny-engine">
                          {["◎", "⌘", "✦"][j]}
                        </span>
                        {v}
                        <span className="signal-line" />
                        <Check size={13} />
                      </div>
                    ))}
                  </div>
                ) : i === 1 ? (
                  <div className="source-note">
                    <span>
                      <Search size={13} /> A clearer picture
                    </span>
                    <strong>
                      Your brand is missing
                      <br />
                      from comparison sources.
                    </strong>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                    <small>
                      Opportunity identified <span>↗</span>
                    </small>
                  </div>
                ) : (
                  <div className="task-stack">
                    <div>
                      <span className="task-check">
                        <Check size={11} />
                      </span>
                      Refresh your brand profile
                    </div>
                    <div>
                      <span className="task-check">
                        <Check size={11} />
                      </span>
                      Structure your website data
                    </div>
                    <div>
                      <span className="task-empty" />
                      Review your next article
                    </div>
                    <span className="review-note">
                      Ready for your review <ArrowRight size={12} />
                    </span>
                  </div>
                )}
              </div>
              <span className="step-number">{n} /</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a className="text-link" href={path} onClick={local(path)}>
                {label} <ArrowUpRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="audience-section">
        <div className="section-shell audience-layout">
          <motion.div {...reveal}>
            <span className="eyebrow">
              BUILT FOR THE PEOPLE BEHIND THE BRAND
            </span>
            <h2>
              Your ambition.
              <br />
              <span>A clearer way forward.</span>
            </h2>
            <div
              className="audience-tabs"
              role="tablist"
              aria-label="Choose your team"
            >
              <button
                id="agency-tab"
                role="tab"
                aria-controls="audience-panel"
                aria-selected={audience === "agencies"}
                onClick={() => setAudience("agencies")}
              >
                For agencies
              </button>
              <button
                id="brand-tab"
                role="tab"
                aria-controls="audience-panel"
                aria-selected={audience === "brands"}
                onClick={() => setAudience("brands")}
              >
                For brands
              </button>
            </div>
            <div
              id="audience-panel"
              role="tabpanel"
              aria-labelledby={
                audience === "agencies" ? "agency-tab" : "brand-tab"
              }
            >
              <h3>
                {audience === "agencies"
                  ? "More clarity for every client."
                  : "Know how your brand is being described."}
              </h3>
              <p>
                {audience === "agencies"
                  ? "Bring AI visibility into your client work. Manage multiple profiles, compare the competition and turn findings into a practical plan."
                  : "Understand the answers your customers see, the competitors they hear about and the sources shaping your reputation."}
              </p>
              <ul>
                {(audience === "agencies"
                  ? [
                      "One workspace for multiple client profiles",
                      "Research and execution in one workflow",
                      "Clear next steps your team can act on",
                    ]
                  : [
                      "Track mentions and recommendations",
                      "Benchmark against your competitors",
                      "Improve the signals behind AI answers",
                    ]
                ).map((s) => (
                  <li key={s}>
                    <Check size={15} />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                className="text-link"
                href={audience === "agencies" ? "/for-agencies" : "/for-brands"}
                onClick={local(
                  audience === "agencies" ? "/for-agencies" : "/for-brands",
                )}
              >
                Explore Prezlo for {audience} <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
          <motion.div {...reveal} className="portfolio-art">
            <div className="portfolio-header">
              <span>
                {audience === "agencies"
                  ? "Your client portfolio"
                  : "Your brand workspace"}
              </span>
              <span className="portfolio-count">
                {audience === "agencies" ? "3 profiles" : "1 profile"}
              </span>
            </div>
            {(audience === "agencies"
              ? ["Acme Studio", "Forma Living", "North & Co."]
              : ["Your brand"]
            ).map((s, i) => (
              <div className="portfolio-row" key={s}>
                <span className={`portfolio-avatar portfolio-avatar-${i}`}>
                  {s[0]}
                </span>
                <div>
                  <strong>{s}</strong>
                  <small>
                    {
                      [
                        "Brand & design",
                        "Real estate",
                        "Professional services",
                      ][i]
                    }
                  </small>
                </div>
                <div className="mini-bars">
                  {[9, 15, 12, 21, 19, 28, 26, 34].map((h, j) => (
                    <i key={j} style={{ height: h + i * 2 }} />
                  ))}
                </div>
                <span className="portfolio-percent">
                  {[68, 74, 52][i]}%<small>visibility</small>
                </span>
              </div>
            ))}
            <div className="portfolio-bottom">
              <span className="status-dot" /> More context. Better
              conversations.<span>Illustrative data</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="markets-section section-shell">
        <div>
          <span className="eyebrow">LOCAL CONTEXT. GLOBAL AMBITION.</span>
          <h2>
            Different markets.
            <br />
            <span>The same need to be found.</span>
          </h2>
          <p>
            Explore AI visibility strategies for your industry and the places
            you do business.
          </p>
        </div>
        <div className="market-selector">
          <Globe size={23} />
          <label htmlFor="market-country">Your market</label>
          <select
            id="market-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {COUNTRIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <label htmlFor="market-industry">Your industry</label>
          <select
            id="market-industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            {INDUSTRIES.map((i) => (
              <option key={i.id} value={i.id}>
                {i.shortName}
              </option>
            ))}
          </select>
          <a
            className="button-primary"
            href={`/geo/${country}/${industry}`}
            onClick={local(`/geo/${country}/${industry}`)}
          >
            Explore your market <ArrowUpRight size={16} />
          </a>
          <a
            className="all-solutions"
            href="/solutions"
            onClick={local("/solutions")}
          >
            Browse all markets and industries <ArrowRight size={13} />
          </a>
        </div>
      </section>
      <section className="home-guides section-shell">
        <span className="eyebrow">LEARN BEFORE YOU DECIDE</span>
        <h2>
          Clear thinking.
          <br />
          <span>Practical next steps.</span>
        </h2>
        <div>
          {[
            [
              "What is GEO?",
              "Understand the work behind AI visibility and where to begin.",
              "what-is-generative-engine-optimization",
            ],
            [
              "Measure what matters",
              "A worked example of mention rates, sample sizes and reporting.",
              "measuring-share-of-model",
            ],
            [
              "Build a useful agency service",
              "Turn a baseline into deliverables a client can inspect.",
              "agency-playbook-ai-visibility",
            ],
          ].map(([title, description, slug]) => (
            <a
              key={slug}
              href={"/articles/" + slug}
              onClick={local("/articles/" + slug)}
            >
              <h3>
                {title} <ArrowUpRight size={17} />
              </h3>
              <p>{description}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="founder-section section-shell">
        <div className="founder-intro">
          <span className="eyebrow">THE PEOPLE BEHIND PREZLO</span>
          <h2>
            Built with intent.
            <br />
            <span>By people who do the work.</span>
          </h2>
          <p>
            Engineering and market experience, working together to make AI
            visibility practical.
          </p>
        </div>
        <a
          href="https://loptypascal.com/"
          className="founder-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/aistudio/lopty-pascal_8b18be27.webp"
            alt="Lopty Pascal"
            loading="lazy"
          />
          <div>
            <h3>
              Lopty Pascal <ArrowUpRight size={17} />
            </h3>
            <p>
              Technical co-founder
              <br />
              Head of Engineering & Infrastructure
            </p>
          </div>
        </a>
        <a
          href="http://nehajakhar.com/"
          className="founder-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/neha-jakhar.png" alt="Neha Jakhar" loading="lazy" />
          <div>
            <h3>
              Neha Jakhar <ArrowUpRight size={17} />
            </h3>
            <p>
              Co-founder
              <br />
              Head of Market Growth
            </p>
          </div>
        </a>
      </section>
      <section className="faq-section section-shell">
        <div>
          <span className="eyebrow">A FEW THINGS YOU MIGHT BE ASKING</span>
          <h2>
            Good questions.
            <br />
            <span>Straight answers.</span>
          </h2>
          <a className="text-link" href="https://prezlo.io/">
            Learn more about Prezlo <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="faq-list">
          {FAQS.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={17} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="closing-section">
        <div className="section-shell">
          <span className="eyebrow">YOUR NEXT CHAPTER IN SEARCH</span>
          <h2>
            Be part of
            <br />
            <span>the conversation.</span>
          </h2>
          <p>
            Find out how AI sees your brand.
            <br />
            Then give it a better story to tell.
          </p>
          <a className="button-primary" href="https://prezlo.io/">
            Start your free trial <ArrowUpRight size={17} />
          </a>
          <small>14-day Pro trial. Card required. Cancel anytime.</small>
        </div>
        <span className="closing-loop loop-a" />
        <span className="closing-loop loop-b" />
      </section>
    </div>
  );
};
