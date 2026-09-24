'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  PhoneCall,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  BarChart2,
  PieChart,
  Briefcase,
  Layers,
  Globe,
  Building,
  Award,
  FileText,
  Search,
  Sun,
  Moon,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Download
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

interface HeaderProps {
  audience?: 'local' | 'foreign';
  onAudienceChange?: (audience: 'local' | 'foreign') => void;
  onOpenOnboarding: () => void;
}

export default function Header({ onOpenOnboarding }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeDropdown = () => setActiveDropdown(null);

  const toggleAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  const handleFontSize = (delta: number) => {
    const newLevel = Math.max(-1, Math.min(2, fontSizeLevel + delta));
    setFontSizeLevel(newLevel);
    if (typeof document !== 'undefined') {
      const base = 14;
      document.documentElement.style.fontSize = `${base + newLevel * 1.5}px`;
    }
  };

  return (
    <header ref={navRef} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {/* 1. NDB Bank Official Topbar (Gradient: Plum to Crimson Red) */}
      <div className="ndb-topbar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          {/* Top Left Links (Exact NDB Bank Style) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/about" className="small">{t('aboutUs')}</Link>
            <Link href="/markets" className="small">{t('newsNotices')}</Link>
            <Link href="/research" className="small">{t('researchReports')}</Link>
            <Link href="/about#leadership" className="small">{t('peopleCulture')}</Link>
            <Link href="/about" className="small">{t('sustainability')}</Link>
            <a href="https://www.ndbbank.com/investor-relations" target="_blank" rel="noopener noreferrer" className="small">
              {t('investorRelations')}
            </a>
            <Link href="/contact" className="small">{t('contactUs')}</Link>
          </div>

          {/* Top Right Utilities (Languages, Font Resizer, Theme Toggle, Phone) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', borderRight: '1px solid rgba(255,255,255,0.25)', paddingRight: '0.75rem' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  color: language === 'en' ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  fontWeight: language === 'en' ? 700 : 400,
                  fontSize: '0.775rem',
                  textDecoration: language === 'en' ? 'underline' : 'none'
                }}
              >
                English
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button
                onClick={() => setLanguage('si')}
                style={{
                  color: language === 'si' ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  fontWeight: language === 'si' ? 700 : 400,
                  fontSize: '0.775rem',
                  textDecoration: language === 'si' ? 'underline' : 'none'
                }}
              >
                සිංහල
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button
                onClick={() => setLanguage('ta')}
                style={{
                  color: language === 'ta' ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  fontWeight: language === 'ta' ? 700 : 400,
                  fontSize: '0.775rem',
                  textDecoration: language === 'ta' ? 'underline' : 'none'
                }}
              >
                தமிழ்
              </button>
            </div>

            {/* Font Sizer (A- / A / A+) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', borderRight: '1px solid rgba(255,255,255,0.25)', paddingRight: '0.75rem' }}>
              <button
                onClick={() => handleFontSize(-1)}
                title="Decrease Font Size"
                style={{ color: '#FFFFFF', fontSize: '0.725rem', opacity: fontSizeLevel === -1 ? 0.5 : 1 }}
              >
                A-
              </button>
              <button
                onClick={() => handleFontSize(0 - fontSizeLevel)}
                title="Reset Font Size"
                style={{ color: '#FFFFFF', fontSize: '0.8rem', fontWeight: 600 }}
              >
                A
              </button>
              <button
                onClick={() => handleFontSize(1)}
                title="Increase Font Size"
                style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, opacity: fontSizeLevel === 2 ? 0.5 : 1 }}
              >
                A+
              </button>
            </div>

            {/* Contrast / Theme icon */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle Color Mode"
              style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
            >
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Direct Telephone */}
            <a
              href="tel:+94112131000"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.8rem',
                marginLeft: '0.25rem'
              }}
            >
              <PhoneCall size={12} />
              <span>+94 11 2 131 000</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar (NDB White with subtle shadow) */}
      <nav className="ndb-navbar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Official NDB Securities Logo */}
          <Link href="/" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'center', padding: '0.25rem 0' }}>
            <img
              src="/ndb-securities-logo.png"
              alt="NDB Securities"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation Links with Mega-Menu Dropdowns (Exact NDB Bank Style) */}
          <div style={{ display: 'none', alignItems: 'center', height: '100%' }} className="d-lg-flex">
            {/* 1. Personal / Retail Equities */}
            <button
              className={`ndb-nav-link ${activeDropdown === 'personal' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('personal')}
              onClick={() => setActiveDropdown(activeDropdown === 'personal' ? null : 'personal')}
            >
              <span>{t('personalEquities')}</span>
              <ChevronDown size={14} className="chevron" />
            </button>

            {/* 2. Wholesale & Institutional */}
            <button
              className={`ndb-nav-link ${activeDropdown === 'wholesale' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('wholesale')}
              onClick={() => setActiveDropdown(activeDropdown === 'wholesale' ? null : 'wholesale')}
            >
              <span>{t('institutionalForeign')}</span>
              <ChevronDown size={14} className="chevron" />
            </button>

            {/* 3. Research & Markets */}
            <button
              className={`ndb-nav-link ${activeDropdown === 'research' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('research')}
              onClick={() => setActiveDropdown(activeDropdown === 'research' ? null : 'research')}
            >
              <span>{t('researchMedia')}</span>
              <ChevronDown size={14} className="chevron" />
            </button>

            {/* 4. NDB Group */}
            <button
              className={`ndb-nav-link ${activeDropdown === 'group' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('group')}
              onClick={() => setActiveDropdown(activeDropdown === 'group' ? null : 'group')}
            >
              <span>{t('aboutNdbGroup')}</span>
              <ChevronDown size={14} className="chevron" />
            </button>

            {/* 5. Downloads & Forms */}
            <button
              className={`ndb-nav-link ${activeDropdown === 'downloads' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('downloads')}
              onClick={() => setActiveDropdown(activeDropdown === 'downloads' ? null : 'downloads')}
            >
              <span>{t('quickForms')}</span>
              <ChevronDown size={14} className="chevron" />
            </button>
          </div>

          {/* Right Action Area (Search, CTA Button, Mobile Toggle) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              title="Search"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-hairline)'
              }}
            >
              <Search size={16} />
            </button>

            {/* Atrad Online Portal Login Button */}
            <a
              href="https://online.ndbs.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ndb-outline"
              style={{ fontSize: '0.825rem', padding: '0.5rem 1rem', display: 'none' }}
            >
              <span>{t('atradDmaPortal')}</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Open CDS Account (High-impact NDB Red button) */}
            <button
              onClick={onOpenOnboarding}
              className="btn-ndb-primary"
              style={{ fontSize: '0.85rem', padding: '0.55rem 1.25rem' }}
            >
              <span>{t('digitalCdsAccount')}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                color: '#111827'
              }}
              className="d-lg-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Full-width Responsive Mega Dropdown Menu attached to Navbar */}
        {activeDropdown && (
          <div
            className="mega-dropdown-menu"
            onMouseEnter={() => {}}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container">
              {/* 1. Personal Equities */}
              {activeDropdown === 'personal' && (
                <div className="mega-dropdown-grid">
                  <div>
                    <div className="mega-col-title">
                      <TrendingUp size={15} />
                      <span>Account &amp; Trading Access</span>
                    </div>
                    <div className="mega-menu-list">
                      <button
                        onClick={() => { closeDropdown(); onOpenOnboarding(); }}
                        className="mega-menu-item-link"
                        style={{ width: '100%', textAlign: 'left' }}
                      >
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Digital CDS Account Opening</div>
                          <div className="mega-link-desc">100% paperless e-KYC in under 5 minutes</div>
                        </div>
                      </button>
                      <a
                        href="https://online.ndbs.lk"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeDropdown}
                        className="mega-menu-item-link"
                      >
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                        <div>
                          <div className="mega-link-title">Atrad DMA Trading Portal</div>
                          <div className="mega-link-desc">Direct market execution engine for web &amp; mobile</div>
                        </div>
                      </a>
                      <Link href="/services#equities" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Secondary Market Equities</div>
                          <div className="mega-link-desc">Retail share trading across all 285+ CSE stocks</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="mega-col-title">
                      <Shield size={15} />
                      <span>Privilege &amp; Fixed Income</span>
                    </div>
                    <div className="mega-menu-list">
                      <Link href="/services#elevate" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">NDB Elevate Private Wealth</div>
                          <div className="mega-link-desc">Dedicated portfolio advisors &amp; personalized advisory</div>
                        </div>
                      </Link>
                      <Link href="/services#debt" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Corporate Debentures &amp; Debt</div>
                          <div className="mega-link-desc">Fixed return debt instruments &amp; treasury yields</div>
                        </div>
                      </Link>
                      <Link href="/services#shariah" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">NDB Shareek Compliant Stocks</div>
                          <div className="mega-link-desc">Shariah-screened equities conforming to Islamic principles</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="mega-promo-box">
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                        NDB NEOS &amp; Atrad 2.0
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                        Execute trades, inspect real-time CSE order depths, and review your CDS portfolios on any device seamlessly.
                      </p>
                    </div>
                    <button
                      onClick={() => { closeDropdown(); onOpenOnboarding(); }}
                      className="btn-ndb-primary"
                      style={{ width: '100%', fontSize: '0.825rem', padding: '0.6rem 1rem' }}
                    >
                      {t('digitalCdsAccount')}
                    </button>
                  </div>
                </div>
              )}

              {/* 2. Wholesale & Institutional */}
              {activeDropdown === 'wholesale' && (
                <div className="mega-dropdown-grid">
                  <div>
                    <div className="mega-col-title">
                      <Briefcase size={15} />
                      <span>Institutional Execution</span>
                    </div>
                    <div className="mega-menu-list">
                      <Link href="/services#institutional" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Institutional Sales &amp; Block Trades</div>
                          <div className="mega-link-desc">High-volume discrete executions for funds &amp; corporations</div>
                        </div>
                      </Link>
                      <Link href="/services#foreign-desk" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Foreign Desk &amp; IIA Accounts</div>
                          <div className="mega-link-desc">Global custody coordination and Inward Investment Accounts</div>
                        </div>
                      </Link>
                      <Link href="/services#margin" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Margin &amp; Leverage Facilities</div>
                          <div className="mega-link-desc">Collateralized trading leverage for institutional accounts</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="mega-col-title">
                      <Building size={15} />
                      <span>Synergies &amp; Custody</span>
                    </div>
                    <div className="mega-menu-list">
                      <a href="https://www.ndbib.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                        <div>
                          <div className="mega-link-title">NDB Investment Bank (NDBIB)</div>
                          <div className="mega-link-desc">Debt structuring, IPO management &amp; corporate advisory</div>
                        </div>
                      </a>
                      <a href="https://www.ndbbank.com/custody-trustee-and-escrow-services" target="_blank" rel="noopener noreferrer" className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                        <div>
                          <div className="mega-link-title">Custody, Trustee &amp; Escrow</div>
                          <div className="mega-link-desc">Institutional escrow &amp; custodian banking with NDB Bank</div>
                        </div>
                      </a>
                      <Link href="/services#debt" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                        <div>
                          <div className="mega-link-title">Corporate Debt Syndication</div>
                          <div className="mega-link-desc">Senior &amp; subordinated listed debenture issuances</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="mega-promo-box">
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                        Corporate Internet Banking
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                        Seamlessly pair institutional equities brokerage with NDB Bank Corporate NEOS banking.
                      </p>
                    </div>
                    <a
                      href="https://neoscorporate.ndbbank.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ndb-outline"
                      style={{ width: '100%', fontSize: '0.825rem', padding: '0.6rem 1rem', textAlign: 'center' }}
                    >
                      Corporate NEOS Login
                    </a>
                  </div>
                </div>
              )}

              {/* 3. Research & Markets */}
              {activeDropdown === 'research' && (
                <div className="mega-dropdown-grid">
                  <div>
                    <div className="mega-col-title">
                      <BarChart2 size={15} />
                      <span>Live Market Watch</span>
                    </div>
                    <div className="mega-menu-list">
                      <Link href="/markets" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><TrendingUp size={14} /></div>
                        <div>
                          <div className="mega-link-title">Live CSE Market Pulse</div>
                          <div className="mega-link-desc">ASPI, S&amp;P SL20, turnover &amp; daily gainers/losers</div>
                        </div>
                      </Link>
                      <Link href="/markets#directory" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Layers size={14} /></div>
                        <div>
                          <div className="mega-link-title">Listed Equities Directory</div>
                          <div className="mega-link-desc">Comprehensive database across all 20 GICS sectors</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="mega-col-title">
                      <FileText size={15} />
                      <span>Macro &amp; Sector Reports</span>
                    </div>
                    <div className="mega-menu-list">
                      <Link href="/research" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><PieChart size={14} /></div>
                        <div>
                          <div className="mega-link-title">Institutional Research Portal</div>
                          <div className="mega-link-desc">Daily morning reviews, equity valuations &amp; sector outlooks</div>
                        </div>
                      </Link>
                      <Link href="/research#macro" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Globe size={14} /></div>
                        <div>
                          <div className="mega-link-title">Macro-Economic Forecasts</div>
                          <div className="mega-link-desc">CBSL policy rates, inflation trajectories &amp; yield curve updates</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="mega-promo-box">
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                        Award-Winning Research
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                        Consistently ranked among Sri Lanka&apos;s best research desks at the CFA Society Capital Market Awards.
                      </p>
                    </div>
                    <Link
                      href="/research"
                      onClick={closeDropdown}
                      className="btn-ndb-outline"
                      style={{ width: '100%', fontSize: '0.825rem', padding: '0.6rem 1rem', textAlign: 'center' }}
                    >
                      Access Research Library
                    </Link>
                  </div>
                </div>
              )}

              {/* 4. NDB Group */}
              {activeDropdown === 'group' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <a
                    href="https://www.ndbbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homecard"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ndb-red)', marginBottom: '0.35rem' }}>
                      NDB Bank PLC
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      Commercial Banking • Fitch A-(lka)
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Full service commercial bank with 113+ islandwide branches and digital banking via NDB NEOS.
                    </div>
                  </a>

                  <a
                    href="https://www.ndbch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homecard"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.35rem' }}>
                      NDB Capital Holdings
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      Investment Banking Umbrella
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Parent holding company overseeing premier capital market subsidiaries in Sri Lanka.
                    </div>
                  </a>

                  <a
                    href="https://www.ndbwealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homecard"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.35rem' }}>
                      NDB Wealth Management
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      Private Asset Manager
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Sri Lanka&apos;s largest private sector asset manager with mutual funds and discretionary portfolios.
                    </div>
                  </a>

                  <a
                    href="https://www.ndbib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homecard"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.35rem' }}>
                      NDB Investment Bank
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      NDBIB • Debt &amp; M&amp;A
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Market leader in landmark IPOs, syndicated debt facilities, and corporate financial advisory.
                    </div>
                  </a>
                </div>
              )}

              {/* 5. Forms Vault */}
              {activeDropdown === 'downloads' && (
                <div className="mega-dropdown-grid">
                  <div>
                    <div className="mega-col-title">
                      <FileText size={15} />
                      <span>Individual CDS Forms</span>
                    </div>
                    <div className="mega-menu-list">
                      <Link href="/downloads" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Download size={14} /></div>
                        <div>
                          <div className="mega-link-title">CDS 1 Individual Application</div>
                          <div className="mega-link-desc">Primary account opening schedule for resident &amp; non-resident clients</div>
                        </div>
                      </Link>
                      <Link href="/downloads" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Download size={14} /></div>
                        <div>
                          <div className="mega-link-title">Client Registration &amp; Agreement</div>
                          <div className="mega-link-desc">Broker-client relationship terms and dividend deposit mandate</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="mega-col-title">
                      <Building size={15} />
                      <span>Corporate &amp; Custody Schedules</span>
                    </div>
                    <div className="mega-menu-list">
                      <Link href="/downloads" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Download size={14} /></div>
                        <div>
                          <div className="mega-link-title">CDS 2 Corporate Application</div>
                          <div className="mega-link-desc">Account registration schedule for limited liability corporations</div>
                        </div>
                      </Link>
                      <Link href="/downloads" onClick={closeDropdown} className="mega-menu-item-link">
                        <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Download size={14} /></div>
                        <div>
                          <div className="mega-link-title">Board Resolution Specimen</div>
                          <div className="mega-link-desc">Corporate authority delegation and authorized signatory schedule</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="mega-promo-box">
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                        Document Repository
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                        Access official SEC verified schedules, tariff breakdowns, and electronic KYC forms in one central vault.
                      </p>
                    </div>
                    <Link
                      href="/downloads"
                      onClick={closeDropdown}
                      className="btn-ndb-primary"
                      style={{ width: '100%', fontSize: '0.825rem', padding: '0.6rem 1rem', textAlign: 'center' }}
                    >
                      Visit Forms Vault
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search Modal Bar */}
        {searchOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: '#FFFFFF',
              borderBottom: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-md)',
              padding: '1rem 0',
              zIndex: 1010
            }}
          >
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', flexGrow: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
                <input
                  type="text"
                  placeholder="Search listed companies, CSE symbols, research reports, CDS forms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                style={{ padding: '0.5rem', color: 'var(--text-tertiary)' }}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Offcanvas Mobile Drawer (Exact NDB Bank Style) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '100%',
              background: '#FFFFFF',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-hairline)', background: 'var(--bg-secondary)' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--ndb-red)' }}>
                NDB SECURITIES
              </div>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: '#111827' }}>
                <X size={22} />
              </button>
            </div>

            {/* Drawer Navigation List */}
            <div style={{ padding: '1rem 1.5rem', flexGrow: 1 }}>
              {/* Accordion 1: Personal */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('personal')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>Personal Equities</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'personal' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'personal' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <button onClick={() => { setMobileMenuOpen(false); onOpenOnboarding(); }} style={{ textAlign: 'left', color: 'var(--ndb-red)', fontWeight: 600 }}>
                      • Digital CDS Account Opening
                    </button>
                    <a href="https://online.ndbs.lk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      • Atrad DMA Trading Portal
                    </a>
                    <Link href="/services#equities" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Secondary Market Equities
                    </Link>
                    <Link href="/services#elevate" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • NDB Elevate Private Wealth
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 2: Wholesale */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('wholesale')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>Wholesale & Institutional</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'wholesale' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'wholesale' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <Link href="/services#institutional" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Institutional Sales & Block Trades
                    </Link>
                    <Link href="/services#foreign-desk" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Foreign Desk & IIA Accounts
                    </Link>
                    <a href="https://www.ndbib.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      • NDB Investment Bank (NDBIB)
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 3: Research */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('research')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>Research & Markets</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'research' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'research' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <Link href="/markets" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Live CSE Market Pulse
                    </Link>
                    <Link href="/markets#directory" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Listed Equities Directory
                    </Link>
                    <Link href="/research" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Institutional Research Reports
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct links */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', display: 'block' }}>
                  Downloads & Forms
                </Link>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', display: 'block' }}>
                  About NDB Securities
                </Link>
              </div>

              <div style={{ padding: '0.85rem 0' }}>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', display: 'block' }}>
                  Contact & Branch Network
                </Link>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenOnboarding(); }}
                className="btn-ndb-primary"
                style={{ width: '100%' }}
              >
                Open Digital CDS Account
              </button>
              <a
                href="https://online.ndbs.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ndb-outline"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Atrad Online Portal
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Internal CSS for responsiveness & animations */}
      <style jsx>{`
        @media (min-width: 992px) {
          .d-lg-flex {
            display: flex !important;
          }
          .d-lg-none {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .d-lg-flex {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
