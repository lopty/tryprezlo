export interface CorePage {
  path: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  intro: string;
  sections: { heading: string; text: string; items?: string[] }[];
  faqs: { question: string; answer: string }[];
  related: string[];
}
export const CORE_PAGES: CorePage[] = [
  {
    path: "/platform",
    title: "AI Visibility & GEO Platform | How Prezlo Works",
    description:
      "See how Prezlo connects AI visibility measurement, competitor research, content and outreach. A practical workflow for agencies and brands.",
    label: "The platform",
    heading: "Understand the answer. Improve the signals behind it.",
    intro:
      "Prezlo is an AI visibility, AI SEO and generative engine optimization platform. It brings measurement and execution into the same workflow, so your team can move from a finding to a reviewed action.",
    sections: [
      {
        heading: "Start with a reliable baseline",
        text: "Choose the brand, category, locations and buyer questions that matter to your business. Review the actual answers, mentions and cited sources, rather than treating one score as a complete picture.",
        items: [
          "Keep brand searches separate from category discovery.",
          "Record the assistant, location, date and exact prompt.",
          "Repeat a consistent prompt set before interpreting movement.",
        ],
      },
      {
        heading: "Connect research to a practical backlog",
        text: "Use competitor and source research to identify missing information. A useful finding names the page or profile involved, explains why it matters to a buyer and assigns a next step. A mention alone does not establish trust, suitability or a sale.",
      },
      {
        heading: "Review the work before it goes live",
        text: "Prezlo supports content, structured data and outreach workflows. Review accuracy, scope and publishing permissions before approving work. The available automation and cadence depend on the plan and connected systems.",
        items: [
          "Correct inconsistent company and service information.",
          "Publish useful answers backed by your own experience.",
          "Review outreach prospects and the evidence supporting each pitch.",
        ],
      },
      {
        heading: "Measure progress without a promise of placement",
        text: "Track visibility alongside qualified visits, enquiries and completed actions. AI answers vary, and no platform controls which business an assistant recommends. Use the measurement to guide decisions and assess whether completed work is helping.",
      },
    ],
    faqs: [
      {
        question: "Which assistants does Prezlo track?",
        answer:
          "Prezlo lists ChatGPT, Perplexity, Claude, Gemini, Grok, DeepSeek and Meta AI in its core measurement coverage. Check the official product documentation for current availability.",
      },
      {
        question: "Does adding schema guarantee a recommendation?",
        answer:
          "No. Structured data can clarify information on your site, but it does not guarantee indexing, a citation or a recommendation.",
      },
      {
        question: "Where do I create an account?",
        answer:
          "Create your account on prezlo.io. Try Prezlo explains the product and provides guides; the product account and billing are managed on the official platform.",
      },
    ],
    related: ["/for-agencies", "/for-brands", "/geo-framework", "/pricing"],
  },
  {
    path: "/for-agencies",
    title: "AI Visibility & GEO Software for Agencies | Prezlo",
    description:
      "Build an AI visibility service around repeatable measurement, source research and practical client actions. Explore Prezlo for marketing and SEO agencies.",
    label: "For agencies",
    heading: "Make AI visibility useful to every client.",
    intro:
      "Your clients need to know what buyers are being told about them and what to do next. Build a service around clear evidence, accountable delivery and business outcomes.",
    sections: [
      {
        heading: "Scope the engagement around a buying decision",
        text: "Choose one client category and market first. Agree which services and competitors belong in the comparison. Collect the questions the client actually hears in sales calls. A short, relevant baseline is more useful than hundreds of loosely related prompts.",
      },
      {
        heading: "Deliver a report a client can check",
        text: "Show the original answer, the prompt and date, whether the client appeared and which sources were cited. Explain the sample size and limits. Compare like-for-like runs instead of presenting selected screenshots as a trend.",
        items: [
          "Separate a brand mention from a cited link and a recommendation.",
          "Include missing and unfavourable answers, not only positive examples.",
          "Keep one consistent reporting method across review periods.",
        ],
      },
      {
        heading: "Price the work you can deliver",
        text: "Define research, content, website changes and outreach as explicit deliverables. Assign an owner, approval step and due date to each. Set your fee from the work and capacity required, rather than an invented industry retainer range or a promised AI ranking.",
      },
      {
        heading: "Use one workflow across client profiles",
        text: "Prezlo supports multiple client profiles and connects measurement to follow-up work. Before committing to a client package, confirm profile limits, credits, roles and required integrations in the official plan details. Do not assume white-label reports or reseller rights are included.",
      },
    ],
    faqs: [
      {
        question: "Can I manage more than one client?",
        answer:
          "Yes. Prezlo supports multiple profiles. Included profiles and extra-profile charges vary by plan, so confirm the current limits on prezlo.io/pricing.",
      },
      {
        question: "Should GEO replace our SEO service?",
        answer:
          "Usually it is more useful to add AI visibility measurement to existing SEO, content and digital PR work. Keep reporting distinct so clients can see what each activity contributes.",
      },
      {
        question: "Can I guarantee a citation to a client?",
        answer:
          "No. Define controllable deliverables and a measurement method. An assistant’s answer is outside the agency’s control.",
      },
    ],
    related: [
      "/platform",
      "/pricing",
      "/articles/agency-playbook-ai-visibility",
      "/solutions",
    ],
  },
  {
    path: "/for-brands",
    title: "AI Visibility & GEO Optimization for Brands | Prezlo",
    description:
      "Understand how AI assistants describe your brand, compare competitors and prioritize useful improvements to content, profiles and cited sources.",
    label: "For brands",
    heading: "Know the story buyers hear about your brand.",
    intro:
      "A buyer can encounter your business in an AI answer before visiting your website. Make sure your team can inspect those answers and improve the information available about your business.",
    sections: [
      {
        heading: "Ask the questions buyers ask",
        text: "Build a prompt set around the decision, not just the brand name. Include category discovery, shortlisting, comparison and practical buying constraints. An answer to a branded prompt is not evidence that unfamiliar buyers will discover you.",
      },
      {
        heading: "Check descriptions against your own evidence",
        text: "Compare services, product availability, locations and claims with approved business information. Prioritize errors that could mislead a buyer. Fix your own source first, then document any correction request to an external publisher.",
      },
      {
        heading: "Make your expertise easier to assess",
        text: "Publish clear service boundaries, real examples, named contributors and support information. Explain who the product is for and who it may not suit. A useful comparison tells a buyer how to choose, rather than declaring your brand the best without a method.",
      },
      {
        heading: "Connect the work to commercial value",
        text: "Track qualified enquiries and product signups where measurement is available. Look at the quality of leads as well as referral counts. Treat visibility as one diagnostic measure, not a substitute for revenue or customer feedback.",
      },
    ],
    faqs: [
      {
        question: "Can Prezlo fix every inaccurate answer?",
        answer:
          "It can help identify gaps and support work on your public information. It cannot directly edit every assistant’s knowledge or guarantee that an external answer changes.",
      },
      {
        question: "What should we prepare?",
        answer:
          "Gather your official website, brand descriptions, service list, target markets, competitor list and examples of questions your buyers ask.",
      },
      {
        question: "How quickly will results change?",
        answer:
          "There is no universal timeline. Crawling, indexing, source updates, assistant behaviour and your starting point all affect what changes and when.",
      },
    ],
    related: [
      "/platform",
      "/solutions",
      "/articles/brand-verification-for-ai",
      "/pricing",
    ],
  },
  {
    path: "/geo-framework",
    title: "A Practical GEO Framework for AI Visibility | Try Prezlo",
    description:
      "A seven-step generative engine optimization framework: define buyer questions, measure answers, audit sources, improve content and review outcomes.",
    label: "The GEO framework",
    heading: "Seven steps. Evidence at every stage.",
    intro:
      "Generative engine optimization is the work of improving how a business is understood and discovered in AI answers. Use this framework to organise the work, not as a claim about a secret ranking algorithm.",
    sections: [
      {
        heading: "1. Define the buyer and decision",
        text: "Name the audience, service, location and constraints. Collect real buyer questions. Agree what counts as a useful answer before measuring it.",
      },
      {
        heading: "2. Establish a baseline",
        text: "Run a fixed prompt set, save original answers and cited links, and record dates and settings. Include failures. Keep branded and non-branded discovery separate.",
      },
      {
        heading: "3. Check your business information",
        text: "Compare the name, address or service area, services, leadership and contact details across your own pages and relevant profiles. Remove outdated claims and make ownership clear.",
      },
      {
        heading: "4. Review the cited sources",
        text: "Identify which sources appear in answers and whether they accurately describe the market. A source’s appearance is an observation, not proof that acquiring a link there will cause a recommendation.",
      },
      {
        heading: "5. Publish useful evidence",
        text: "Answer questions with actual experience, examples, methodology and clear limitations. Improve an existing page when it already serves the same intent. Avoid creating interchangeable pages only to target a keyword.",
      },
      {
        heading: "6. Make pages accessible and understandable",
        text: "Serve readable HTML, working links and accurate metadata. Use structured data that matches the visible content. Google does not require a special AI schema for its AI search features.",
      },
      {
        heading: "7. Review outcomes and revise",
        text: "Repeat the baseline consistently, inspect qualified visits and enquiries, and record what work was completed. Do not attribute every change in an answer to the last edit your team made.",
      },
    ],
    faqs: [
      {
        question: "Is this framework a Google ranking standard?",
        answer:
          "No. It is an editorial workflow for planning and measuring work. Google publishes its own Search guidance, which is linked in our guides.",
      },
      {
        question: "Can we follow it without a tool?",
        answer:
          "Yes. A spreadsheet and saved answers can support a small baseline. Software becomes useful when you need repeatable collection, multiple profiles and organised follow-up.",
      },
    ],
    related: [
      "/articles/what-is-generative-engine-optimization",
      "/articles/measuring-share-of-model",
      "/ai-visibility-vs-seo",
      "/platform",
    ],
  },
  {
    path: "/ai-visibility-vs-seo",
    title: "AI Visibility vs SEO: Differences and Shared Foundations",
    description:
      "Compare AI visibility and traditional SEO by goals, measurement, sources and practical work. Learn how to use both without abandoning search fundamentals.",
    label: "Understand the difference",
    heading: "Search rankings and AI answers need different measures.",
    intro:
      "SEO and AI visibility overlap, but they do not answer the same reporting question. One tracks discovery through search results. The other examines how assistants mention, cite and recommend businesses.",
    sections: [
      {
        heading: "What SEO measures",
        text: "Organic search reporting often includes impressions, clicks, landing pages, queries and conversions. A ranking describes a result for a particular query and context. It does not describe every AI answer a buyer could receive.",
      },
      {
        heading: "What AI visibility measures",
        text: "A prompt-based audit records whether your brand appears, what is said, and which sources are linked. The denominator matters: a 60% mention rate across ten selected prompts says something about those ten prompts, not the entire market.",
      },
      {
        heading: "The work often shares a foundation",
        text: "Accessible pages, helpful content, accurate business information and credible references help readers assess your business. Keep these foundations healthy. Do not assume keyword rankings have stopped mattering or that structured data can force a model to recommend you.",
      },
      {
        heading: "Use the right report for the decision",
        text: "Combine Search Console trends with a documented AI answer sample and conversion data. Keep them identifiable rather than merging everything into an opaque score. Investigate an important page losing traffic before blaming AI search as the only cause.",
      },
    ],
    faqs: [
      {
        question: "Does GEO replace SEO?",
        answer:
          "No. AI discovery creates additional questions to measure, while technical SEO and useful content remain relevant.",
      },
      {
        question: "Can Search Console report every AI assistant?",
        answer:
          "No. It reports Google Search performance. Use referral analytics and documented assistant-specific observations for other discovery sources, with their measurement limitations.",
      },
    ],
    related: [
      "/geo-framework",
      "/articles/zero-click-search-transition",
      "/articles/converting-ai-search-referrals",
      "/platform",
    ],
  },
  {
    path: "/pricing",
    title: "Prezlo Pricing: Pro, Growth & Enterprise | Try Prezlo",
    description:
      "Compare Prezlo Pro at $89/month, Growth at $149/month and custom Enterprise plans. See trial terms and confirm current prices on prezlo.io.",
    label: "Plans & pricing",
    heading: "Choose the right amount of help.",
    intro:
      "Start with the scope your team needs. Prices below are USD monthly list prices checked on Prezlo’s official pricing page on 20 October 2026. Confirm current limits, billing and terms before subscribing.",
    sections: [
      {
        heading: "Pro · $89 / month",
        text: "For teams that want measurement and a guided workflow. Includes one profile, five tracked keywords in one location and 1,000 monthly credits. Extra profiles are listed at $20 per month. Check the official plan for refresh cadence and feature limits.",
      },
      {
        heading: "Growth · $149 / month",
        text: "For teams that want a broader execution workflow. The official plan lists 12 keywords, three locations, 2,000 monthly credits and publishing and outreach features. Extra profiles are listed at $60 per month. Review connected-system and approval requirements.",
      },
      {
        heading: "Enterprise · Custom pricing",
        text: "For businesses that need a managed engagement. Ask Prezlo to confirm deliverables, implementation scope, support and commercial terms in writing.",
      },
      {
        heading: "Understand the trial before starting",
        text: "New accounts start with a 14-day trial of Pro. A card is required. Cancel before the trial ends to avoid a charge. Quarterly and annual billing have different discounts; use the official checkout for the total you will pay.",
      },
    ],
    faqs: [
      {
        question: "Is a card required for the Pro trial?",
        answer:
          "Yes. Prezlo’s official pricing page says a card is required for the 14-day Pro trial, with no charge if you cancel before it ends.",
      },
      {
        question: "Is Try Prezlo the checkout?",
        answer:
          "No. Accounts, current prices, subscriptions and cancellations are handled on prezlo.io.",
      },
      {
        question: "Where can I confirm feature limits?",
        answer:
          "Use the official pricing page at https://prezlo.io/pricing before subscribing. Product features and billing details can change.",
      },
    ],
    related: ["/platform", "/for-agencies", "/for-brands"],
  },
  {
    path: "/about",
    title: "About Try Prezlo | AI Visibility Guides & Product Overview",
    description:
      "Learn about Try Prezlo, its relationship to prezlo.io and the people behind the product: Lopty Pascal and Neha Jakhar.",
    label: "About Try Prezlo",
    heading: "Make AI visibility easier to understand and act on.",
    intro:
      "TryPrezlo.com introduces Prezlo and publishes practical guides for agencies and brands. The product, account management and billing live on prezlo.io. This site has a commercial purpose: helping readers decide whether Prezlo fits their work.",
    sections: [
      {
        heading: "The people behind the product",
        text: "Lopty Pascal is the technical co-founder and Head of Engineering and Infrastructure. Neha Jakhar is co-founder and Head of Market Growth. Their profiles and personal sites are linked below, so readers can explore their backgrounds directly.",
      },
      {
        heading: "What you can expect here",
        text: "We explain how to measure a sample of AI answers, improve the quality of public business information and evaluate outcomes. We distinguish examples from measured results and link to primary guidance where we use it.",
      },
      {
        heading: "How we handle commercial claims",
        text: "We do not promise AI rankings, guaranteed citations or fixed performance gains. Product details come from the official Prezlo site and should be confirmed before purchase. Founder profiles and personal websites help readers check the professional context behind the product.",
      },
    ],
    faqs: [],
    related: [
      "/articles/lopty-pascal",
      "/articles/neha-jakhar",
      "/editorial-policy",
      "/contact",
    ],
  },
  {
    path: "/editorial-policy",
    title: "Editorial Policy & Corrections | Try Prezlo",
    description:
      "How Try Prezlo handles sources, examples, product claims, commercial disclosure and corrections in its AI visibility and GEO content.",
    label: "Editorial standards",
    heading: "Useful advice should be possible to check.",
    intro:
      "This is a commercial education site for Prezlo. We want readers to understand both the product and the limits of what can be concluded from an AI visibility audit.",
    sections: [
      {
        heading: "Sources and attribution",
        text: "Use primary documentation for platform behaviour and the official product site for plan details. An outbound link is a source to inspect, not an endorsement. Practical recommendations are our editorial guidance unless explicitly attributed.",
      },
      {
        heading: "Examples and measurement",
        text: "Sample prompts, demo scores and fictional company names are illustrative. They are not search-volume research, customer results or a claim that a particular prompt produces a particular answer. A measured result should disclose its sample, date range and method.",
      },
      {
        heading: "Dates and authorship",
        text: "The dates on substantially revised guides identify this edition. We do not advance dates automatically on every build. Guides prepared for this project are attributed to Try Prezlo Editorial rather than assigning unreviewed words to a founder. Individual bylines and published dates identify the attributed author and edition. The presence of an external claim does not mean its underlying performance data has been independently audited by this site.",
      },
      {
        heading: "Corrections and updates",
        text: "Send the page URL, the statement in question and the evidence for a correction to support@prezlo.io. Product details can change; the official pricing page and checkout take precedence over summaries here.",
      },
    ],
    faqs: [],
    related: ["/about", "/contact", "/articles"],
  },
  {
    path: "/contact",
    title: "Contact Prezlo | Product Questions & Editorial Corrections",
    description:
      "Contact Prezlo about the product or send a correction to a Try Prezlo guide. Find the official platform and founder websites.",
    label: "Get in touch",
    heading: "A direct route to the right conversation.",
    intro:
      "For product questions, account support or a correction to a guide, email support@prezlo.io. Include the page URL and enough context to help the team understand the request.",
    sections: [
      {
        heading: "Product and billing",
        text: "Use prezlo.io for product access, subscriptions and the latest plan details. Do not send passwords, payment-card numbers or other account secrets by email.",
      },
      {
        heading: "Editorial corrections",
        text: "Send the exact passage, page address and a primary source supporting the change. For an article about a person or company, identify which public information needs updating.",
      },
    ],
    faqs: [],
    related: ["/about", "/editorial-policy", "/pricing"],
  },
];
