import { Service, Partner, Insight, OfficeLocation } from './types';

export const SERVICES: Service[] = [
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    category: 'Audit & Assurance',
    description: 'Rigorous independent evaluations designed to elevate transparency, verify internal controls, and build unwavering stakeholder confidence.',
    detailedPoints: [
      'Statutory & Regulatory Financial Auditing',
      'IFRS and GAAP Compliance Transitioning',
      'Internal Control Framework Assessment (SOX/COSO)',
      'ESG and Sustainability Assurance Reporting',
      'Fraud Investigation & Forensic Examinations'
    ],
    clientBenefit: 'Provides verified clarity that secures debt financing, strengthens institutional valuation, and satisfies complex regulatory demands.',
    caseStudyTitle: 'Global Supply Chain Restructuring',
    caseStudySummary: 'Redefined assurance controls across a 14-country logistics network, reducing compliance overhead by 18% while enhancing audit accuracy.'
  },
  {
    id: 'tax-advisory',
    title: 'Bespoke Tax Advisory',
    category: 'Tax Advisory',
    description: 'Sophisticated domestic and international tax structuring designed to minimize friction, maintain absolute compliance, and optimize corporate value.',
    detailedPoints: [
      'Cross-Border Corporate Tax Structuring',
      'Transfer Pricing Strategy & Documentation',
      'R&D Tax Incentives & Innovation Credits',
      'Private Wealth & High-Net-Worth Estate Planning',
      'Pre-Transaction Tax Due Diligence'
    ],
    clientBenefit: 'Enables tax-efficient global operations and prevents double-taxation risks during active expansion.',
    caseStudyTitle: 'Multinational Tech Cross-Border Spin-off',
    caseStudySummary: 'Structured an intellectual property transfer between UK and European jurisdictions, resulting in permanent compliance alignment and optimized patent box utilization.'
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance & M&A',
    category: 'Corporate Finance',
    description: 'Comprehensive advisory through every phase of a transaction, from strategic valuation and thorough due diligence to integration and fundraising.',
    detailedPoints: [
      'Buy-Side & Sell-Side Transaction Advisory',
      'Comprehensive Financial Due Diligence',
      'Business Valuation & Capital Restructuring',
      'Debt Advisory & Capital Sourcing',
      'Post-Merger Financial Integration & Alignment'
    ],
    clientBenefit: 'Maximizes deal value, uncovers hidden balance sheet risks, and secures competitive funding terms.',
    caseStudyTitle: 'Renewable Infrastructure Merger',
    caseStudySummary: 'Guided the financial integration of a £120M regional wind developer, identifying £4.2M in annual synergy savings during due diligence.'
  },
  {
    id: 'strategic-wealth',
    title: 'Strategic Wealth & Family Office',
    category: 'Strategic Wealth',
    description: 'Holistic wealth planning and stewardship frameworks built to preserve generational legacies and support long-term investment priorities.',
    detailedPoints: [
      'Family Governance & Succession Frameworks',
      'Generational Trust & Estate Structuring',
      'Philanthropic Strategy & Charitable Trust Management',
      'Capital Preservation & Asset Allocation Advisory',
      'Integrated Personal & Corporate Asset Alignment'
    ],
    clientBenefit: 'Instills confidence that family values and financial security are seamlessly preserved for future generations.',
    caseStudyTitle: 'Multi-Generational Estate Succession',
    caseStudySummary: 'Transferred control of a 70-year-old family industrial enterprise to third-generation stewards, avoiding disruptive tax events.'
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'elizabeth-vance',
    name: 'Elizabeth Vance',
    role: 'Managing Partner',
    credentials: 'FCA, CTA, BSc (Hons) Econ',
    bio: 'Elizabeth leads the firm with over 22 years of experience in cross-border corporate advisory. Formerly a senior partner at an elite global firm, she specializes in corporate restructuring and sovereign wealth consultations. Her guidance shapes our rigorous, client-first advisory model.',
    specialties: ['International Tax Structuring', 'Sovereign Advisory', 'Boardroom Strategy'],
    image: '/src/assets/images/partner_1_1783353686734.jpg',
    email: 'e.vance@vanguard-cpa.com',
    linkedIn: 'https://linkedin.com/in/elizabeth-vance-example'
  },
  {
    id: 'arthur-pendelton',
    name: 'Arthur Pendelton',
    role: 'Senior Tax Advisory Partner',
    credentials: 'CTA, MA (Cantab), STEP',
    bio: 'Arthur is a globally recognized tax expert specializing in private wealth, inheritance structures, and transnational estate governance. For 18 years, he has advised family offices, high-profile entrepreneurs, and trust structures on navigate shifting fiscal codes.',
    specialties: ['Trust & Estates', 'Transfer Pricing', 'Patent Box Optimization'],
    image: '/src/assets/images/partner_2_1783353699067.jpg',
    email: 'a.pendelton@vanguard-cpa.com',
    linkedIn: 'https://linkedin.com/in/arthur-pendelton-example'
  },
  {
    id: 'clara-sterling',
    name: 'Clara Sterling',
    role: 'Assurance & Corporate Finance Partner',
    credentials: 'FCA, BA (Accounting)',
    bio: 'Clara heads our audit practice and transactional advisory division. She acts as trusted adviser during mergers, acquisitions, and public offerings. Her deep focus on operational assurance makes her a vital asset for clients targeting strategic capital events.',
    specialties: ['M&A Financial Due Diligence', 'Statutory Audit', 'ESG Assurance'],
    image: '/src/assets/images/partner_3_1783353713177.jpg',
    email: 'c.sterling@vanguard-cpa.com',
    linkedIn: 'https://linkedin.com/in/clara-sterling-example'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'insight-global-minimum-tax',
    title: 'Navigating OECD Pillar Two: Strategic Planning for Middle-Market Enterprises',
    category: 'Taxation',
    excerpt: 'As global minimum tax frameworks begin to affect mid-sized transnational operations, proactive structural planning is key to mitigating tax friction.',
    content: [
      'The global tax landscape is undergoing its most profound transformation in a generation. Under the OECD’s Pillar Two initiative, a 15% global minimum tax is transitioning from a high-level policy agreement to active enforcement across major legal jurisdictions.',
      'While initial conversations focused on multi-billion dollar conglomerates, the compliance reporting net is rapidly catching middle-market enterprises with lean international subsidiaries. Understanding local administrative rules is now a baseline operational requirement.',
      'To prevent punitive local top-up taxes, firms must review their transfer pricing models, confirm high-precision tax accounting, and reassess intellectual property holdings. We recommend conducting a full jurisdiction impact analysis before the close of the current fiscal year.'
    ],
    date: 'June 18, 2026',
    readTime: '6 min read',
    author: 'Arthur Pendelton',
    authorRole: 'Senior Tax Advisory Partner'
  },
  {
    id: 'insight-esg-assurance',
    title: 'Beyond the Checklist: How ESG Assurance Drives Institutional Capital Valuation',
    category: 'Assurance',
    excerpt: 'Independent validation of sustainability metrics is no longer just a marketing choice—it is a core requirement for securing institutional debt and capital investments.',
    content: [
      'Institutional lenders and private equity groups are increasingly linking capital pricing directly to certified ESG benchmarks. Unverified sustainability assertions now present a major valuation risk for firms seeking competitive refinancing.',
      'Standardizing ESG assurance demands the same meticulous audit trail that applies to traditional cash flows. From scope 1 emissions to supply chain governance, every metric must be backed by transparent, repeatable workflows.',
      'Partnering with certified corporate assurance practitioners ensures your sustainability reports are fully audit-compliant. This active validation builds genuine trust with investment boards and protects capital market standings.'
    ],
    date: 'May 29, 2026',
    readTime: '5 min read',
    author: 'Clara Sterling',
    authorRole: 'Assurance & Corporate Finance Partner'
  },
  {
    id: 'insight-ma-due-diligence',
    title: 'Balance Sheet Integrity: Uncovering Strategic Risk in Modern Mid-Market Mergers',
    category: 'Corporate Strategy',
    excerpt: 'Merger and acquisition diligence is shifting from simple bookkeeping checks to evaluating technical liabilities, pension structures, and multi-state tax exposures.',
    content: [
      'A successful transaction relies on a complete, unvarnished look at potential liability exposures. In an elevated interest rate climate, simple retro-looking audits are insufficient to validate target earnings structures.',
      'Modern due diligence must evaluate unresolved tax positions, multi-state sales tax footprints, and contingent employee benefit liabilities. Neglecting these areas frequently leads to costly post-transaction disputes and post-merger integration friction.',
      'A meticulous buy-side diligence framework ensures transaction valuations reflect reality and includes precise indemnification structures in purchase agreements.'
    ],
    date: 'April 14, 2026',
    readTime: '8 min read',
    author: 'Elizabeth Vance',
    authorRole: 'Managing Partner'
  },
  {
    id: 'insight-capital-restructuring',
    title: 'Preparing Your Enterprise for Next-Gen Capital Restructuring',
    category: 'Market Trends',
    excerpt: 'An analysis of capital markets shows shifting preferences toward hybrid debt structures and private equity partners who prioritize operational efficiency.',
    content: [
      'Securing sustainable enterprise growth in today’s volatile market requires a highly agile capital structure. Traditional corporate banking lines are becoming less flexible, prompting a clear shift toward direct private credit structures.',
      'Optimizing debt-to-equity ratios and restructuring existing debt facilities can unlock vital working capital without diluting ownership. Our finance advisory highlights the steps necessary to clean up balance sheets prior to formal lender presentations.',
      'The key is to construct a rigorous, three-statement financial model that demonstrates resilient cash flow coverage across multiple stress-test scenarios.'
    ],
    date: 'March 05, 2026',
    readTime: '7 min read',
    author: 'Elizabeth Vance',
    authorRole: 'Managing Partner'
  }
];

export const LOCATIONS: OfficeLocation[] = [
  {
    id: 'loc-london',
    city: 'London',
    country: 'United Kingdom',
    address: 'One Temple Gardens, Temple, London EC4Y 9BB',
    phone: '+44 (0) 20 7489 9000',
    email: 'london@vanguard-cpa.com',
    timezone: 'Europe/London',
    localOffset: 0
  },
  {
    id: 'loc-new-york',
    city: 'New York',
    country: 'United States',
    address: 'Rockefeller Plaza, 28th Floor, New York, NY 10111',
    phone: '+1 (212) 355-6200',
    email: 'ny@vanguard-cpa.com',
    timezone: 'America/New_York',
    localOffset: -5
  },
  {
    id: 'loc-singapore',
    city: 'Singapore',
    country: 'Singapore',
    address: 'Marina Bay Financial Centre Tower 2, Singapore 018983',
    phone: '+65 6808 6000',
    email: 'sg@vanguard-cpa.com',
    timezone: 'Asia/Singapore',
    localOffset: 8
  }
];
