import preserved from "./preservedArticles.json";
export interface ArticleFaq {
  question: string;
  answer: string;
}
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
    websiteUrl?: string;
  };
  publishedDate: string;
  modifiedDate?: string;
  readTime: string;
  excerpt: string;
  content: {
    introduction: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      paragraphs: string[];
      codeSnippet?: string;
      quote?: string;
      listItems?: string[];
    }[];
    conclusion: string;
  };
  faqs: ArticleFaq[];
  relatedSlugs: string[];
  sources?: { label: string; url: string }[];
}
const AI = {
  label: "Google: AI features and your website",
  url: "https://developers.google.com/search/docs/appearance/ai-features",
};
const HELPFUL = {
  label: "Google: helpful, reliable content",
  url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
};
const SCHEMA = {
  label: "Google: structured data introduction",
  url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
};
const SPAM = {
  label: "Google: spam policies",
  url: "https://developers.google.com/search/docs/essentials/spam-policies",
};
const BOTS = {
  label: "OpenAI: crawler documentation",
  url: "https://developers.openai.com/api/docs/bots",
};
const PERPLEXITY = {
  label: "Perplexity: crawler documentation",
  url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
};
type Section = [heading: string, ...paragraphs: string[]];
function guide(
  slug: string,
  title: string,
  category: string,
  excerpt: string,
  sections: Section[],
  takeaways: string[],
  related: string[],
  sources = [AI, HELPFUL],
): BlogPost {
  const words = (excerpt + sections.flat().join(" ")).split(/\s+/).length;
  return {
    id: slug,
    slug,
    title,
    category,
    author: {
      name: "Try Prezlo Editorial",
      role: "Practical AI visibility guides",
      websiteUrl: "https://tryprezlo.com/editorial-policy",
    },
    publishedDate: "October 20, 2026",
    modifiedDate: "2026-10-20",
    readTime: Math.max(2, Math.ceil(words / 200)) + " min read",
    excerpt,
    content: {
      introduction: excerpt,
      keyTakeaways: takeaways,
      sections: sections.map(([heading, ...paragraphs]) => ({
        heading,
        paragraphs,
      })),
      conclusion:
        "Choose one useful improvement, record what changed and review the outcome. Explore Prezlo for a workflow connecting measurement to follow-up work.",
    },
    faqs: [],
    relatedSlugs: related,
    sources,
  };
}
const guides: BlogPost[] = [
  guide(
    "what-is-generative-engine-optimization",
    "What Is Generative Engine Optimization? A Practical GEO Guide",
    "GEO Fundamentals",
    "Generative engine optimization, or GEO, is the work of improving how a business is understood and discovered in AI-generated answers. Start with useful information and a repeatable way to inspect those answers.",
    [
      [
        "Begin with a buying decision",
        "A business can be mentioned without being a suitable recommendation. Define the question a buyer is trying to answer: finding a service, comparing alternatives or checking a constraint. That decision determines which information your site needs.",
        "For example, a software buyer may care about integration support and data export. A page answering those questions gives the buyer something to evaluate, whether they arrive through search, an assistant or a colleague.",
      ],
      [
        "Build a small, repeatable baseline",
        "Choose a fixed set of discovery, comparison and branded questions. Record the assistant, exact prompt, date, location settings, answer and sources. Run more than one observation before calling a result a trend. Keep original records so another person can inspect the finding.",
      ],
      [
        "Improve information you can substantiate",
        "Check service descriptions, locations, contact details and product limitations. Publish examples from work you actually did, with permission where required. Add named contributors and sources when they help a reader assess a claim. Do not create fake reviews or artificial citations.",
      ],
      [
        "Keep the SEO foundations healthy",
        "Google says its existing Search fundamentals remain relevant to AI features. Start by checking that important pages return readable HTML and working links. There is no special AI schema that guarantees inclusion.",
      ],
      [
        "Produce something the team can use",
        "Create a short audit containing five buyer questions, original answers, three information gaps and an owner for each fix. Review progress alongside enquiries and conversion quality. A score without a defined sample or an actionable finding is not a complete strategy.",
      ],
    ],
    [
      "Measure a defined sample.",
      "Improve evidence, clarity and access.",
      "Keep business outcomes in view.",
    ],
    [
      "measuring-share-of-model",
      "schema-markup-for-ai-crawlers",
      "agency-playbook-ai-visibility",
    ],
  ),
  guide(
    "how-chatgpt-perplexity-select-brands",
    "How to Investigate Brand Mentions in ChatGPT and Perplexity",
    "LLM Mechanics",
    "You can observe answers and citations without pretending to know a private recommendation algorithm. A source audit separates what the answer shows from what you are inferring.",
    [
      [
        "Define what you observed",
        "Record whether the answer names the business, links to it, recommends it for a purpose or quotes a source mentioning it. These are different outcomes. A cited page does not reveal every input used to produce the answer.",
      ],
      [
        "Create a comparable test",
        "Keep the task, wording, assistant mode and market consistent. Save the full answer rather than a cropped positive screenshot. Include the date and visible settings. A changed prompt is a new test, not another observation in an unchanged series.",
      ],
      [
        "Read the cited pages",
        "Ask what each accessible source contributes: a directory entry, product detail, independent review or vendor-written list. Check whether the information remains accurate. Do not assume every uncited statement came from a linked page.",
      ],
      [
        "Turn a gap into a hypothesis",
        "Suppose comparison answers repeatedly discuss export formats, but your product site does not explain exports. Publish an accurate export guide and measure again. Even if mentions improve, that does not prove one private ranking factor caused the change.",
      ],
      [
        "Use language the evidence supports",
        "Write “appeared in six of twelve recorded answers” rather than “owns half the AI market.” Include missing answers and failures. A transparent report gives the next review a useful starting point.",
      ],
    ],
    [
      "Retain original answers.",
      "Read the sources.",
      "Label explanations as hypotheses.",
    ],
    [
      "citation-velocity-and-trust-signals",
      "measuring-share-of-model",
      "what-is-generative-engine-optimization",
    ],
    [BOTS, PERPLEXITY],
  ),
  guide(
    "zero-click-search-transition",
    "Zero-Click Search: Assess the Impact on Your Website",
    "Analytics & KPI",
    "A decline in clicks does not explain itself. Investigate query mix, search appearance, seasonality and conversion quality before deciding AI answers caused the change.",
    [
      [
        "Compare equivalent periods",
        "Segment by landing page, device and query type. A sitewide total can hide an informational guide gaining impressions while a commercial page loses relevant clicks. Check brand demand, campaigns and seasonal changes.",
      ],
      [
        "Separate visibility from outcomes",
        "Rising impressions with flat clicks can reflect a different query mix or result layout. Falling conversions can come from a broken form. Inspect the full journey before deciding a page needs rewriting.",
      ],
      [
        "Record the visible search experience",
        "Review a small set of affected queries in the relevant market. Save dated observations of result types. Do not extrapolate a single screenshot to all users, devices and locations.",
      ],
      [
        "Protect the useful next step",
        "Give readers scope, examples, limitations, pricing context and a clear contact or signup route. Fewer visits can produce more qualified enquiries, but they can also mean lost business. Measure the outcome rather than assuming it.",
      ],
      [
        "Create a balanced review",
        "Use a table with the page, search trend, observed result changes, conversion trend and proposed action. If evidence is inconclusive, say so. Continue monitoring rather than manufacturing a causal explanation.",
      ],
    ],
    [
      "Clicks and business value differ.",
      "Investigate by page and intent.",
      "Do not assume AI caused every decline.",
    ],
    [
      "converting-ai-search-referrals",
      "measuring-share-of-model",
      "what-is-generative-engine-optimization",
    ],
  ),
  guide(
    "entity-drift-and-knowledge-graphs",
    "Incorrect Brand Information in AI Answers: A Correction Workflow",
    "Technical Architecture",
    "An assistant may repeat an old service, incorrect location or mistaken company relationship. Treat each error as a specific information problem with a source trail.",
    [
      [
        "Record the exact error",
        "Save the prompt, answer, date and cited sources. Classify the issue: wrong fact, outdated fact, ambiguous identity or opinion. Unfavourable opinion is not automatically a factual error.",
      ],
      [
        "Establish the approved fact",
        "Find a current record your team can publish. This might be a dated service page or an approved leadership biography. Resolve internal disagreement before updating multiple public profiles.",
      ],
      [
        "Fix sources you control",
        "Update the affected page, relevant structured data and managed profiles. Put corrected information in visible text. Do not publish contradictory facts or hidden statements intended only for models.",
      ],
      [
        "Request external corrections responsibly",
        "Use a publisher’s normal correction process and supply evidence. Record the request. Do not create a network of false articles to overwhelm an accurate but inconvenient source.",
      ],
      [
        "Retest without a promised deadline",
        "Repeat the original question later and retain both versions. A source update does not guarantee an immediate change in an assistant’s answer. Escalate material errors through the platform’s feedback route.",
      ],
    ],
    [
      "Separate factual errors from opinions.",
      "Correct public sources with evidence.",
      "Keep dated observations.",
    ],
    [
      "fixing-negative-ai-hallucinations",
      "brand-verification-for-ai",
      "schema-markup-for-ai-crawlers",
    ],
  ),
  guide(
    "brand-verification-for-ai",
    "Brand Verification for AI Search: What to Publish and Check",
    "GEO Fundamentals",
    "Verification is an evidence task, not a badge that forces a recommendation. Give readers a consistent identity and a way to check the claims that matter.",
    [
      [
        "Make identity unambiguous",
        "Use a consistent trading name and explain relationships between a company and its products. Publish a working contact route and accurate service area. Distinguish your business from similarly named organisations through clear context.",
      ],
      [
        "Document decision-making facts",
        "For software, include feature limits and support. For services, explain scope and the responsible team. Publish only credentials actually held and link to a public verification route when appropriate.",
      ],
      [
        "Align structured data and visible content",
        "Markup should describe the identity readers see. It is not a place for invented reviews, awards or a different business address. Check that every profile link belongs to the same entity.",
      ],
      [
        "Maintain a fact register",
        "Record approved facts, their owners, supporting sources and review triggers. Service availability and product limitations should be updated when they change, rather than independently reinvented for each directory.",
      ],
      [
        "Inspect interpretation, not just consistency",
        "Use a defined prompt sample to look for mistaken descriptions. A consistent profile helps people understand a business, but cannot make every assistant answer identically. Report findings at the level your evidence supports.",
      ],
    ],
    [
      "Use checkable facts.",
      "Keep public profiles consistent.",
      "Do not promise verification guarantees.",
    ],
    [
      "entity-drift-and-knowledge-graphs",
      "schema-markup-for-ai-crawlers",
      "lopty-pascal",
    ],
    [SCHEMA, HELPFUL],
  ),
  guide(
    "converting-ai-search-referrals",
    "How to Measure and Convert AI Search Referrals",
    "Analytics & KPI",
    "Identify what your analytics can observe, explain what it misses and evaluate the quality of completed actions. There is no universal conversion uplift to assume.",
    [
      [
        "Define a meaningful event",
        "Choose a completed signup, qualified enquiry or booked walkthrough. A button click is not necessarily a business outcome. Check the event fires once and document exactly what it represents.",
      ],
      [
        "Keep original sources inspectable",
        "Group identifiable assistant referral domains in analytics while retaining the source record. Test the rule on real visits. Some journeys lose referrer information; direct traffic alone is not evidence of AI discovery.",
      ],
      [
        "Use honest denominators",
        "In an illustrative sample, five qualified enquiries from twenty observed referral visits is 25%. The sample is small and may not represent future traffic. Compare similar periods and pages before calling a channel better than organic search.",
      ],
      [
        "Fulfil the recommendation",
        "If an answer presents your product as reporting software, the destination should explain reports, limits and next steps. Keep essential information visible. Do not require a form just to discover whether the product fits.",
      ],
      [
        "Check cross-domain attribution",
        "A marketing-site click to a separate product domain is not a completed signup. Configure cross-domain measurement only where you control both properties and have appropriate consent. Otherwise report outbound actions and product conversions separately.",
      ],
    ],
    [
      "Measure qualified outcomes.",
      "Keep sample size visible.",
      "Distinguish clicks from signups.",
    ],
    [
      "zero-click-search-transition",
      "measuring-share-of-model",
      "agency-playbook-ai-visibility",
    ],
  ),
  guide(
    "agency-playbook-ai-visibility",
    "An Agency Playbook for a Useful AI Visibility Service",
    "Agency Growth",
    "Package a transparent baseline, accountable client work and a review of outcomes before choosing a retainer price.",
    [
      [
        "Agree on scope",
        "Choose a category and primary market. Confirm which services the client wants to sell and which competitors buyers compare. Ask sales for common objections. Record exclusions so the report does not imply coverage you did not test.",
      ],
      [
        "Deliver the original records",
        "Include prompts, settings, dates and source URLs. Mark whether the client was mentioned, cited or recommended. Separate branded from discovery questions and explain how failed responses affect the denominator.",
      ],
      [
        "Assign accountable work",
        "Name the affected page, evidence gap, owner and approval step. Publishing a support-policy page is a task someone can estimate and complete. “Build authority” alone is not. Prioritize information that would change a buyer’s decision.",
      ],
      [
        "Price capacity and deliverables",
        "Estimate research, writing, development and outreach. Set limits for markets and review cycles. Confirm the software supports the scope. An invented standard retainer range does not establish value.",
      ],
      [
        "Report commercial context",
        "Show completed tasks, measured sample changes and qualified outcomes where observable. Explain uncertainty and external changes. Do not force every metric to tell the same positive story.",
      ],
    ],
    [
      "Define scope.",
      "Assign owners.",
      "Sell useful delivery, not guaranteed placement.",
    ],
    [
      "measuring-share-of-model",
      "converting-ai-search-referrals",
      "neha-jakhar",
    ],
  ),
  guide(
    "schema-markup-for-ai-crawlers",
    "Schema and AI Crawlers: What Helps, What Does Not",
    "Technical Architecture",
    "Structured data describes content. Crawler rules control access. Neither guarantees that an assistant will recommend a brand.",
    [
      [
        "Check readable responses",
        "An important URL should return useful text and working links without login. Inspect the actual production response. A local preview alone cannot prove that a hosting firewall or crawler rule allows access.",
      ],
      [
        "Describe the visible page",
        "Use appropriate types such as Organization, Article or BreadcrumbList. Include accurate URLs and relationships. Do not insert facts that visitors cannot see. Valid markup is not a guarantee of a search feature.",
      ],
      [
        "Treat crawler controls separately",
        "OpenAI documents search-related and training-related crawlers separately. Perplexity publishes its own crawler guidance. Read the current provider documentation before changing robots.txt or firewall rules; one agent does not cover every experience.",
      ],
      [
        "Avoid machine-only shortcuts",
        "Do not hide keyword blocks or fabricate reviews. Google says special AI markup is not required for its AI search features. A machine-readable file cannot replace accurate, accessible information for readers.",
      ],
      [
        "Test detail pages too",
        "Inspect robots.txt, HTTP status, canonical URL, visible content and links. Use Search Console and relevant structured-data tools after deployment. Nested routes can fail even when the homepage works.",
      ],
    ],
    [
      "Markup must match the page.",
      "Search and training controls differ.",
      "Test production access.",
    ],
    [
      "brand-verification-for-ai",
      "what-is-generative-engine-optimization",
      "multi-region-geo-strategies",
    ],
    [SCHEMA, BOTS, PERPLEXITY, AI],
  ),
  guide(
    "citation-velocity-and-trust-signals",
    "AI Citations: Evaluate Sources Without Inventing a Threshold",
    "LLM Mechanics",
    "There is no universal public number of mentions that makes an assistant recommend a business. Evaluate relevance and accuracy instead of chasing a citation quota.",
    [
      [
        "Define what you count",
        "A mention, backlink, linked citation and recommendation are different events. Choose a definition before comparing periods. Decide how repeated citations in one answer are counted and keep the rule consistent.",
      ],
      [
        "Inspect relevance before volume",
        "A detailed review may help a buyer more than many generic directory entries. Read what each source actually supports. A page mentioning your name is not necessarily an endorsement.",
      ],
      [
        "Record provenance",
        "Keep source URL, publisher, relevant passage and publication date where available. Mark whether it is first-party, independent, sponsored or user-generated. A total without provenance hides important differences.",
      ],
      [
        "Offer useful evidence",
        "For outreach, provide original data with a method, a relevant expert contribution or a factual correction. Disclose commercial relationships. Do not present paid placements as independent validation.",
      ],
      [
        "Interpret growth carefully",
        "A count may rise because more prompts were run or one site was cited repeatedly. Compare a stable sample and report unique sources separately. Do not infer an undocumented threshold from a handful of answers.",
      ],
    ],
    [
      "No known universal citation quota.",
      "Separate citations and endorsements.",
      "Track relevance and provenance.",
    ],
    [
      "digital-pr-and-unlinked-citations",
      "how-chatgpt-perplexity-select-brands",
      "measuring-share-of-model",
    ],
    [SPAM, HELPFUL],
  ),
  guide(
    "measuring-share-of-model",
    "How to Measure AI Visibility and Share of Mentions",
    "Analytics & KPI",
    "An AI visibility percentage is useful only when its denominator is clear. Define the prompt set, observation method and outcome before presenting a score.",
    [
      [
        "Define the metric",
        "Mention rate is answers naming a brand divided by valid recorded answers. Citation rate counts answers linking to a relevant source instead. Recommendation rate needs a documented qualifying rule. Do not blend these without explanation.",
      ],
      [
        "Work through an example",
        "In an illustrative audit of twenty valid answers, eight mention Acme Studio. Its mention rate is 8 ÷ 20 = 40%. Several brands can appear in one answer, so their individual mention rates do not necessarily sum to 100%.",
      ],
      [
        "Use share carefully",
        "Share of all recorded brand mentions uses a different denominator from percentage of answers containing your brand. Count eligible brands consistently and explain the formula. Neither measure automatically describes market share.",
      ],
      [
        "Make comparison possible",
        "Keep prompts, assistants, markets and collection settings documented. Report unavailable answers and sample size. Separate brand and non-brand prompts. Repeat observations to understand ordinary variation before interpreting small movements.",
      ],
      [
        "Connect the number to a decision",
        "A low mention rate on comparison questions may justify reviewing comparison content or source accuracy. A high rate on questions already naming your brand may add little acquisition value. Include original answers, useful tasks and observable business outcomes.",
      ],
    ],
    [
      "Show formula and denominator.",
      "Mention rate is not market share.",
      "Use repeatable comparisons.",
    ],
    [
      "converting-ai-search-referrals",
      "how-chatgpt-perplexity-select-brands",
      "agency-playbook-ai-visibility",
    ],
  ),
  guide(
    "fixing-negative-ai-hallucinations",
    "How to Respond to Inaccurate AI Answers About Your Business",
    "GEO Fundamentals",
    "Start with evidence and source corrections. Distinguish factual errors, reasonable criticism and unsupported interpretation before choosing a response.",
    [
      [
        "Triage by customer impact",
        "Prioritize wrong services, contact information, availability or prices that could mislead a buyer. Being omitted from a shortlist is not the same as a false claim. Record why the finding matters.",
      ],
      [
        "Preserve the evidence",
        "Save the prompt, answer, date, assistant and sources. Ask an authorised person to confirm the correct fact. Keep private customer details out of public corrections and external prompts.",
      ],
      [
        "Correct an identifiable source",
        "Update your own ambiguous or outdated page first. Use a third-party publisher’s normal corrections route and supply supporting evidence. Accurate criticism is not a factual error merely because it is inconvenient.",
      ],
      [
        "Use platform feedback",
        "Identify the false statement and provide a public source through the assistant’s feedback route. Do not promise that feedback guarantees removal or that enough counter-statements will force a change.",
      ],
      [
        "Retest and retain uncertainty",
        "Repeat the original question with comparable settings. Log whether the source changed and whether the answer changed. For unresolved issues, explain your limits of control and provide a clear official information page.",
      ],
    ],
    [
      "Correct facts, not legitimate opinions.",
      "Use evidence and normal feedback routes.",
      "Do not promise instant removal.",
    ],
    [
      "entity-drift-and-knowledge-graphs",
      "brand-verification-for-ai",
      "how-chatgpt-perplexity-select-brands",
    ],
  ),
  guide(
    "google-gemini-vs-perplexity-retrieval",
    "Comparing Google AI Search and Perplexity Without Mixing Metrics",
    "LLM Mechanics",
    "Different search experiences can produce different answers and sources. Compare observable behaviour rather than assuming one result explains every assistant.",
    [
      [
        "Name the exact experience",
        "Google AI Overviews and AI Mode are Search features. Gemini is also a product name in other contexts. Label the product and mode in each record rather than merging them into one name.",
      ],
      [
        "Use the same buyer task",
        "Keep category, location and constraints comparable. Save the wording and date. If a feature does not appear, log that outcome rather than substituting a positive answer from another product.",
      ],
      [
        "Evaluate usefulness",
        "Check whether an answer addresses the constraint, names suitable options and provides sources the reader can inspect. Read those sources for outdated facts and mismatched service areas. Length is not a measure of accuracy.",
      ],
      [
        "Keep metrics distinct",
        "A Search click and a brand mention in a Perplexity answer are different observations. Keep reports identifiable, then discuss them together around the buying decision. An unexplained combined rank hides those differences.",
      ],
      [
        "Improve the underlying information",
        "When multiple experiences expose the same missing information, improve the page. When answers differ, document the variation instead of inventing a platform-specific ranking rule. Recheck official guidance before altering crawl access.",
      ],
    ],
    [
      "Identify the product and mode.",
      "Keep the buyer task consistent.",
      "Do not merge unlike metrics.",
    ],
    [
      "schema-markup-for-ai-crawlers",
      "how-chatgpt-perplexity-select-brands",
      "measuring-share-of-model",
    ],
    [AI, PERPLEXITY],
  ),
  guide(
    "digital-pr-and-unlinked-citations",
    "Digital PR for AI Visibility: Build Evidence Worth Citing",
    "Agency Growth",
    "Useful digital PR gives publishers and readers something verifiable. Start with original work or relevant expertise, not a promised AI recommendation.",
    [
      [
        "Create a reason to reference the work",
        "Offer findings with a transparent method, practical expertise or a resource solving a specific problem. Explain sample limits. A press release repeating a product slogan is not independent evidence of effectiveness.",
      ],
      [
        "Choose the audience first",
        "Identify who needs the information and which publications serve them. Read recent work by the relevant writer. A small, well-matched publication may be more useful than an unrelated high-traffic page.",
      ],
      [
        "Make claims inspectable",
        "Include sources, named contributors and permission for client examples. Label commercial relationships. Do not invent testimonials or ask a publisher to portray paid placement as an independent award.",
      ],
      [
        "Measure in layers",
        "Record coverage, description accuracy, referral visits and qualified enquiries separately. Save any later assistant citation as an observation. It is not proof the coverage caused a recommendation.",
      ],
      [
        "Maintain the resource",
        "Check links and update facts when the underlying work changes. A useful resource keeps helping readers after the announcement and provides a better reference for future coverage.",
      ],
    ],
    [
      "Offer real evidence.",
      "Disclose commercial relationships.",
      "Separate coverage from AI outcomes.",
    ],
    [
      "citation-velocity-and-trust-signals",
      "agency-playbook-ai-visibility",
      "brand-verification-for-ai",
    ],
    [SPAM, HELPFUL],
  ),
  guide(
    "multi-region-geo-strategies",
    "Multi-Region GEO: Local Relevance Without Doorway Pages",
    "Technical Architecture",
    "A regional page should help someone choose or use a service in that market. Changing a country name across otherwise identical pages is not localization.",
    [
      [
        "Establish the real differences",
        "List differences in availability, language, support hours, currency, delivery and buyer constraints. If nothing meaningful changes, a global page may be more useful. Never imply an office that does not exist.",
      ],
      [
        "Collect local questions",
        "Ask sales and support what buyers in the market need to know. Adapt examples to relevant places and service boundaries. Label example questions honestly; they are not measured search demand.",
      ],
      [
        "Publish substance",
        "Explain delivery, examples and verifiable experience. Do not imply a professional authorisation the business does not hold. Ask the responsible team to approve licensing or service-scope statements before publication.",
      ],
      [
        "Use hreflang appropriately",
        "Hreflang describes corresponding language or regional versions, with reciprocal references. It does not belong on every page mentioning a country. Distinct industry topics are not translations of each other.",
      ],
      [
        "Review value before expansion",
        "Check whether each page answers a distinct need. Consolidate resources that add no meaningful information. A smaller maintained site is easier to keep accurate than a large set of interchangeable pages.",
      ],
    ],
    [
      "Do not invent offices or local results.",
      "Localize useful information.",
      "Distinguish equivalents from different topics.",
    ],
    [
      "schema-markup-for-ai-crawlers",
      "what-is-generative-engine-optimization",
      "brand-verification-for-ai",
    ],
    [SPAM, HELPFUL],
  ),
  guide(
    "b2b-saas-discovery-in-chatgpt",
    "B2B SaaS Discovery in AI Search: Help Buyers Evaluate Fit",
    "GEO Fundamentals",
    "Make evaluation evidence accessible: supported use cases, integrations, plan limits and a clear route to trying the product.",
    [
      [
        "Describe the job",
        "Explain the user, task, inputs and outcome with a concrete workflow. State unsupported use cases when they could change a purchase decision. Category buzzwords alone do not establish fit.",
      ],
      [
        "Publish comparison-ready details",
        "Document integration requirements, formats, limits and operational constraints. Explain what each feature actually does. Tie performance claims to a method and test conditions.",
      ],
      [
        "Be precise about security",
        "Link to approved security information and explain its scope. Do not claim certification merely because a hosting provider holds it. Route detailed procurement questions to an accountable team.",
      ],
      [
        "Test shortlist questions",
        "Use tasks including actual constraints such as a workflow or required integration. Record whether the product is described accurately. A recommendation based on a feature you do not offer is not a useful win.",
      ],
      [
        "Measure evaluation quality",
        "Provide a route to documentation, a trial or a relevant conversation. Track completed actions and qualification. Use recurring onboarding questions to improve public information where appropriate.",
      ],
    ],
    [
      "Document limits as well as features.",
      "Substantiate security claims.",
      "Measure qualified evaluation.",
    ],
    [
      "converting-ai-search-referrals",
      "brand-verification-for-ai",
      "how-chatgpt-perplexity-select-brands",
    ],
  ),
  guide(
    "ecommerce-and-product-llm-recommendations",
    "Ecommerce and AI Search: Make Product Information Useful",
    "GEO Fundamentals",
    "Accurate product information helps someone buy the right item. Keep attributes, availability, price and limitations understandable and current.",
    [
      [
        "Explain deciding attributes",
        "Document size, materials, compatibility and included items. Use clear text for important details rather than leaving everything inside an image. A shopper should understand whether the item fits their intended use.",
      ],
      [
        "Align commercial information",
        "Check visible price, availability and delivery against checkout and product feeds. Make market and variant differences clear. Do not promote unavailable items as in stock just to attract clicks.",
      ],
      [
        "Use genuine evidence",
        "Publish verified specifications, useful comparisons and authentic reviews. Do not invent ratings or mark up invisible reviews. Explain the conditions behind performance claims.",
      ],
      [
        "Inspect answer accuracy",
        "Use a stable sample of buyer tasks, including compatibility questions. Save answers and sources. Investigate claims your own product information does not support and correct identifiable source errors.",
      ],
      [
        "Measure shopping quality",
        "Review visits, add-to-cart events, purchases and returns where available. More traffic leading to unsuitable purchases is not necessarily success. Improve recurring information gaps before adding promotional copy.",
      ],
    ],
    [
      "Align facts with checkout.",
      "Use genuine reviews.",
      "Measure purchase quality.",
    ],
    [
      "brand-verification-for-ai",
      "converting-ai-search-referrals",
      "schema-markup-for-ai-crawlers",
    ],
    [SCHEMA, HELPFUL],
  ),
  guide(
    "healthcare-ymyl-in-generative-search",
    "Healthcare Visibility in AI Search: An Editorial Checklist",
    "GEO Fundamentals",
    "This is a public-information and marketing checklist for healthcare organisations. It does not provide clinical advice or determine licensing and advertising obligations.",
    [
      [
        "Clarify provider information",
        "Publish the correct clinic name, location, contact route and approved practitioner biographies. Link to public credential records where appropriate. A directory badge or schema type does not itself verify a clinician.",
      ],
      [
        "Assign qualified review",
        "Separate service and appointment information from clinical explanations. Have appropriately qualified people review clinical claims and decide when updates are needed. Do not invent reviewer approval or review dates.",
      ],
      [
        "Avoid outcome promises",
        "Do not use fabricated patient stories, guarantees or success percentages. The responsible team should establish evidence for any clinical statement and whether it is appropriate to publish locally.",
      ],
      [
        "Protect private information",
        "Keep patient details out of public content and external visibility-test prompts. Use general, non-identifying service questions. Handle sensitive incidents through the organisation’s own authorised processes.",
      ],
      [
        "Audit public accuracy",
        "Measure whether answers state the correct location, service scope and provider identity. A clinic recommendation is not a clinical assessment. Report materially misleading information with appropriate public evidence through the platform’s normal route.",
      ],
    ],
    [
      "Use qualified review.",
      "Never invent credentials or outcomes.",
      "Keep patient information private.",
    ],
    [
      "brand-verification-for-ai",
      "fixing-negative-ai-hallucinations",
      "multi-region-geo-strategies",
    ],
    [HELPFUL, SCHEMA],
  ),
  guide(
    "future-of-ai-search-2026",
    "AI Search Planning for Agencies: A Practical 2026 Checklist",
    "Agency Growth",
    "Build capabilities that remain useful as discovery products change. Use a pilot and real evidence instead of assuming a particular future market share.",
    [
      [
        "Separate work from predictions",
        "Accessible pages, accurate information and measurement are useful tasks today. Claims that agents will dominate every purchase by a fixed date are forecasts. Keep them out of client guarantees.",
      ],
      [
        "Choose a small pilot",
        "Select a category with real demand and a team able to implement changes. Define a baseline, deliverable and review date. Resource the work that follows; another report has limited value if nobody can act on it.",
      ],
      [
        "Retain a durable record",
        "Keep approved business facts, original answer records and a change log. Assign owners to tasks. These records make results easier to interpret even when an assistant changes its interface or behaviour.",
      ],
      [
        "Protect the customer journey",
        "Check mobile pages and forms. Make the next step clear. Investigate whether outbound visits become qualified product activity where measurement allows it. A new discovery channel does not remove the need for an understandable offer.",
      ],
      [
        "Stop low-value work",
        "Reduce duplicate reporting, unsupported claims and minor keyword-variation pages. Invest the capacity in examples, documentation and improvements clients can inspect. Review the pilot before scaling the service.",
      ],
    ],
    [
      "Pilot before scaling.",
      "Retain evidence and ownership.",
      "Improve the buyer experience.",
    ],
    [
      "agency-playbook-ai-visibility",
      "measuring-share-of-model",
      "what-is-generative-engine-optimization",
    ],
  ),
];
const neha = guide(
  "neha-jakhar",
  "Neha Jakhar | Prezlo Co-Founder & Head of Market Growth",
  "Leadership Profile",
  "Neha Jakhar is co-founder and Head of Market Growth at Prezlo. Her role focuses on market growth and helping agencies and brands understand the product.",
  [
    [
      "Understanding the buyer",
      "An agency evaluating software needs to understand client scope, workflow and delivery capacity. A brand needs to understand what is measured and what its team can act on. Clear positioning makes evaluation easier without promising an outcome outside the product’s control.",
    ],
    [
      "Her role at Prezlo",
      "Neha leads market growth. Prezlo connects AI visibility measurement with research and execution workflows. Use the official product site for current capabilities and plans. This profile describes her role without assigning unverified awards or client outcomes.",
    ],
    [
      "Explore her background directly",
      "Visit Neha’s personal website for current professional information. For the product, read the platform overview and agency guide linked below. Product access and billing are handled through Prezlo’s official channels.",
    ],
  ],
  [
    "Co-founder and Head of Market Growth.",
    "Personal website: nehajakhar.com.",
    "Official product: prezlo.io.",
  ],
  [
    "lopty-pascal",
    "agency-playbook-ai-visibility",
    "what-is-generative-engine-optimization",
  ],
  [
    { label: "Neha Jakhar: personal website", url: "http://nehajakhar.com/" },
    { label: "Prezlo: official product website", url: "https://prezlo.io/" },
  ],
);
export const BLOG_POSTS: BlogPost[] = [
  ...(preserved as BlogPost[]),
  neha,
  ...guides,
];
