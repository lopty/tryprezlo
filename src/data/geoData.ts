export interface CountryInfo {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: string;
  description: string;
  majorHubs: string[];
  regulatoryBodies: string[];
  locale: string;
  approach: string;
}
export interface IndustryInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  targetBuyer: string;
  keyCompliance: string;
  evidence: string[];
  question: string;
  guide: string;
}
export const COUNTRIES: CountryInfo[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    region: "Middle East",
    locale: "en-AE",
    majorHubs: ["Dubai", "Abu Dhabi", "Sharjah"],
    regulatoryBodies: [],
    description:
      "Plan around the emirate and service area you actually serve. A Dubai example should not imply identical availability throughout the UAE.",
    approach:
      "Keep Arabic and English information consistent where both are offered. Explain the difference between serving residents, visiting customers and overseas buyers, and confirm who handles each enquiry.",
  },
  {
    id: "usa",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America",
    locale: "en-US",
    majorHubs: ["New York", "Austin", "Chicago"],
    regulatoryBodies: [],
    description:
      "A national category can hide very different state and city requirements. Start with a defined service area rather than treating the United States as one local market.",
    approach:
      "Separate nationwide availability from state-specific delivery. Publish the exact areas you serve and avoid implying professional authorisation in every state. Ask the responsible team to approve jurisdiction-related claims.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "Europe",
    locale: "en-GB",
    majorHubs: ["London", "Manchester", "Edinburgh"],
    regulatoryBodies: [],
    description:
      "Distinguish a UK-wide offer from one delivered in a particular city or nation. A London example does not demonstrate coverage across the whole United Kingdom.",
    approach:
      "Use terminology your local buyers use and explain where the service is available. Keep location, currency and support information consistent. Do not extend a professional service claim from one jurisdiction to another without checking its scope.",
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    locale: "en-CA",
    majorHubs: ["Toronto", "Vancouver", "Montreal"],
    regulatoryBodies: [],
    description:
      "Define coverage by province and city when that affects delivery. Distinguish Canadian pricing, support and availability from a cross-border US offer.",
    approach:
      "Where English and French pages are offered, maintain the same approved facts in both. Check provincial service scope and make the relevant currency explicit. A translated page needs actual language review, not only a language tag.",
  },
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    region: "Asia-Pacific",
    locale: "en-AU",
    majorHubs: ["Sydney", "Melbourne", "Brisbane"],
    regulatoryBodies: [],
    description:
      "Make state, city and remote-service boundaries explicit. Support hours and delivery details can matter when customers and teams work across time zones.",
    approach:
      "Explain which work is local and which can be delivered remotely. Use Australian terminology, state the relevant currency and describe actual availability rather than implying a physical presence in every city.",
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    region: "Southeast Asia",
    locale: "en-SG",
    majorHubs: ["Singapore"],
    regulatoryBodies: [],
    description:
      "A Singapore-based buyer may be evaluating a local service or a regional APAC supplier. Treat those as different decisions and clarify the scope of your offer.",
    approach:
      "Separate Singapore delivery from cross-border coverage. Explain support hours, contracting scope and languages you genuinely support. An APAC label should not substitute for a specific account of where the service works.",
  },
  {
    id: "global",
    name: "Global markets",
    code: "GLOBAL",
    flag: "◎",
    region: "Global",
    locale: "en",
    majorHubs: ["your target market"],
    regulatoryBodies: [],
    description:
      "Start with a global offer only where it genuinely fits. Identify exclusions, supported languages and delivery constraints before expanding a local strategy internationally.",
    approach:
      "Keep one approved source for product and business facts. Localize examples and practical delivery details when needed. Consolidate regional pages that do not give a buyer meaningful additional information.",
  },
];
export const INDUSTRIES: IndustryInfo[] = [
  {
    id: "real-estate-agency",
    name: "Real estate agencies",
    shortName: "Real Estate",
    description:
      "Help property buyers and sellers assess service areas, property types and the people responsible for an enquiry.",
    targetBuyer:
      "A buyer comparing agencies for a specific property type and location.",
    keyCompliance:
      "Publish only verified licensing and service-scope information.",
    evidence: [
      "Actual neighbourhood and property-type coverage",
      "Named team members and responsibilities",
      "Current listings or permissioned examples",
      "An explanation of the buying or selling process",
      "Clear contact and viewing arrangements",
    ],
    question:
      "Which real estate agencies in {city} can help with a residential purchase?",
    guide: "brand-verification-for-ai",
  },
  {
    id: "healthcare-clinics",
    name: "Healthcare clinics",
    shortName: "Healthcare",
    description:
      "Make clinic identity, appointment information and approved practitioner details easy to understand. Clinical claims require qualified review.",
    targetBuyer:
      "Someone checking service availability and how to book an appointment.",
    keyCompliance:
      "Use qualified review for clinical statements and check local advertising requirements.",
    evidence: [
      "Accurate clinic location and appointment route",
      "Approved practitioner biographies",
      "Links to appropriate public credential records",
      "Clear service scope and exclusions",
      "A dated review process for health content",
    ],
    question:
      "Which clinics in {city} offer appointment information for this service?",
    guide: "healthcare-ymyl-in-generative-search",
  },
  {
    id: "legal-law-firms",
    name: "Corporate law firms",
    shortName: "Corporate Law",
    description:
      "Help businesses understand practice areas, jurisdictional scope and how an initial enquiry is handled.",
    targetBuyer:
      "A business identifying legal advisers with the relevant practice and jurisdiction.",
    keyCompliance:
      "Confirm professional and advertising claims with the responsible legal team.",
    evidence: [
      "Named practitioners and approved biographies",
      "Actual jurisdictions and practice areas",
      "A clear explanation of the engagement process",
      "Permissioned examples without confidential details",
      "An accessible route for initial enquiries",
    ],
    question:
      "Which law firms in {city} explain their corporate advisory services?",
    guide: "brand-verification-for-ai",
  },
  {
    id: "financial-wealth-management",
    name: "Financial advisory firms",
    shortName: "Wealth Advisory",
    description:
      "Clarify who the service is for, the advisory scope and how potential clients can assess suitability before an enquiry.",
    targetBuyer:
      "A prospective client assessing the scope and fit of an advisory firm.",
    keyCompliance:
      "Use approved disclosures and substantiated credentials; do not imply investment outcomes.",
    evidence: [
      "Approved service and eligibility descriptions",
      "Responsible advisers and verifiable credentials",
      "A clear explanation of fees or the fee-discussion process",
      "Relevant risk and scope disclosures",
      "A contact route that avoids collecting sensitive data unnecessarily",
    ],
    question:
      "Which financial advisory firms in {city} explain their services and fees?",
    guide: "brand-verification-for-ai",
  },
  {
    id: "b2b-saas-tech",
    name: "B2B SaaS companies",
    shortName: "B2B SaaS",
    description:
      "Help software buyers compare the product against their actual workflow, integration needs and operating constraints.",
    targetBuyer:
      "A software buyer evaluating a category, integration or specific use case.",
    keyCompliance:
      "Publish accurate product and security information with its scope.",
    evidence: [
      "Documented use cases and supported workflows",
      "Integration and export documentation",
      "Plan limits and billing context",
      "Approved security and support information",
      "A useful trial or evaluation route",
    ],
    question: "Which B2B software providers support teams operating in {city}?",
    guide: "b2b-saas-discovery-in-chatgpt",
  },
  {
    id: "luxury-hospitality",
    name: "Hospitality businesses",
    shortName: "Luxury Hospitality",
    description:
      "Give travellers and event organisers enough detail to assess location, facilities, availability and practical arrangements.",
    targetBuyer:
      "A traveller or organiser comparing a stay or event against specific needs.",
    keyCompliance:
      "Keep ratings, facilities and availability claims accurate and attributable.",
    evidence: [
      "Current facilities and location information",
      "Original or authorised property photographs",
      "Specific accessibility and guest-policy details",
      "Booking, cancellation and enquiry routes",
      "Authentic reviews with clear provenance",
    ],
    question:
      "Which hotels in {city} explain their facilities for a small business event?",
    guide: "converting-ai-search-referrals",
  },
];
const LOCAL_NOTES: Record<string, string[]> = {
  uae: [
    "Distinguish ready properties from off-plan services and specify the neighbourhoods covered. An overseas buyer may need a different explanation of the process from a resident arranging a viewing.",
    "Separate resident appointment needs from visitor enquiries. State the clinic location, languages genuinely supported and booking route without making a treatment-outcome promise.",
    "Explain the actual scope of UAE and cross-border work. Do not turn a general corporate-services page into a claim of legal authorisation for every local framework.",
    "Separate local and international client eligibility in approved language. Explain how a prospective client can discuss scope and fees without publishing a promise of investment returns.",
    "Show how regional teams can evaluate the product, including support hours and relevant language capabilities. Do not imply UAE data residency unless it is documented.",
    "Differentiate stays, dining and events. Publish actual venue capacity and facilities, and explain which enquiries need confirmation from the property.",
  ],
  usa: [
    "Define the state, city and neighbourhoods served. Separate a national property-content resource from an agency’s actual local representation.",
    "Keep service-location information separate from general health education. Have the provider approve state-related availability and practitioner statements.",
    "State the jurisdictions and practices the team actually handles. An article about national law is not evidence of local representation or admission.",
    "Use approved eligibility and fee disclosures for the service area. A national marketing page must not imply that every prospect is eligible for advice.",
    "Clarify US availability, billing and support coverage. Publish the integration constraints relevant to the use case rather than assuming a US address establishes product fit.",
    "Explain location, venue facilities and travel arrangements. A guest planning a city stay needs different information from an organiser comparing event spaces.",
  ],
  uk: [
    "Make city and neighbourhood coverage explicit. Distinguish sales, lettings and management rather than presenting them as interchangeable services.",
    "Give the clinic’s actual location and appointment process. Do not imply that one provider operates throughout all UK nations.",
    "Describe the relevant jurisdiction rather than treating every UK legal system as identical. Ask the firm to approve the public wording of practice scope.",
    "Keep eligibility, fees and service boundaries clear. Distinguish educational financial content from the service the adviser is actually authorised to provide.",
    "Explain UK billing, support and contracting details where applicable. Use real procurement questions to decide which product documentation needs improvement.",
    "Differentiate leisure stays, corporate bookings and events. Make transport, facilities and policies useful to the specific booking decision.",
  ],
  canada: [
    "Separate province-specific service information and cross-border enquiries. Use accurate currency and explain which local areas the agency actually covers.",
    "State location and booking options clearly. Maintain equivalent approved information on French and English pages where both are provided.",
    "Specify provinces and actual practice areas. Do not infer Canada-wide representation from one office or a national-looking website.",
    "Separate client eligibility and service scope by the firm’s actual offer. Keep Canadian and US tax or investment discussions distinct and professionally reviewed.",
    "Explain Canadian availability, currency and support. If French-language support is offered, distinguish a translated page from actual product and support coverage.",
    "Make seasonal availability and practical travel information clear. Separate a property’s own location from broader destination advice.",
  ],
  australia: [
    "Define state and suburb coverage. Explain which activities are delivered locally and whether remote consultation is available.",
    "Give the clinic’s service area and appointment route. Confirm practitioner statements with the provider rather than assuming an online consultation applies everywhere.",
    "Identify the firm’s actual state and practice scope. Make remote enquiries understandable without implying unrestricted representation.",
    "Explain eligibility and service scope using approved wording. Avoid testimonials or examples that imply a guaranteed financial outcome.",
    "State support coverage across relevant time zones. Clarify Australian billing and procurement information where those details differ from the global offer.",
    "Explain the destination, facilities and travel arrangements. A city event booking and a remote leisure stay need different practical information.",
  ],
  singapore: [
    "Distinguish local property services from overseas-property marketing. State who handles enquiries and which property types the team actually represents.",
    "Separate local appointments from visitor enquiries. Use approved practitioner and clinic information and avoid claims about guaranteed outcomes.",
    "Separate Singapore practice scope from regional advisory coordination. A regional network does not itself establish representation in every jurisdiction.",
    "Use approved service descriptions and eligibility wording. Clarify whether the offer is for local or cross-border clients without implying blanket authorisation.",
    "Distinguish Singapore coverage from a wider APAC offering. Explain languages, contracting and support actually available to the buyer.",
    "Clarify location, facilities and event arrangements. Separate a Singapore property’s offer from regional itinerary or concierge services.",
  ],
  global: [
    "Define countries and property types actually covered. Avoid a global brokerage claim if enquiries are ultimately referred to unrelated local providers.",
    "Make location and booking eligibility explicit for every service. Do not imply international clinical availability from a global information page.",
    "Explain how enquiries are allocated to qualified local counsel. Do not present a network as a single firm authorised in every jurisdiction.",
    "State service exclusions and eligibility clearly. Global educational content must not imply that financial advice is offered everywhere.",
    "Document supported regions, languages, formats and support hours. Distinguish product availability from local data residency or contractual commitments.",
    "Explain the locations actually offered and who confirms the booking. Keep third-party availability separate from facilities the business directly controls.",
  ],
};
export function getGeoSegment(countryId: string, industryId: string) {
  const country = COUNTRIES.find((c) => c.id === countryId);
  const industry = INDUSTRIES.find((i) => i.id === industryId);
  if (!country || !industry) throw new Error("Unknown market or industry");
  const idx = INDUSTRIES.indexOf(industry);
  const place =
    country.id === "global"
      ? "global markets"
      : ["uae", "usa", "uk"].includes(country.id)
        ? "the " + country.name
        : country.name;
  return {
    slug: `${country.id}/${industry.id}`,
    countryId,
    industryId,
    title: `${industry.shortName} AI Visibility in ${place}`,
    headline: `AI visibility for ${industry.name.toLowerCase()} in ${place}`,
    subheadline: `A practical planning guide for ${industry.name.toLowerCase()} serving ${place}. Measure relevant buyer questions, improve public information and review qualified enquiries.`,
    localNote: LOCAL_NOTES[country.id][idx],
    localizedSearchQueries: [
      industry.question.replace("{city}", country.majorHubs[0]),
      `How should I compare ${industry.name.toLowerCase()} serving ${country.majorHubs[0]}?`,
      `What should I check before contacting a ${industry.shortName.toLowerCase()} provider in ${place}?`,
    ],
    faqs: [
      {
        question: `Where should a ${industry.shortName.toLowerCase()} team in ${place} begin?`,
        answer: `Start with the real service scope, a short set of buyer questions and a record of current answers. For this market: ${LOCAL_NOTES[country.id][idx]}`,
      },
      {
        question: "Are the example prompts measured search demand?",
        answer:
          "No. They are planning examples to adapt and validate with your sales, support or customer research. They are not keyword-volume estimates or measured assistant results.",
      },
      {
        question: "Does this guide establish local regulatory compliance?",
        answer: `No. ${industry.keyCompliance} This guide concerns marketing information and measurement, not professional, medical, financial or legal advice.`,
      },
      {
        question: "Does Prezlo guarantee recommendations or enquiries?",
        answer:
          "No. Answers vary by assistant, prompt and context. Track a consistent sample and review actual outcomes without promising a particular placement or performance uplift.",
      },
      {
        question: "How can I try Prezlo?",
        answer:
          "Visit prezlo.io for product access and current plan terms. The 14-day Pro trial requires a card; cancel before it ends to avoid a charge.",
      },
    ],
  };
}
export const ALL_GEO_SEGMENTS = COUNTRIES.flatMap((c) =>
  INDUSTRIES.map((i) => getGeoSegment(c.id, i.id)),
);
