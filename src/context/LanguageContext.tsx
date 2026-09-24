'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'si' | 'ta';

export const translations = {
  en: {
    // Topbar
    aboutUs: 'About Us',
    newsNotices: 'News & Notices',
    researchReports: 'Research Reports',
    peopleCulture: 'People & Culture',
    sustainability: 'Sustainability',
    investorRelations: 'Investor Relations',
    contactUs: 'Contact Us',
    hotline: '+94 11 2 131 000',

    // Nav
    personalEquities: 'Personal Equities',
    institutionalForeign: 'Institutional & Foreign',
    debtFixedIncome: 'Debt & Fixed Income',
    researchMedia: 'Research & Media',
    digitalCdsAccount: 'Digital CDS Account',
    atradDmaPortal: 'Atrad DMA Portal',
    searchPlaceholder: 'Search shares, debentures, research...',

    // Hero
    heroPioneer: 'National Development Bank Group • Capital Markets Pioneer',
    heroSlide1Title: 'The Future is Banking on Us',
    heroSlide1Subtitle: 'Innovating today to empower investors across the Colombo Stock Exchange with institutional precision, award-winning research, and direct market access.',
    heroSlide2Tag: 'Direct Market Access • High Speed Execution',
    heroSlide2Title: 'Atrad DMA Trading & Real-Time Intelligence',
    heroSlide2Subtitle: 'Experience low-latency order routing, deep market book inspection, and live portfolio tracking tailored for retail and institutional traders alike.',
    heroSlide3Tag: 'Paperless Digital e-KYC • In Under 5 Minutes',
    heroSlide3Title: '100% Digital CDS Account Opening',
    heroSlide3Subtitle: 'Start your wealth generation journey today. Open your Central Depository System account entirely online with your Sri Lankan National Identity Card or Foreign Passport.',
    openDigitalAccount: 'Open Digital CDS Account',
    exploreMarkets: 'Explore Live Markets',
    launchAtrad: 'Launch Atrad Portal',
    viewResearch: 'View Research Reports',
    downloadGuides: 'Download Account Guides',

    // Quick Bar (8 buttons)
    quickCds: 'Digital CDS Account',
    quickAtrad: 'Atrad DMA Portal',
    quickCse: 'CSE Live Feed',
    quickResearch: 'Research Desk',
    quickDebt: 'Corporate Debt',
    quickMargin: 'Margin Trading',
    quickForms: 'Forms Vault',
    quickBranches: 'Branch Locator',

    // Ticker
    cseLive: 'CSE LIVE',
    aspi: 'ASPI',
    allShare: 'All Share Price Index',
    sp20: 'S&P SL20',
    top20: 'Top 20 Blue Chip Equities',
    turnover: 'Turnover',
    topGainers: 'Top Daily Gainers',
    benchmarkIndices: 'Benchmark Indices',

    // Sec 2: Invest
    investAdvantage: 'NDB Securities Advantage',
    investTitle: 'Invest with',
    investSubtitle: 'NDB Securities',
    investDesc: 'Backed by the financial strength and heritage of National Development Bank PLC, we provide direct market access, institutional execution, and award-winning research for individual and global institutional investors.',
    exploreServices: 'Explore All Services',
    retailClientTag: 'Retail & Private Clients',
    retailClientTitle: 'Direct Equity Execution & DMA',
    retailClientDesc: 'Trade shares in real-time with direct integration to the Colombo Stock Exchange matching engine via our omnichannel Atrad web and mobile platforms.',
    institutionalTag: 'Institutional & Global',
    institutionalTitle: 'Institutional Block Trading & IIA',
    institutionalDesc: 'Bespoke execution for mutual funds, foreign portfolio managers, and family offices with full Inward Investment Account (IIA) custodian bank settlement.',
    fixedIncomeTag: 'Fixed Income',
    fixedIncomeTitle: 'Listed Debentures & Corporate Debt',
    fixedIncomeDesc: 'High-yield fixed-income corporate debentures, senior/subordinated notes, and primary syndication to optimize risk-adjusted returns.',
    learnMore: 'Learn More',
    openAccount: 'Open Account',
    details: 'Details',

    // Promo
    promoBadge: '100% Digital e-KYC • SEC Licensed Member',
    promoTitle: 'Begin Investing in Sri Lankan Equities Today',
    promoDesc: 'Open your Central Depository Systems (CDS) account in under 5 minutes with your Sri Lankan NIC or Passport. Enjoy zero account maintenance fees, real-time Atrad trading access, and personal advisory.',
    speakAdvisor: 'Speak to an Advisor',
    statYears: 'Years Capital Market Leadership',
    statRating: 'National Long-Term Rating',
    statVolume: 'Annual Traded Equity Volume',
    statDigital: 'Paperless Digital e-KYC',

    // Sec 3: Ecosystem
    ecosystemGroup: 'NDB Capital Holdings Group',
    ecosystemTitle: 'Our Diversified',
    ecosystemSubtitle: 'Financial Ecosystem',
    ecosystemDesc: 'NDB Securities operates as an integral arm of NDB Capital Holdings, collaborating across commercial banking, investment banking, and private wealth management to provide institutional and retail clients with full-spectrum capital solutions.',
    aboutNdbGroup: 'About NDB Group',

    // Research
    researchBadge: 'NDBS Research Lab',
    researchHeading: 'Featured Macro & Sector Intelligence',
    researchDesc: 'Actionable equity valuation models and macroeconomic strategy notes produced by our award-winning research desk.',
    readSummary: 'Read Executive Summary',

    // Floating Menu
    tradeOnline: 'Atrad Online DMA',
    openDigitalCds: 'Open Digital CDS',
    tariffSchedule: 'Tariff Schedule',
    branchLocator: 'Branch Locator',
    hotlineSupport: 'Hotline Support',
    listenOverview: 'Listen to Page Overview',
    stopAudio: 'Stop Audio',

    // NDBS Core Sections from ndbs.lk
    localInvestor: 'Local Investor',
    foreignInvestor: 'Foreign Investor',
    investInSriLanka: 'Invest in Sri Lanka',
    heritage: 'Heritage',
    growthStory: 'Growth Story',
    opportunity: 'The Opportunity',
    whoWeAre: 'Who We Are',
    theFirm: 'The Firm',
    theGroup: 'The Group',
    theConglomerate: 'The Conglomerate',
    leadership: 'Leadership',
    boardOfDirectors: 'Board of Directors',
    leadershipTeam: 'Leadership Team',
    investWithUs: 'Invest With Us',
    whatWeOffer: 'What We Offer',
    equity: 'Equity',
    debt: 'Debt',
    mutualFunds: 'Mutual Funds',
    groupProducts: 'Group Products',
    productsOfNdbs: 'Products of NDBS',
    researchLibrary: 'Research Library',
    researchPhilosophy: 'Research Philosophy',
    educationalMaterial: 'Educational Material',
    dailyMarketUpdate: 'Daily Market Update',
    stockTracker: 'Stock Tracker',
    careers: 'Careers',
    mediaRoom: 'Media Room',
    officialStatement: 'Official Statement',
    marketVideos: 'Market Commentary Videos',
    educationalVideos: 'Investor Education Videos',
    usefulLinks: 'Useful Links',
    upcomingListings: 'Upcoming Listings',
    investmentResources: 'Investment Resources',
    amlPolicy: 'Anti-Money Laundering (AML) Policy',
    secCautionaryNotice: 'Cautionary Notice by SEC',

    // Footer
    information: 'Information',
    quickLinks: 'Quick Links',
    governance: 'Governance & Other',
    copyright: '© 2025 - 2026 National Development Bank PLC & NDB Securities (Pvt) Limited. All Rights Reserved.',
    followUs: 'Follow us'
  },
  si: {
    // Topbar
    aboutUs: 'අප ගැන',
    newsNotices: 'පුවත් සහ නිවේදන',
    researchReports: 'පර්යේෂණ වාර්තා',
    peopleCulture: 'අපගේ කාර්ය මණ්ඩලය',
    sustainability: 'තිරසාර සංවර්ධනය',
    investorRelations: 'ආයෝජක සබඳතා',
    contactUs: 'සම්බන්ධ වන්න',
    hotline: '+94 11 2 131 000',

    // Nav
    personalEquities: 'පෞද්ගලික කොටස් වෙළඳාම',
    institutionalForeign: 'ආයතනික සහ විදේශීය ආයෝජන',
    debtFixedIncome: 'ණය සහ ස්ථාවර ආදායම්',
    researchMedia: 'පර්යේෂණ සහ මාධ්‍ය',
    digitalCdsAccount: 'ඩිජිටල් CDS ගිණුම',
    atradDmaPortal: 'Atrad මාර්ගගත පිවිසුම',
    searchPlaceholder: 'කොටස්, ණයකර, පර්යේෂණ සොයන්න...',

    // Hero
    heroPioneer: 'ජාතික සංවර්ධන බැංකු සමූහය • ප්‍රාග්ධන වෙළෙඳපොළ පුරෝගාමී',
    heroSlide1Title: 'අනාගතය අප කෙරෙහි විශ්වාසය තබයි',
    heroSlide1Subtitle: 'කොළඹ කොටස් වෙළෙඳපොළේ ආයෝජකයින් සවිබල ගන්වන ප්‍රමුඛතම කොටස් තැරැව්කාර සේවාව, සම්මානලාභී පර්යේෂණ සහ සෘජු වෙළෙඳපොළ ප්‍රවේශය.',
    heroSlide2Tag: 'සෘජු වෙළෙඳපොළ ප්‍රවේශය • අධිවේගී ගනුදෙනු',
    heroSlide2Title: 'Atrad DMA සහ සජීවී බුද්ධි තොරතුරු',
    heroSlide2Subtitle: 'තත්පරයෙන් පංගුවක අධිවේගී ඇණවුම් ක්‍රියාත්මක කිරීම සහ තත්‍ය කාලීන කළඹ නිරීක්ෂණය.',
    heroSlide3Tag: 'කඩදාසි රහිත ඩිජිටල් e-KYC • විනාඩි 5 කින්',
    heroSlide3Title: '100% ඩිජිටල් CDS ගිණුම් විවෘත කිරීම',
    heroSlide3Subtitle: 'ඔබේ ජාතික හැඳුනුම්පත හෝ විදේශ ගමන් බලපත්‍රය භාවිතයෙන් අදම සම්පූර්ණයෙන්ම මාර්ගගතව CDS ගිණුමක් විවෘත කරන්න.',
    openDigitalAccount: 'ඩිජිටල් CDS ගිණුමක් අරඹන්න',
    exploreMarkets: 'සජීවී වෙළඳපොළ පිරික්සන්න',
    launchAtrad: 'Atrad පද්ධතියට පිවිසෙන්න',
    viewResearch: 'පර්යේෂණ වාර්තා බලන්න',
    downloadGuides: 'ආයෝජන මාර්ගෝපදේශ බාගත කරන්න',

    // Quick Bar
    quickCds: 'ඩිජිටල් CDS ගිණුම',
    quickAtrad: 'Atrad වෙළඳ පිවිසුම',
    quickCse: 'සජීවී කොටස් පුවරුව',
    quickResearch: 'පර්යේෂණ අංශය',
    quickDebt: 'ආයතනික ණයකර',
    quickMargin: 'ආන්තික වෙළඳාම',
    quickForms: 'ආකෘති පත්‍ර',
    quickBranches: 'ශාඛා ජාලය',

    // Ticker
    cseLive: 'කොළඹ කොටස් සජීවී',
    aspi: 'සියලු කොටස් මිල දර්ශකය (ASPI)',
    allShare: 'සියලු කොටස් මිල දර්ශකය',
    sp20: 'S&P ශ්‍රී ලංකා 20',
    top20: 'ප්‍රමුඛතම සමාගම් 20',
    turnover: 'දෛනික පිරිවැටුම',
    topGainers: 'දෛනික ඉහළම වාසි ලැබූවන්',
    benchmarkIndices: 'ප්‍රධාන දර්ශක',

    // Sec 2: Invest
    investAdvantage: 'NDB සෙකියුරිටීස් සුවිශේෂීත්වය',
    investTitle: 'ආයෝජනය කරන්න',
    investSubtitle: 'NDB සෙකියුරිටීස් සමඟ',
    investDesc: 'ශ්‍රී ලංකාවේ ප්‍රමුඛතම වාණිජ බැංකුවක් වන ජාතික සංවර්ධන බැංකුවේ (NDB Bank PLC) මූල්‍ය ශක්තිය හා විශ්වසනීයත්වය සමගින් විශිෂ්ටතම කොටස් තැරැව්කාර සේවාව ලබා ගන්න.',
    exploreServices: 'සියලු සේවාවන් බලන්න',
    retailClientTag: 'පුද්ගලික ආයෝජකයින්',
    retailClientTitle: 'සෘජු කොටස් වෙළඳාම සහ DMA',
    retailClientDesc: 'කොළඹ කොටස් වෙළෙඳපොළ ගනුදෙනු පද්ධතිය සමඟ සෘජුව සම්බන්ධ වී Atrad වෙබ් හා ජංගම දුරකථන යෙදුම් මඟින් තත්‍ය කාලීනව කොටස් මිලදී ගැනීම හා විකිණීම.',
    institutionalTag: 'ආයතනික සහ ගෝලීය',
    institutionalTitle: 'ආයතනික ගනුදෙනු සහ IIA විදේශ ගිණුම්',
    institutionalDesc: 'විදේශීය ආයෝජන අරමුදල් සහ විශාල පරිමාණ ආයෝජකයින් සඳහා HSBC, Standard Chartered සහ Citi භාරකාර බැංකු පහසුකම් සහිත පූර්ණ සේවාව.',
    fixedIncomeTag: 'ස්ථාවර ආදායම්',
    fixedIncomeTitle: 'ලැයිස්තුගත ණයකර සහ ආයතනික ණය',
    fixedIncomeDesc: 'ඉහළ ප්‍රතිලාභ සහිත ලැයිස්තුගත ආයතනික ණයකර, ජ්‍යෙෂ්ඨ/යටත් ණයකර සහ මූලික නිකුතු සඳහා පහසුකම්.',
    learnMore: 'වැඩිදුර විස්තර',
    openAccount: 'ගිණුමක් අරඹන්න',
    details: 'විස්තර',

    // Promo
    promoBadge: '100% ඩිජිටල් e-KYC • SEC නියාමනය ලත් සාමාජික',
    promoTitle: 'කොළඹ කොටස් වෙළෙඳපොළේ ආයෝජනය අදම අරඹන්න',
    promoDesc: 'ඔබේ ජාතික හැඳුනුම්පත හෝ විදේශ ගමන් බලපත්‍රය භාවිතයෙන් විනාඩි 5 කින් මාර්ගගතව CDS ගිණුම විවෘත කරන්න. නඩත්තු ගාස්තු රහිතයි, පෞද්ගලික උපදේශක සහාය.',
    speakAdvisor: 'උපදේශකයෙකු අමතන්න',
    statYears: 'වසරක ප්‍රාග්ධන වෙළෙඳපොළ නායකත්වය',
    statRating: 'ජාතික දිගුකාලීන ශ්‍රේණිගත කිරීම',
    statVolume: 'වාර්ෂික ගනුදෙනු පිරිවැටුම',
    statDigital: 'කඩදාසි රහිත ඩිජිටල් ලියාපදිංචිය',

    // Sec 3: Ecosystem
    ecosystemGroup: 'NDB කැපිටල් හෝල්ඩින්ග්ස් සමූහය',
    ecosystemTitle: 'අපගේ විවිධාංගීකෘත',
    ecosystemSubtitle: 'මූල්‍ය පද්ධතිය',
    ecosystemDesc: 'වාණිජ බැංකුකරණය, ආයෝජන බැංකුකරණය සහ වත්කම් කළමනාකරණය ඒකාබද්ධ කරමින් NDB සමූහය ශ්‍රී ලාංකික හා ගෝලීය ආයෝජකයින්ට උපරිම මූල්‍ය විසඳුම් සපයයි.',
    aboutNdbGroup: 'NDB සමූහය ගැන',

    // Research
    researchBadge: 'NDBS පර්යේෂණාගාරය',
    researchHeading: 'විශේෂිත සාර්ව ආර්ථික හා ක්ෂේත්‍ර බුද්ධි තොරතුරු',
    researchDesc: 'අපගේ සම්මානලාභී පර්යේෂණ කණ්ඩායම විසින් සකස් කරන ලද කොටස් තක්සේරු ආකෘති සහ වෙළෙඳපොළ විශ්ලේෂණ.',
    readSummary: 'සාරාංශය කියවන්න',

    // Floating Menu
    tradeOnline: 'Atrad මාර්ගගත වෙළඳාම',
    openDigitalCds: 'ඩිජිටල් CDS අරඹන්න',
    tariffSchedule: 'ගාස්තු ලේඛනය',
    branchLocator: 'ශාඛා ජාලය',
    hotlineSupport: 'ක්ෂණික ඇමතුම්',
    listenOverview: 'පිටුවේ තොරතුරු වලට සවන් දෙන්න',
    stopAudio: 'හඬ නවත්වන්න',

    // NDBS Core Sections from ndbs.lk
    localInvestor: 'දේශීය ආයෝජක',
    foreignInvestor: 'විදේශීය ආයෝජක',
    investInSriLanka: 'ශ්‍රී ලංකාවේ ආයෝජනය කරන්න',
    heritage: 'අභිමානවත් උරුමය',
    growthStory: 'වර්ධන කතාව',
    opportunity: 'ආයෝජන අවස්ථාව',
    whoWeAre: 'අප කවුරුන්ද',
    theFirm: 'සමාගම ගැන (NDBS)',
    theGroup: 'NDB කැපිටල් සමූහය',
    theConglomerate: 'සමස්ත NDB පද්ධතිය',
    leadership: 'නායකත්වය',
    boardOfDirectors: 'අධ්‍යක්ෂ මණ්ඩලය',
    leadershipTeam: 'නායකත්ව කණ්ඩායම',
    investWithUs: 'අප සමඟ ආයෝජනය කරන්න',
    whatWeOffer: 'අපගේ සේවාවන්',
    equity: 'කොටස් වෙළෙඳාම',
    debt: 'ආයතනික ණයකර',
    mutualFunds: 'ඒකක භාර / අන්‍යෝන්‍ය අරමුදල්',
    groupProducts: 'සමූහ නිෂ්පාදන (NDBIB)',
    productsOfNdbs: 'NDBS සුවිශේෂී සේවා',
    researchLibrary: 'පර්යේෂණ පුස්තකාලය',
    researchPhilosophy: 'පර්යේෂණ දර්ශනය',
    educationalMaterial: 'ආයෝජන අධ්‍යාපනික තොරතුරු',
    dailyMarketUpdate: 'දෛනික වෙළෙඳපොළ සමාලෝචනය',
    stockTracker: 'කොටස් නිරීක්ෂකය',
    careers: 'වෘත්තීය අවස්ථා',
    mediaRoom: 'මාධ්‍ය අංශය',
    officialStatement: 'නිල නිවේදන',
    marketVideos: 'වෙළෙඳපොළ වීඩියෝ විවරණ',
    educationalVideos: 'ආයෝජන අධ්‍යාපනික වීඩියෝ',
    usefulLinks: 'ප්‍රයෝජනවත් සබැඳි',
    upcomingListings: 'ඉදිරි ලැයිස්තුගත කිරීම් හා IPO',
    investmentResources: 'ආයෝජන සම්පත්',
    amlPolicy: 'මුදල් විශුද්ධිකරණය වැළැක්වීමේ ප්‍රතිපත්තිය (AML)',
    secCautionaryNotice: 'SEC අනතුරු ඇඟවීමේ නිවේදනය',

    // Footer
    information: 'තොරතුරු',
    quickLinks: 'ක්ෂණික සබැඳි',
    governance: 'පාලනය සහ ආරක්ෂාව',
    copyright: '© 2025 - 2026 ජාතික සංවර්ධන බැංකුව සහ NDB සෙකියුරිටීස් (පුද්) සමාගම. සියලු හිමිකම් ඇවිරිණි.',
    followUs: 'අප හා එක්වන්න'
  },
  ta: {
    // Topbar
    aboutUs: 'எங்களை பற்றி',
    newsNotices: 'செய்திகள் மற்றும் அறிவிப்புகள்',
    researchReports: 'ஆய்வு அறிக்கைகள்',
    peopleCulture: 'மனித வளம் மற்றும் கலாச்சாரம்',
    sustainability: 'நிலையான அபிவிருத்தி',
    investorRelations: 'முதலீட்டாளர் தொடர்புகள்',
    contactUs: 'தொடர்பு கொள்ள',
    hotline: '+94 11 2 131 000',

    // Nav
    personalEquities: 'தனிநபர் பங்கு வர்த்தகம்',
    institutionalForeign: 'நிறுவன மற்றும் வெளிநாட்டு முதலீடுகள்',
    debtFixedIncome: 'கடன் மற்றும் நிலையான வருமானம்',
    researchMedia: 'ஆய்வு மற்றும் ஊடகம்',
    digitalCdsAccount: 'டிஜிட்டல் CDS கணக்கு',
    atradDmaPortal: 'Atrad ஆன்லைன் வர்த்தகம்',
    searchPlaceholder: 'பங்குகள், கடனீட்டுப் பத்திரங்கள் தேடவும்...',

    // Hero
    heroPioneer: 'NDB வங்கி குழுமம் • மூலதனச் சந்தை முன்னோடி',
    heroSlide1Title: 'எதிர்காலம் நம்மை நம்பியுள்ளது',
    heroSlide1Subtitle: 'கொழும்பு பங்குச் சந்தையின் முதலீட்டாளர்களுக்கு முன்னணி பங்குத் தரகு சேவை, விருது பெற்ற ஆய்வு மற்றும் நேரடி சந்தை அணுகல்.',
    heroSlide2Tag: 'நேரடி சந்தை அணுகல் • அதிவேக செயலாக்கம்',
    heroSlide2Title: 'Atrad DMA மற்றும் நேரலை சந்தை நுண்ணறிவு',
    heroSlide2Subtitle: 'குறைந்த தாமதத்துடன் கூடிய பங்கு வர்த்தகம் மற்றும் நிகழ்நேர போர்ட்ஃபோலியோ கண்காணிப்பு.',
    heroSlide3Tag: 'காகிதமற்ற டிஜிட்டல் e-KYC • 5 நிமிடங்களில்',
    heroSlide3Title: '100% டிஜிட்டல் CDS கணக்கு திறப்பு',
    heroSlide3Subtitle: 'உங்கள் தேசிய அடையாள அட்டை அல்லது வெளிநாட்டு கடவுச்சீட்டைப் பயன்படுத்தி இன்றே ஆன்லைனில் CDS கணக்கைத் தொடங்குங்கள்.',
    openDigitalAccount: 'டிஜிட்டல் CDS கணக்கு தொடங்குங்கள்',
    exploreMarkets: 'நேரலை சந்தையை பார்க்க',
    launchAtrad: 'Atrad தளத்திற்கு செல்லவும்',
    viewResearch: 'ஆய்வு அறிக்கைகளை பார்க்க',
    downloadGuides: 'வழிகாட்டிகளை பதிவிறக்கவும்',

    // Quick Bar
    quickCds: 'டிஜிட்டல் CDS கணக்கு',
    quickAtrad: 'Atrad வர்த்தகம்',
    quickCse: 'நேரலை சந்தை நிலவரம்',
    quickResearch: 'ஆய்வுப் பிரிவு',
    quickDebt: 'நிறுவன கடன் பத்திரங்கள்',
    quickMargin: 'மார்ஜின் வர்த்தகம்',
    quickForms: 'படிவங்கள் களஞ்சியம்',
    quickBranches: 'கிளைகள் வலையமைப்பு',

    // Ticker
    cseLive: 'கொழும்பு பங்குச் சந்தை நேரலை',
    aspi: 'அனைத்துப் பங்கு விலைச் சுட்டெண் (ASPI)',
    allShare: 'அனைத்துப் பங்கு விலைச் சுட்டெண்',
    sp20: 'S&P இலங்கை 20',
    top20: 'முன்னணி 20 நிறுவனங்கள்',
    turnover: 'பரிவர்த்தனை புரள்வு',
    topGainers: 'அதிக இலாபம் ஈட்டிய பங்குகள்',
    benchmarkIndices: 'முக்கிய சுட்டெண்கள்',

    // Sec 2: Invest
    investAdvantage: 'NDB செக்யூரிட்டீஸ் சிறப்பு',
    investTitle: 'முதலீடு செய்யுங்கள்',
    investSubtitle: 'NDB செக்யூரிட்டீஸ் உடன்',
    investDesc: 'இலங்கையின் முன்னணி வணிக வங்கியான தேசிய அபிவிருத்தி வங்கியின் (NDB Bank PLC) நிதி பலத்துடன் கூடிய பங்குத் தரகு சேவைகள்.',
    exploreServices: 'அனைத்து சேவைகளையும் பார்க்க',
    retailClientTag: 'தனிநபர் முதலீட்டாளர்கள்',
    retailClientTitle: 'நேரடி பங்கு வர்த்தகம் மற்றும் DMA',
    retailClientDesc: 'Atrad இணைய மற்றும் மொபைல் செயலிகள் மூலம் கொழும்பு பங்குச் சந்தையில் நிகழ்நேர பங்கு வர்த்தக செயலாக்கம்.',
    institutionalTag: 'நிறுவன மற்றும் சர்வதேச',
    institutionalTitle: 'நிறுவன மொத்த வர்த்தகம் மற்றும் IIA',
    institutionalDesc: 'HSBC, Standard Chartered மற்றும் Citi வங்கிகளின் பாதுகாப்பான கஸ்டோடியன் வசதியுடன் வெளிநாட்டு முதலீட்டு சேவைகள்.',
    fixedIncomeTag: 'நிலையான வருமானம்',
    fixedIncomeTitle: 'பட்டியலிடப்பட்ட கடனீட்டுப் பத்திரங்கள்',
    fixedIncomeDesc: 'அதிக வருவாய் ஈட்டும் நிறுவன கடனீட்டுப் பத்திரங்கள் மற்றும் மூலதன வெளியீட்டு சேவைகள்.',
    learnMore: 'மேலும் அறிய',
    openAccount: 'கணக்கு தொடங்க',
    details: 'விபரம்',

    // Promo
    promoBadge: '100% டிஜிட்டல் e-KYC • SEC உரிமம் பெற்ற உறுப்பினர்',
    promoTitle: 'இலங்கை பங்குச் சந்தையில் இன்றே முதலீடு செய்யுங்கள்',
    promoDesc: 'உங்கள் தேசிய அடையாள அட்டை அல்லது கடவுச்சீட்டைப் பயன்படுத்தி 5 நிமிடங்களில் CDS கணக்கைத் திறக்கவும். கணக்கு பராமரிப்புக் கட்டணம் இல்லை.',
    speakAdvisor: 'ஆலோசகருடன் பேசுங்கள்',
    statYears: 'வருட மூலதனச் சந்தை தலைமைத்துவம்',
    statRating: 'தேசிய நீண்டகால மதிப்பீடு',
    statVolume: 'வருடாந்த பங்கு வர்த்தக அளவு',
    statDigital: 'காகிதமற்ற டிஜிட்டல் பதிவு',

    // Sec 3: Ecosystem
    ecosystemGroup: 'NDB கேபிடல் ஹோல்டிங்ஸ் குழுமம்',
    ecosystemTitle: 'எமது பல்வகைப்பட்ட',
    ecosystemSubtitle: 'நிதி கட்டமைப்பு',
    ecosystemDesc: 'வணிக வங்கி, முதலீட்டு வங்கி மற்றும் சொத்து முகாமைத்துவம் ஆகியவற்றை ஒருங்கிணைத்து NDB குழுமம் முதலீட்டாளர்களுக்கு சிறந்த நிதி தீர்வுகளை வழங்குகிறது.',
    aboutNdbGroup: 'NDB குழுமம் பற்றி',

    // Research
    researchBadge: 'NDBS ஆய்வு மையம்',
    researchHeading: 'சிறப்பு பொருளாதார மற்றும் துறை நுண்ணறிவு',
    researchDesc: 'எமது விருது பெற்ற ஆய்வுக் குழுவால் வெளியிடப்படும் துல்லியமான பங்கு மதிப்பீடுகள் மற்றும் சந்தை உத்திகள்.',
    readSummary: 'சுருக்கத்தை படிக்க',

    // Floating Menu
    tradeOnline: 'Atrad ஆன்லைன் வர்த்தகம்',
    openDigitalCds: 'டிஜிட்டல் CDS தொடங்க',
    tariffSchedule: 'கட்டண விபரம்',
    branchLocator: 'கிளைகள் வலையமைப்பு',
    hotlineSupport: 'உடனடி உதவி',
    listenOverview: 'பக்க விவரங்களை கேட்க',
    stopAudio: 'ஆடியோவை நிறுத்தவும்',

    // NDBS Core Sections from ndbs.lk
    localInvestor: 'உள்ளூர் முதலீட்டாளர்',
    foreignInvestor: 'வெளிநாட்டு முதலீட்டாளர்',
    investInSriLanka: 'இலங்கையில் முதலீடு செய்யுங்கள்',
    heritage: 'பாரம்பரியம்',
    growthStory: 'வளர்ச்சிப் பாதை',
    opportunity: 'முதலீட்டு வாய்ப்புகள்',
    whoWeAre: 'நாங்கள் யார்',
    theFirm: 'எமது நிறுவனம் (NDBS)',
    theGroup: 'NDB குழுமம்',
    theConglomerate: 'பெருநிறுவன அமைப்பு',
    leadership: 'தலைமைத்துவம்',
    boardOfDirectors: 'பணிப்பாளர் சபை',
    leadershipTeam: 'தலைமைக் குழு',
    investWithUs: 'எங்களுடன் முதலீடு செய்யுங்கள்',
    whatWeOffer: 'எமது சேவைகள்',
    equity: 'பங்குகள்',
    debt: 'கடன்பத்திரங்கள்',
    mutualFunds: 'பரஸ்பர நிதிகள்',
    groupProducts: 'குழும தயாரிப்புகள்',
    productsOfNdbs: 'NDBS தயாரிப்புகள்',
    researchLibrary: 'ஆய்வு நூலகம்',
    researchPhilosophy: 'ஆய்வுக் கொள்கை',
    educationalMaterial: 'முதலீட்டாளர் கல்வி',
    dailyMarketUpdate: 'தினசரி சந்தை நிலவரம்',
    stockTracker: 'பங்கு கண்காணிப்பு',
    careers: 'வேலைவாய்ப்புகள்',
    mediaRoom: 'ஊடக அறை',
    officialStatement: 'அதிகாரபூர்வ அறிக்கைகள்',
    marketVideos: 'சந்தை ஆய்வுக் காணொளிகள்',
    educationalVideos: 'முதலீட்டுக் கல்விக் காணொளிகள்',
    usefulLinks: 'பயனுள்ள இணைப்புகள்',
    upcomingListings: 'வரவிருக்கும் பட்டியல்கள் & IPO',
    investmentResources: 'முதலீட்டு வளங்கள்',
    amlPolicy: 'பணமோசடி தடுப்புக் கொள்கை (AML)',
    secCautionaryNotice: 'SEC எச்சரிக்கை அறிவித்தல்',

    // Footer
    information: 'தகவல்கள்',
    quickLinks: 'முக்கிய இணைப்புகள்',
    governance: 'ஆளுகை மற்றும் பாதுகாப்பு',
    copyright: '© 2025 - 2026 தேசிய அபிவிருத்தி வங்கி மற்றும் NDB செக்யூரிட்டீஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    followUs: 'எம்மைப் பின்தொடரவும்'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => translations.en[key] || key
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ndbs_lang') as Language;
      if (stored && (stored === 'en' || stored === 'si' || stored === 'ta')) {
        setLanguageState(stored);
      }
    } catch {
      // Fallback
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('ndbs_lang', lang);
    } catch {
      // Ignore
    }
  };

  const t = (key: keyof typeof translations['en']): string => {
    const langDict = translations[language] || translations.en;
    return (langDict as Record<string, string>)[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
