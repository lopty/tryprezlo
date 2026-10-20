import React from "react";
export interface FaqItem {
  question: string;
  answer: string;
}
export function FaqSection({
  title = "Frequently asked questions",
  subtitle,
  faqs,
  enableSchema = false,
}: {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  enableSchema?: boolean;
}) {
  if (!faqs.length) return null;
  return (
    <section className="editorial-faq">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div>
        {faqs.map((f) => (
          <details key={f.question}>
            <summary>
              {f.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
