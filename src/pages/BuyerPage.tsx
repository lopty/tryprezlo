import React from "react";
import { COUNTRIES, INDUSTRIES, getGeoSegment } from "../data/geoData";
import {
  Breadcrumbs,
  InternalLink,
  ProductCTA,
  RelatedLinks,
  NotFound,
} from "../components/Editorial";
import { FaqSection } from "../components/FaqSection";
export function BuyerPage({
  countryId,
  industryId,
  onNavigate,
}: {
  countryId: string;
  industryId: string;
  onNavigate: (path: string) => void;
}) {
  const country = COUNTRIES.find((c) => c.id === countryId);
  const industry = INDUSTRIES.find((i) => i.id === industryId);
  if (!country || !industry) return <NotFound onNavigate={onNavigate} />;
  const segment = getGeoSegment(countryId, industryId);
  return (
    <div className="editorial-page section-shell">
      <Breadcrumbs
        items={[
          { name: "Solutions", path: "/solutions" },
          { name: `${country.name} · ${industry.shortName}` },
        ]}
        onNavigate={onNavigate}
      />
      <header className="editorial-header">
        <span className="eyebrow">MARKET & INDUSTRY PLANNING GUIDE</span>
        <h1>{segment.headline}</h1>
        <p>{segment.subheadline}</p>
      </header>
      <div className="prose-layout">
        <article>
          <section id="local-context">
            <h2>Plan for the market you actually serve</h2>
            <p>{country.description}</p>
            <p>{segment.localNote}</p>
            <p>{country.approach}</p>
          </section>
          <section id="buyer-questions">
            <h2>Start with a real buying decision</h2>
            <p>{industry.description}</p>
            <p>
              <strong>The buyer to understand:</strong> {industry.targetBuyer}
            </p>
            <p>
              The following prompts are planning examples. Validate the wording
              with your sales or customer research. They are not measured search
              volumes or claims about current assistant answers.
            </p>
            <ul>
              {segment.localizedSearchQueries.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>
          <section id="evidence">
            <h2>Give buyers evidence they can inspect</h2>
            <p>
              Review the information below on your own website and relevant
              public profiles. Identify missing or inconsistent details and
              assign an owner to each correction.
            </p>
            <ul>
              {industry.evidence.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            <p>
              {industry.keyCompliance} This marketing guide does not establish
              regulatory compliance or professional authorisation.
            </p>
          </section>
          <section id="first-audit">
            <h2>Your first audit: a practical worksheet</h2>
            <p>
              Choose five relevant questions, two assistants and a repeat
              observation using the same settings. This is a manageable starting
              exercise, not a statistically representative market study.
            </p>
            <div className="table-scroll">
              <table>
                <caption>Record one row for each answer you observe</caption>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Prompt, date and assistant",
                      "Makes the observation reproducible",
                    ],
                    [
                      "Brand mention, citation and recommendation",
                      "Keeps different outcomes separate",
                    ],
                    [
                      "Source URL and relevant statement",
                      "Provides evidence to inspect",
                    ],
                    [
                      "Accuracy gap and proposed change",
                      "Connects research to useful work",
                    ],
                    [
                      "Owner, approval and next review",
                      "Makes the action accountable",
                    ],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <th scope="row">{a}</th>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section id="outcomes">
            <h2>Review useful outcomes</h2>
            <p>
              Compare like-for-like answers after completing the work. Track
              qualified enquiries and product actions where observable. Do not
              label a changing mention rate as market share or promise a fixed
              timeline for recommendations.
            </p>
            <p>
              Prezlo connects measurement, source research and execution
              workflows. Confirm plan scope on the official platform before
              committing to client deliverables.
            </p>
          </section>
        </article>
        <aside className="page-contents">
          <span className="eyebrow">IN THIS GUIDE</span>
          {[
            ["Local context", "local-context"],
            ["Buyer questions", "buyer-questions"],
            ["Useful evidence", "evidence"],
            ["First audit worksheet", "first-audit"],
            ["Review outcomes", "outcomes"],
          ].map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
          <a href="https://prezlo.io/" className="text-link">
            Try Prezlo ↗
          </a>
        </aside>
      </div>
      <RelatedLinks
        paths={[
          "/platform",
          "/articles/" + industry.guide,
          "/articles/measuring-share-of-model",
          "/for-agencies",
        ]}
        onNavigate={onNavigate}
      />
      <section className="related-links">
        <h2>Compare this industry across markets</h2>
        <div>
          {COUNTRIES.filter((c) => c.id !== countryId).map((c) => (
            <InternalLink
              key={c.id}
              path={`/geo/${c.id}/${industryId}`}
              onNavigate={onNavigate}
            >
              {c.name} ↗
            </InternalLink>
          ))}
        </div>
      </section>
      <section className="related-links">
        <h2>Other industries in {country.name}</h2>
        <div>
          {INDUSTRIES.filter((i) => i.id !== industryId).map((i) => (
            <InternalLink
              key={i.id}
              path={`/geo/${countryId}/${i.id}`}
              onNavigate={onNavigate}
            >
              {i.shortName} ↗
            </InternalLink>
          ))}
        </div>
      </section>
      <ProductCTA />
      <FaqSection faqs={segment.faqs} />
    </div>
  );
}
