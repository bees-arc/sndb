export interface BoardMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
  credentials: string;
}

export interface AdvisorContact {
  name: string;
  title: string;
  email: string;
  phone: string;
  directExt: string;
}

export interface StockTicker {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  change: number;
  pctChange: number;
  volume: string;
  turnover: string;
}

export interface DownloadDoc {
  id: string;
  filename: string;
  title: string;
  category: 'CDS Accounts' | 'KYC Documents' | 'Agreements' | 'Regulatory Policies' | 'Educational';
  size: string;
  path: string;
  description: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
  ctaText: string;
}

export const BOARD_MEMBERS: BoardMember[] = [
  {
    id: 'arjun-fernando',
    name: 'Arjun Fernando',
    role: 'Chairman',
    credentials: 'MSc (Clemson), BSc (Southern Illinois), ACIB (UK)',
    bio: 'Mr. Arjun Rishya Fernando was appointed to the Board of NDB Securities (Private) Limited on 14th March 2018. He currently serves as a Director on the Boards of Central Finance PLC, Home Finance Company Fiji, Durdans Medical Surgical Hospitals (Private) Limited, and First Media Solutions. He also serves on the Boards of NDB Capital Holdings Limited and NDB Zephyr Partners Ltd. Mr. Fernando functioned as CEO/Director of DFCC Bank from 2013 to 2017 and held a distinguished career with HSBC in Sri Lanka and overseas.'
  },
  {
    id: 'b-s-sinniah',
    name: 'B S Sinniah',
    role: 'Director',
    credentials: 'Master of Applied Finance (Macquarie University, Australia)',
    bio: 'A veteran banker, Mr. Sinniah retired in 2018 as Managing Director of Citibank and Global Head of FX Corporate Sales and e-FX Solutions after 38 illustrious years of international service. He began his career at Citibank Colombo, transitioned to Citibank Australia, and concluded his career based out of London. He currently serves as a Director of National Development Bank PLC, Transact Lanka, and Knightsbridge eCommerce.'
  },
  {
    id: 'senaka-kakiriwaragodage',
    name: 'Senaka Kakiriwaragodage',
    role: 'Director',
    credentials: 'BSc 1st Class (Moratuwa), MBA (Manchester), FCMA, CGMA, CFA',
    bio: 'Mr. Senaka Kakiriwaragodage is the Chief Executive Officer of NDB Capital Holdings Limited, the premier investment banking cluster of NDB Bank. He is also a director of several portfolio companies managed by Emerald Sri Lanka Fund 1. He possesses extensive expertise in investment banking activities including IPOs, debt & equity placements, mergers & acquisitions, and corporate restructurings.'
  },
  {
    id: 'gihan-cooray',
    name: 'Gihan R. Cooray',
    role: 'Chief Executive Officer',
    credentials: 'MBA, BBA (Finance), Certified Capital Markets Specialist',
    bio: 'Mr. Gihan R. Cooray spearheads executive leadership and strategic direction at NDB Securities (Private) Limited. Under his stewardship, NDBS has solidified its market standing as one of Sri Lanka’s most technology-driven and respected stockbroking institutions, serving sovereign funds, high-net-worth investors, and institutional asset managers.'
  }
];

export const ADVISORY_TEAM: AdvisorContact[] = [
  { name: 'Jayantha Samarasinghe', title: 'Senior Vice President - Advisory', email: 'Jayantha@ndbs.lk', phone: '+94 (11) 2 131 011', directExt: '011' },
  { name: 'Auburn Senn', title: 'Vice President - Advisory', email: 'auburn.senn@ndbs.lk', phone: '+94 (11) 2 131 021', directExt: '021' },
  { name: 'Aroos Faleel', title: 'Vice President - Advisory', email: 'aroosfaleel@ndbs.lk', phone: '+94 (11) 2 131 012', directExt: '012' },
  { name: 'Reshan Kurukulasuriya', title: 'Vice President - Advisory', email: 'reshan.kurukulasuriya@ndbs.lk', phone: '+94 (11) 2 131 014', directExt: '014' },
  { name: 'Shiromi De Silva', title: 'Assistant Vice President - Advisory', email: 'shiromi@ndbs.lk', phone: '+94 (11) 2 131 019', directExt: '019' },
  { name: 'Sanjaya Prabath', title: 'Assistant Vice President - Advisory', email: 'sanjaya@ndbs.lk', phone: '+94 (11) 2 131 024', directExt: '024' },
  { name: 'Shemal Camball', title: 'Senior Manager - Equity Advisory', email: 'shemal.camball@ndbs.lk', phone: '+94 (11) 2 131 036', directExt: '036' },
  { name: 'Raynal Wickremeratne', title: 'Head of Research', email: 'raynal.wickremeratne@ndbs.lk', phone: '+94 (11) 2 131 050', directExt: '050' }
];

export const SAMPLE_CSE_STOCKS: StockTicker[] = [
  { symbol: 'JKH.N0000', name: 'John Keells Holdings PLC', sector: 'Diversified Holdings', price: 198.50, change: 2.25, pctChange: 1.15, volume: '1,420,500', turnover: '281.9M' },
  { symbol: 'COMB.N0000', name: 'Commercial Bank of Ceylon PLC', sector: 'Banks, Finance & Insurance', price: 104.25, change: 1.50, pctChange: 1.46, volume: '890,200', turnover: '92.8M' },
  { symbol: 'SAMP.N0000', name: 'Sampath Bank PLC', sector: 'Banks, Finance & Insurance', price: 82.80, change: 1.80, pctChange: 2.22, volume: '2,140,000', turnover: '177.1M' },
  { symbol: 'HNB.N0000', name: 'Hatton National Bank PLC', sector: 'Banks, Finance & Insurance', price: 215.00, change: -1.25, pctChange: -0.58, volume: '345,100', turnover: '74.2M' },
  { symbol: 'LIOC.N0000', name: 'Lanka IOC PLC', sector: 'Power & Energy', price: 122.50, change: 3.50, pctChange: 2.94, volume: '980,400', turnover: '120.1M' },
  { symbol: 'MELS.N0000', name: 'Melstacorp PLC', sector: 'Beverage, Food & Tobacco', price: 92.40, change: 0.80, pctChange: 0.87, volume: '512,000', turnover: '47.3M' },
  { symbol: 'DIAL.N0000', name: 'Dialog Axiata PLC', sector: 'Telecommunications', price: 11.20, change: 0.10, pctChange: 0.90, volume: '4,500,000', turnover: '50.4M' },
  { symbol: 'ACL.N0000', name: 'ACL Cables PLC', sector: 'Manufacturing', price: 89.90, change: 1.70, pctChange: 1.93, volume: '380,200', turnover: '34.2M' },
  { symbol: 'HAYL.N0000', name: 'Hayleys PLC', sector: 'Diversified Holdings', price: 112.00, change: 1.50, pctChange: 1.36, volume: '620,000', turnover: '69.4M' },
  { symbol: 'NDB.N0000', name: 'National Development Bank PLC', sector: 'Banks, Finance & Insurance', price: 78.50, change: 1.20, pctChange: 1.55, volume: '740,000', turnover: '58.1M' },
  { symbol: 'DIST.N0000', name: 'Distilleries Company of Sri Lanka', sector: 'Beverage, Food & Tobacco', price: 29.80, change: -0.20, pctChange: -0.67, volume: '1,200,000', turnover: '35.7M' },
  { symbol: 'TKYO.N0000', name: 'Tokyo Cement Company PLC', sector: 'Manufacturing', price: 54.60, change: 0.90, pctChange: 1.68, volume: '890,000', turnover: '48.6M' }
];

export const CSE_SECTORS = [
  'All Sectors',
  'Banks, Finance & Insurance',
  'Beverage, Food & Tobacco',
  'Chemicals & Pharmaceuticals',
  'Construction & Engineering',
  'Diversified Holdings',
  'Footwear & Textile',
  'Healthcare',
  'Hotels & Travels',
  'Information Technology',
  'Investment Trusts',
  'Land & Property',
  'Manufacturing',
  'Motors',
  'Oil Palms',
  'Plantations',
  'Power & Energy',
  'Services',
  'Telecommunications',
  'Trading'
];

export const DOWNLOAD_DOCUMENTS: DownloadDoc[] = [
  {
    id: 'cds-1',
    filename: 'CDS_1.pdf',
    title: 'CDS 1 - Account Opening Application (Individuals)',
    category: 'CDS Accounts',
    size: '495 KB',
    path: '/downloads/CDS_1.pdf',
    description: 'Official Central Depository Systems (CDS) application form to open a securities trading account for resident and non-resident individuals.'
  },
  {
    id: 'cds-1-a1',
    filename: 'CDS_1_A1_KYC.pdf',
    title: 'CDS 1 (A-1) - Know Your Customer (KYC) Details',
    category: 'KYC Documents',
    size: '1,039 KB',
    path: '/downloads/CDS_1_A1_KYC.pdf',
    description: 'Mandatory KYC documentation required under SEC anti-money laundering regulations for personal investor accounts.'
  },
  {
    id: 'cds-1-a2',
    filename: 'CDS_1_A2_Declaration.pdf',
    title: 'CDS 1 (A-2) - Client Declaration Form',
    category: 'Agreements',
    size: '978 KB',
    path: '/downloads/CDS_1_A2_Declaration.pdf',
    description: 'Statutory declaration of beneficial ownership, source of funds, and compliance with CSE listing rules.'
  },
  {
    id: 'cds-2',
    filename: 'CDS_2_Account_Opening.pdf',
    title: 'CDS 2 - Corporate Account Opening Application',
    category: 'CDS Accounts',
    size: '192 KB',
    path: '/downloads/CDS_2_Account_Opening.pdf',
    description: 'Application form for private and public companies, mutual funds, and trusts establishing a CDS account.'
  },
  {
    id: 'cds-2a',
    filename: 'CDS_2A_Non_Resident.pdf',
    title: 'CDS 2 (A) - Non-Resident Foreign Accounts Form',
    category: 'CDS Accounts',
    size: '401 KB',
    path: '/downloads/CDS_2A_Non_Resident.pdf',
    description: 'Special application schedule for global institutional investors and non-resident foreign corporates.'
  },
  {
    id: 'ind-kyc',
    filename: 'Individual_KYC_2022.pdf',
    title: 'NDBS Individual Investor KYC Form',
    category: 'KYC Documents',
    size: '791 KB',
    path: '/downloads/Individual_KYC_2022.pdf',
    description: 'Comprehensive NDB Securities investor profile form covering risk appetite, source of wealth, and investment experience.'
  },
  {
    id: 'stockbroker-agmt',
    filename: 'Stockbroker_Agreement_Individual.pdf',
    title: 'Client Brokerage Agreement (Individual)',
    category: 'Agreements',
    size: '99 KB',
    path: '/downloads/Stockbroker_Agreement_Individual.pdf',
    description: 'Formal terms of engagement between the client and NDB Securities regarding order execution and custody.'
  },
  {
    id: 'itsa',
    filename: 'Internet_Trading_Agreement_NDBS.pdf',
    title: 'Internet Trading Agreement (ITSA)',
    category: 'Agreements',
    size: '594 KB',
    path: '/downloads/Internet_Trading_Agreement_NDBS.pdf',
    description: 'Agreement for direct access to NDB Securities online trading platforms (Atrad web & mobile trading suite).'
  },
  {
    id: 'fatca',
    filename: 'FATCA_Declaration.pdf',
    title: 'FATCA & CRS Compliance Declaration',
    category: 'Regulatory Policies',
    size: '58 KB',
    path: '/downloads/FATCA_Declaration.pdf',
    description: 'Foreign Account Tax Compliance Act disclosure form for international taxation reporting.'
  },
  {
    id: 'aml-policy',
    filename: 'AML_Policy.pdf',
    title: 'NDBS Anti-Money Laundering & Counter-Terrorism Policy',
    category: 'Regulatory Policies',
    size: '434 KB',
    path: '/downloads/AML_Policy.pdf',
    description: 'Official institutional compliance framework upholding Financial Intelligence Unit (FIU) Central Bank directives.'
  }
];

export const CORE_SERVICES: ServiceOffering[] = [
  {
    id: 'equity',
    title: 'Equity Brokerage',
    tagline: 'Precision Execution on the Colombo Stock Exchange',
    description: 'Full-service trading execution for institutional funds, foreign portfolios, and private clients with dedicated market specialists and cutting-edge Atrad DMA platforms.',
    iconName: 'TrendingUp',
    highlights: ['Direct Market Access (DMA) on CSE', 'Dedicated Investment Advisors', 'Algorithmic & Block Trade Execution', 'Real-time Portfolio Valuation'],
    ctaText: 'Explore Equities'
  },
  {
    id: 'debt',
    title: 'Fixed Income & Corporate Debt',
    tagline: 'Secure, Predictable Yields in Sri Lankan Debt Markets',
    description: 'Access primary issuances and liquid secondary trading of listed corporate debentures, government treasury bills, and repurchase agreements.',
    iconName: 'ShieldCheck',
    highlights: ['Listed Corporate Debentures', 'Government Treasury Bonds & Bills', 'Competitive Yield Benchmarking', 'Institutional Settlement'],
    ctaText: 'Discover Debt Options'
  },
  {
    id: 'mutual-funds',
    title: 'NDB Wealth Mutual Funds',
    tagline: 'Professional Wealth Management with Zero Compromise',
    description: 'Distribute a premier spectrum of Unit Trust funds managed by NDB Wealth Management, from money market liquidity pools to high-growth equity funds.',
    iconName: 'PieChart',
    highlights: ['NDB Wealth Money Plus Fund', 'NDB Growth Equity Fund', 'Daily Liquidity & Dividends', 'Tax-Advantaged Returns'],
    ctaText: 'View Mutual Funds'
  },
  {
    id: 'group-banking',
    title: 'NDB Capital Group Solutions',
    tagline: 'Comprehensive Investment Banking Synergy',
    description: 'Leverage the end-to-end power of NDB Bank and NDB Capital Holdings for IPO underwriting, debt structuring, mergers & acquisitions, and private equity.',
    iconName: 'Building2',
    highlights: ['IPO Lead Underwriting', 'Corporate Finance & Valuation', 'Syndicated Loan Advisory', 'Private Equity Capital'],
    ctaText: 'Explore Group Solutions'
  },
  {
    id: 'custodian',
    title: 'Global Custodian Services',
    tagline: 'Frictionless International Inward Investment Accounts (IIA)',
    description: 'Seamless cross-border custodial clearance with tier-1 international banks including HSBC, Standard Chartered, Citibank, and Deutsche Bank.',
    iconName: 'Globe',
    highlights: ['Foreign IIA Bank Routing', '100% Capital Repatriation', 'Automated Dividend Credits', 'Custody Clearing Protocol'],
    ctaText: 'International Investor Guide'
  },
  {
    id: 'statements',
    title: 'Consolidated e-Statements',
    tagline: 'Unified Transparency Across Your NDB Portfolios',
    description: 'One cohesive digital statement combining your equity holdings at NDBS alongside bank accounts and wealth portfolios at NDB Bank.',
    iconName: 'FileText',
    highlights: ['Single Unified Wealth Overview', 'Instant Daily/Monthly SMS Alerts', 'Audited Tax Certification', 'Paperless Security'],
    ctaText: 'Learn More'
  }
];

export const FAQS = [
  {
    q: 'How do I open a Central Depository Systems (CDS) account in Sri Lanka?',
    a: 'Opening an account with NDB Securities is now fully streamlined. You can start our digital e-KYC wizard online with your National Identity Card (NIC) or Passport, upload your bank verification, and our team will have your CDS account live on the Colombo Stock Exchange within 24 to 48 hours.'
  },
  {
    q: 'Can foreign citizens and Sri Lankan expats invest through NDB Securities?',
    a: 'Yes. Foreign individuals and non-resident Sri Lankans can trade on the CSE via an Inward Investment Account (IIA) opened with any licensed commercial bank in Sri Lanka or through an international custodian bank (HSBC, StanChart, Citi). Capital gains from CSE share trading are fully exempt from local capital gains taxes, and funds can be repatriated freely in foreign currency.'
  },
  {
    q: 'What trading platforms does NDB Securities offer?',
    a: 'We offer the market-leading Atrad platform accessible via Web browser, macOS, Windows, and dedicated iOS / Android mobile applications. Clients receive live market depth, real-time portfolio tracking, chart analysis, and direct order placement.'
  },
  {
    q: 'What are the charges for trading on the Colombo Stock Exchange?',
    a: 'Trading commissions on the CSE are statutory and tiered: 1.12% for transactions up to LKR 100 Million (comprising broker fees, CSE, SEC, and CDS cesses), and a negotiable lower rate for transactions above LKR 100 Million.'
  },
  {
    q: 'How does NDB Securities research stand out?',
    a: 'NDB Securities Research is consistently recognized among Sri Lanka’s best, delivering in-depth equity valuations, macro-economic briefings, sector outlooks, and daily market updates across all 20 CSE sectors.'
  }
];
