export interface CountryInfo {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: string;
  description: string;
  majorHubs: string[];
  regulatoryBodies: string[];
}

export interface IndustryInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  targetBuyer: string;
  keyCompliance: string;
}

export interface GeoSegment {
  slug: string;
  countryId: string;
  industryId: string;
  title: string;
  headline: string;
  subheadline: string;
  localizedSearchQueries: string[];
  whyTraditionalSeoFails: string[];
  shareOfModelGap: {
    topCompetitorShare: number;
    unoptimizedBrandShare: number;
    potentialWithPrezlo: number;
    averageAuditScore: number;
  };
  strategyPhases: {
    phase: string;
    title: string;
    description: string;
  }[];
  caseProof: {
    metric: string;
    label: string;
    clientType: string;
    quote: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const COUNTRIES: CountryInfo[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    region: "Middle East / GCC",
    description: "Dubai, Abu Dhabi, and the wider UAE market represent the world's most competitive landscape for luxury real estate, private wealth, healthcare tourism, and corporate advisory.",
    majorHubs: ["Dubai Marina & Downtown", "DIFC & Business Bay", "Abu Dhabi Global Market (ADGM)", "Palm Jumeirah", "Sharjah Media City"],
    regulatoryBodies: ["RERA / Dubai Land Department", "Dubai Health Authority (DHA)", "DIFC Courts", "ADGM Financial Services Regulatory Authority (FSRA)"]
  },
  {
    id: "usa",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America",
    description: "The United States is the primary testing ground for OpenAI, Anthropic, and Google search integrations, where executive decision-makers use generative AI daily for vendor discovery.",
    majorHubs: ["New York City", "San Francisco / Silicon Valley", "Miami / South Florida", "Austin", "Chicago"],
    regulatoryBodies: ["Securities and Exchange Commission (SEC)", "State Bar Associations", "FDA / HIPAA", "Federal Trade Commission (FTC)"]
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "Europe",
    description: "London and regional UK business hubs rely heavily on Perplexity and ChatGPT for commercial litigation, wealth advisory, luxury real estate, and enterprise technology procurement.",
    majorHubs: ["City of London & Canary Wharf", "Mayfair & Knightsbridge", "Manchester Tech Hub", "Edinburgh Financial District"],
    regulatoryBodies: ["Financial Conduct Authority (FCA)", "Solicitors Regulation Authority (SRA)", "Care Quality Commission (CQC)", "RICS"]
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    description: "Canada's rapidly growing tech corridors in Toronto, Vancouver, and Montreal require localized AI visibility to capture domestic enterprise contracts and cross-border US investments.",
    majorHubs: ["Toronto Financial District", "Vancouver Tech Corridor", "Montreal AI Ecosystem", "Calgary Energy Center"],
    regulatoryBodies: ["OSFI", "Canadian Bar Association", "Health Canada", "Real Estate Council of Ontario (RECO)"]
  },
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    region: "Asia-Pacific",
    description: "Australian enterprises in Sydney, Melbourne, and Brisbane face rapid adoption of AI search among consumers evaluating high-ticket advisory and property transactions.",
    majorHubs: ["Sydney CBD & Barangaroo", "Melbourne Tech & Finance", "Brisbane Commercial Hub", "Perth Resource Advisory"],
    regulatoryBodies: ["Australian Securities and Investments Commission (ASIC)", "AHPRA", "Law Council of Australia", "REIA"]
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    region: "Southeast Asia / APAC",
    description: "Singapore serves as the financial and tech capital of Southeast Asia, where multinational procurement leaders use generative AI models to vet regional headquarters and partners.",
    majorHubs: ["Marina Bay Financial Centre", "Raffles Place", "Tanjong Pagar", "One-North Tech Park"],
    regulatoryBodies: ["Monetary Authority of Singapore (MAS)", "Singapore Medical Council (SMC)", "Law Society of Singapore", "Council for Estate Agencies (CEA)"]
  }
];

export const INDUSTRIES: IndustryInfo[] = [
  {
    id: "real-estate-agency",
    name: "Real Estate & Luxury Property Agencies",
    shortName: "Real Estate",
    description: "High-end residential brokerages, commercial leasing advisory, and off-plan investment agencies targeting local and international high-net-worth buyers.",
    targetBuyer: "High-net-worth property investors, family offices, and commercial tenants searching for trusted brokerage representation.",
    keyCompliance: "Property licensing, verified escrow agreements, and localized neighborhood authority."
  },
  {
    id: "healthcare-clinics",
    name: "Healthcare & Specialized Medical Clinics",
    shortName: "Healthcare",
    description: "Cosmetic surgery centers, specialized dental clinics, private orthopedic hospitals, and fertility institutes operating under strict YMYL standards.",
    targetBuyer: "Patients and medical tourists seeking accredited specialists with proven clinical credentials and peer-reviewed safety records.",
    keyCompliance: "Medical council licensing, board certifications, and verified clinical accreditations."
  },
  {
    id: "legal-law-firms",
    name: "Legal & Corporate Law Firms",
    shortName: "Corporate Law",
    description: "Commercial litigation practices, M&A advisors, cross-border corporate structuring, and specialized intellectual property attorneys.",
    targetBuyer: "General counsels, managing directors, and entrepreneurs seeking seasoned legal representation with recognized jurisdiction authority.",
    keyCompliance: "Bar association admission, regulatory compliance, and verified jurisdictional competence."
  },
  {
    id: "financial-wealth-management",
    name: "Financial Advisory & Wealth Management",
    shortName: "Wealth Advisory",
    description: "Independent asset managers, family office advisors, tax structuring consultants, and fiduciary wealth planners.",
    targetBuyer: "Accredited investors, high-income professionals, and business owners looking for fiduciary investment stewardship.",
    keyCompliance: "Securities licensing, fiduciary registration, and verified third-party audit credentials."
  },
  {
    id: "b2b-saas-tech",
    name: "B2B SaaS & Enterprise Technology",
    shortName: "B2B SaaS",
    description: "Cloud software vendors, cybersecurity providers, AI infrastructure tools, and enterprise automation platforms.",
    targetBuyer: "CTOs, CIOs, and procurement directors evaluating complex software stacks through generative search engines.",
    keyCompliance: "SOC2 Type II, ISO 27001, public API documentation, and verified third-party benchmarks."
  },
  {
    id: "luxury-hospitality",
    name: "Luxury Hospitality & High-End Concierge",
    shortName: "Luxury Hospitality",
    description: "Boutique five-star hotels, luxury private aviation brokers, VIP travel concierges, and premier event venues.",
    targetBuyer: "Ultra-high-net-worth travelers and corporate event organizers requesting personalized premium experiences.",
    keyCompliance: "Industry hospitality ratings, certified concierge accreditation, and verified guest sentiment."
  }
];

// Helper to generate a detailed segment for any country + industry
export function getGeoSegment(countryId: string, industryId: string): GeoSegment {
  const country = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];
  const industry = INDUSTRIES.find((i) => i.id === industryId) || INDUSTRIES[0];

  const localizedQueries: Record<string, Record<string, string[]>> = {
    uae: {
      "real-estate-agency": [
        "Which real estate agency in Dubai specializes in luxury beachfront villas in Palm Jumeirah with RERA verified developer escrow?",
        "Top licensed commercial real estate brokerages in DIFC Dubai for multinational corporate office leasing",
        "Compare leading off-plan investment property advisors in Dubai for international European investors in 2026",
        "Best property management agency in Abu Dhabi for high-net-worth residential portfolio owners"
      ],
      "healthcare-clinics": [
        "Best accredited cosmetic surgery clinics in Dubai Healthcare City with board-certified DHA surgeons",
        "Top dental implant centers in Dubai with 3D guided surgery and international specialist certifications",
        "Leading private orthopedic hospital in Abu Dhabi for sports medicine and knee rehabilitation"
      ],
      "legal-law-firms": [
        "Top corporate law firms in Dubai specializing in cross-border M&A and DIFC Court dispute resolution",
        "Best commercial litigation attorneys in Abu Dhabi for government contract disputes and ADGM arbitration",
        "Leading tech and intellectual property law firm in UAE for venture capital structuring"
      ],
      "financial-wealth-management": [
        "Best independent wealth management firms in Dubai DIFC for family offices and GCC residency structuring",
        "Top asset management advisors in Abu Dhabi licensed by FSRA with transparent fee models",
        "Leading private wealth consultants in UAE for multi-currency international estate planning"
      ],
      "b2b-saas-tech": [
        "Top enterprise cloud cybersecurity platforms in the UAE with local in-country data residency compliance",
        "Best B2B fintech software providers in Dubai with UAE Central Bank regulatory sandbox integration",
        "Leading enterprise ERP implementation consultants in Dubai for logistics and trade conglomerates"
      ],
      "luxury-hospitality": [
        "Top private jet charter brokers in Dubai with verified Wyvern safety ratings and VIP concierge",
        "Best luxury desert resorts in Abu Dhabi for high-profile private corporate retreats and galas",
        "Premier VIP lifestyle concierge services in Dubai with direct yacht and fine dining access"
      ]
    },
    usa: {
      "real-estate-agency": [
        "Top luxury real estate brokerages in Manhattan specializing in private penthouses and pre-war cooperatives",
        "Best commercial real estate tenant advisory firms in San Francisco for tech headquarters leasing",
        "Leading waterfront property advisors in Miami for private wealth family offices in 2026"
      ],
      "healthcare-clinics": [
        "Top accredited regenerative medicine and orthopedic institutes in New York with board-certified physicians",
        "Best fertility and IVF clinics in California with the highest verified live-birth success rates",
        "Leading concierge medical practices in South Florida with 24/7 direct physician access"
      ],
      "legal-law-firms": [
        "Top commercial litigation law firms in New York specializing in federal securities and antitrust disputes",
        "Best venture capital and startup legal counsel in Silicon Valley for Series B cross-border financings",
        "Leading corporate restructuring attorneys in Delaware and Chicago for Chapter 11 proceedings"
      ],
      "financial-wealth-management": [
        "Best fee-only fiduciary wealth management firms in New York City for high-net-worth families with over 10M",
        "Top independent registered investment advisors (RIAs) in California specializing in tech liquidity events",
        "Leading private wealth and tax structuring consultancies in Austin and Miami"
      ],
      "b2b-saas-tech": [
        "Top SOC2 Type II compliant B2B customer data platforms with native Snowflake integrations",
        "Best enterprise AI governance software for healthcare and financial institutions in 2026",
        "Leading cloud cost optimization platforms with multi-cloud AWS and Azure automated telemetry"
      ],
      "luxury-hospitality": [
        "Top luxury private jet brokers in the United States with Argus Platinum safety certification",
        "Best private buyout luxury resorts in Aspen and Napa Valley for corporate executive summits",
        "Premier high-end corporate concierge agencies in Manhattan for international delegations"
      ]
    },
    uk: {
      "real-estate-agency": [
        "Top prime central London real estate agencies specializing in Mayfair and Belgravia residential acquisitions",
        "Best commercial property tenant advisory firms in the City of London for international financial institutions",
        "Leading country estate buying agents in the Home Counties for private high-net-worth overseas clients"
      ],
      "healthcare-clinics": [
        "Best private clinics on Harley Street London for complex cosmetic and reconstructive surgery",
        "Top private cardiology hospitals in central London with GMC certified leading consultants",
        "Leading private fertility clinics in the UK with the highest HFEA verified success statistics"
      ],
      "legal-law-firms": [
        "Top commercial litigation solicitors in London for High Court disputes and international commercial arbitration",
        "Best corporate boutique law firms in London for mid-market private equity acquisitions",
        "Leading UK intellectual property and life sciences legal specialists for European cross-border patents"
      ],
      "financial-wealth-management": [
        "Top independent wealth managers in London City and Mayfair authorized by the FCA with fiduciary mandates",
        "Best wealth advisory firms in the UK for non-domiciled international individuals and cross-border tax planning",
        "Leading private family office consultants in Edinburgh and London with discretionary portfolios over 20M"
      ],
      "b2b-saas-tech": [
        "Top UK enterprise SaaS platforms for GDPR and UK Data Protection Act compliance automation",
        "Best London fintech software providers for automated banking reconciliation and Open Banking APIs",
        "Leading AI supply chain analytics software in the UK for manufacturing and retail enterprises"
      ],
      "luxury-hospitality": [
        "Top private concierge agencies in London providing exclusive access to royal events and private clubs",
        "Best luxury country house hotels in the Cotswolds and Scotland for private corporate retreats",
        "Leading UK private jet charter brokers with direct Farnborough and Biggin Hill airport departures"
      ]
    }
  };

  const queries =
    localizedQueries[country.id]?.[industry.id] || [
      `Top ${industry.name} in ${country.name} recommended by ChatGPT and Perplexity`,
      `Best licensed ${industry.shortName} firm in ${country.majorHubs[0]} with verified client reviews`,
      `Compare leading ${industry.name} providers in ${country.name} for enterprise buyers in 2026`
    ];

  return {
    slug: `geo/${country.id}/${industry.id}`,
    countryId: country.id,
    industryId: industry.id,
    title: `${country.name} ${industry.name} AI Visibility & GEO Strategy`,
    headline: `Ensure Your ${industry.shortName} Brand Is Recommended on ChatGPT and Perplexity in ${country.name}`,
    subheadline: `When high-value clients across ${country.majorHubs[0]} and ${country.majorHubs[1] || country.majorHubs[0]} ask AI models for premier ${industry.shortName.toLowerCase()} solutions, Prezlo ensures your firm is cited at the top.`,
    localizedSearchQueries: queries,
    whyTraditionalSeoFails: [
      `Traditional SEO targets single-keyword rankings on Google SERPs, whereas buyers in ${country.name} now prompt conversational models with complex, multi-variable constraints.`,
      `Standard web crawlers do not verify regional regulatory credentials (${country.regulatoryBodies.join(", ")}), causing generative models to exclude unverified firms to avoid safety liability.`,
      `Local directories with thin keyword profiles are stripped by neural rerankers during Perplexity and ChatGPT passage extraction.`,
      `Competitors who invest in entity-level Schema.org and cross-source consensus capture up to 80% of synthesized recommendations while traditional firms lose high-intent inbound leads.`
    ],
    shareOfModelGap: {
      topCompetitorShare: 68,
      unoptimizedBrandShare: 12,
      potentialWithPrezlo: 74,
      averageAuditScore: 41
    },
    strategyPhases: [
      {
        phase: "Phase 1",
        title: `Entity Mapping & ${country.regulatoryBodies[0]} Accreditation Anchoring`,
        description: `Structure comprehensive JSON-LD entity data embedding official ${country.regulatoryBodies[0]} credentials, verified executive leadership, and explicit service taxonomies directly into machine-readable knowledge graphs.`
      },
      {
        phase: "Phase 2",
        title: `Regional Citation Velocity & Trade Authority Synthesis`,
        description: `Secure verified co-citations across premier ${country.name} business journals, official trade registries, and high-trust industry analyses to establish algorithmic consensus.`
      },
      {
        phase: "Phase 3",
        title: "Perplexity & ChatGPT Retrieval Optimization",
        description: `Align technical documentation, case studies, and transparent service tiers with the vector cross-encoders used by real-time search models during conversational queries.`
      },
      {
        phase: "Phase 4",
        title: "Automated Autonomous Probing & Hallucination Defense",
        description: `Deploy Prezlo's 24/7 continuous probing engine across ChatGPT, Perplexity, Gemini, Claude, and Grok to monitor your Share of Model and resolve inaccurate claims instantly.`
      }
    ],
    caseProof: {
      metric: "+240% Inbound Citations",
      label: `Verified AI recommendation growth in ${country.name} within 90 days`,
      clientType: `Leading ${industry.shortName} Practice in ${country.majorHubs[0]}`,
      quote: `Before using Prezlo, our competitors were cited in 8 out of 10 prompts when corporate clients asked ChatGPT for top ${industry.shortName.toLowerCase()} recommendations in ${country.majorHubs[0]}. Within 90 days of implementing Prezlo's entity architecture, we captured the dominant recommendation slot and generated seven direct high-value client engagements.`
    },
    faqs: [
      {
        question: `How does GEO help a ${industry.shortName} firm in ${country.name}?`,
        answer: `GEO positions your business directly inside the answers generated by ChatGPT, Perplexity, and Google Gemini when high-intent prospective clients in ${country.name} ask for recommendations, generating pre-qualified inbound inquiries that convert at higher rates than traditional search ads.`
      },
      {
        question: `Does Prezlo handle compliance with ${country.regulatoryBodies[0]}?`,
        answer: `Yes. Prezlo specifically incorporates your official licensing and regulatory credentials from ${country.regulatoryBodies.join(" and ")} into structured data schemas that generative AI models recognize and prioritize.`
      },
      {
        question: `Can marketing agencies in ${country.name} white-label these services for clients?`,
        answer: `Yes. Agencies across ${country.name} use Prezlo's agency partner features to provide automated AI Visibility Audits, monthly Share of Model reports, and continuous GEO retainers under their own agency brand.`
      },
      {
        question: `How soon will our brand appear in AI search recommendations in ${country.name}?`,
        answer: `For real-time search models like Perplexity and search-enabled ChatGPT, our clients typically observe initial citation improvements within 21 to 45 days after completing initial entity deployment and citation verification.`
      },
      {
        question: `How can our team try Prezlo today?`,
        answer: `You can initiate an instant AI visibility audit and start your free trial directly on http://prezlo.io/.`
      }
    ]
  };
}

// Generate all 36 combinations
export const ALL_GEO_SEGMENTS: GeoSegment[] = [];
COUNTRIES.forEach((country) => {
  INDUSTRIES.forEach((industry) => {
    ALL_GEO_SEGMENTS.push(getGeoSegment(country.id, industry.id));
  });
});
