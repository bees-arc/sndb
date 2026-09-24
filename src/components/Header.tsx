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
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Download,
  UserCheck,
  Monitor
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }} className="topbar-links-desktop">
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
            {/* Search Toggle (Desktop only - mobile has search in drawer) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              title="Search"
              className="navbar-desktop-only"
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
              className="btn-ndb-outline navbar-desktop-only"
              style={{ fontSize: '0.825rem', padding: '0.5rem 1rem', display: 'none' }}
            >
              <span>{t('atradDmaPortal')}</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Open CDS Account (Desktop only - mobile has CDS button in drawer) */}
            <button
              onClick={onOpenOnboarding}
              className="btn-ndb-primary navbar-desktop-only"
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
              className="navbar-mobile-only"
              aria-label="Open Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Full-width Responsive Mega Dropdown Menu attached to Navbar */}
        {activeDropdown && (
          <>
            <div
              className="mega-dropdown-backdrop"
              onClick={() => setActiveDropdown(null)}
            />
            <div
              className="mega-dropdown-menu"
              onMouseEnter={() => {}}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="container">
                {/* 1. Personal Equities */}
                {activeDropdown === 'personal' && (
                  <div className="mega-dropdown-grid-3">
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
                        <Link href="/services#custody" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                          <div>
                            <div className="mega-link-title">Share Lodgment &amp; Intra Transfers</div>
                            <div className="mega-link-desc">Paper share conversion to electronic CDS balance</div>
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
                        <Link href="/services#funds" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                          <div>
                            <div className="mega-link-title">Mutual Funds &amp; Unit Trusts</div>
                            <div className="mega-link-desc">Invest in diverse income &amp; growth funds via NDB Wealth</div>
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

                {/* 2. Wholesale & Institutional / Foreign */}
                {activeDropdown === 'wholesale' && (
                  <div className="mega-dropdown-grid-3">
                    <div>
                      <div className="mega-col-title">
                        <Briefcase size={15} />
                        <span>Institutional Execution &amp; IIA</span>
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
                            <div className="mega-link-title">Foreign Desk &amp; IIA Custody</div>
                            <div className="mega-link-desc">Inward Investment Accounts &amp; global custodian coordination</div>
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
                        <Globe size={15} />
                        <span>Invest in Sri Lanka &amp; Group Synergies</span>
                      </div>
                      <div className="mega-menu-list">
                        <Link href="/about" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                          <div>
                            <div className="mega-link-title">Heritage &amp; Growth Story</div>
                            <div className="mega-link-desc">A rich history and macroeconomic growth trajectory</div>
                          </div>
                        </Link>
                        <Link href="/markets" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                          <div>
                            <div className="mega-link-title">The Opportunity in Sri Lanka</div>
                            <div className="mega-link-desc">Capitalise on undervalued frontier equities &amp; high yields</div>
                          </div>
                        </Link>
                        <a href="https://www.ndbib.com" target="_blank" rel="noopener noreferrer" className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                          <div>
                            <div className="mega-link-title">NDB Investment Bank (NDBIB)</div>
                            <div className="mega-link-desc">Debt structuring, IPO management &amp; corporate advisory</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="mega-promo-box">
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                          Corporate &amp; Custody Access
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                          Pair institutional equities brokerage with NDB Bank Custody, Trustee &amp; Escrow services.
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
                  <div className="mega-dropdown-grid-3">
                    <div>
                      <div className="mega-col-title">
                        <BarChart2 size={15} />
                        <span>Live Market Watch &amp; Listings</span>
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
                        <Link href="/markets#listings" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Award size={14} /></div>
                          <div>
                            <div className="mega-link-title">Upcoming Listings &amp; IPOs</div>
                            <div className="mega-link-desc">Primary market public offerings and debenture prospectuses</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="mega-col-title">
                        <FileText size={15} />
                        <span>Research Library &amp; Philosophy</span>
                      </div>
                      <div className="mega-menu-list">
                        <Link href="/research" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><PieChart size={14} /></div>
                          <div>
                            <div className="mega-link-title">Institutional Research Library</div>
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
                        <a href="https://www.youtube.com/@NDBSecuritiesLimited" target="_blank" rel="noopener noreferrer" className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                          <div>
                            <div className="mega-link-title">Market Commentary Videos</div>
                            <div className="mega-link-desc">Weekly CSE updates &amp; investor education on YouTube</div>
                          </div>
                        </a>
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

                {/* 4. NDB Group (Who We Are & Leadership) */}
                {activeDropdown === 'group' && (
                  <div className="mega-dropdown-grid-4">
                    <Link
                      href="/about"
                      onClick={closeDropdown}
                      className="mega-promo-box"
                      style={{ textDecoration: 'none', background: 'var(--bg-secondary)' }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ndb-red)', marginBottom: '0.35rem' }}>
                          The Firm (NDBS)
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                          Pioneer CSE Member • 1992
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                          Three decades of ethical stockbroking, market research, and high-frequency execution.
                        </p>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ndb-red)' }}>Learn more &rarr;</span>
                    </Link>

                    <a
                      href="https://www.ndbch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mega-promo-box"
                      style={{ textDecoration: 'none', background: 'var(--bg-secondary)' }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.35rem' }}>
                          The Group (NDBCH)
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                          Investment Banking Umbrella
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                          Parent holding company overseeing securities, wealth management, and private equity.
                        </p>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ndb-red)' }}>Visit NDBCH &rarr;</span>
                    </a>

                    <a
                      href="https://www.ndbbank.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mega-promo-box"
                      style={{ textDecoration: 'none', background: 'var(--bg-secondary)' }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.35rem' }}>
                          The Conglomerate
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                          National Development Bank PLC
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                          Fitch A-(lka) commercial bank with 113+ branches and pioneering digital banking.
                        </p>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ndb-red)' }}>Visit Bank &rarr;</span>
                    </a>

                    <Link
                      href="/about#leadership"
                      onClick={closeDropdown}
                      className="mega-promo-box"
                      style={{ textDecoration: 'none', background: 'var(--bg-secondary)' }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.35rem' }}>
                          Leadership &amp; Careers
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                          Governance &amp; Opportunities
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                          Meet our Board of Directors, executive leadership team, and discover career opportunities.
                        </p>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ndb-red)' }}>Meet Leadership &rarr;</span>
                    </Link>
                  </div>
                )}

                {/* 5. Downloads & Forms Vault */}
                {activeDropdown === 'downloads' && (
                  <div className="mega-dropdown-grid-3">
                    <div>
                      <div className="mega-col-title">
                        <FileText size={15} />
                        <span>Individual &amp; Corporate CDS Forms</span>
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

                    <div>
                      <div className="mega-col-title">
                        <Shield size={15} />
                        <span>Compliance, AML &amp; Fee Schedules</span>
                      </div>
                      <div className="mega-menu-list">
                        <Link href="/downloads" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Download size={14} /></div>
                          <div>
                            <div className="mega-link-title">Anti-Money Laundering (AML) Policy</div>
                            <div className="mega-link-desc">Official AML / CFT compliance framework PDF</div>
                          </div>
                        </Link>
                        <Link href="/downloads" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Download size={14} /></div>
                          <div>
                            <div className="mega-link-title">Cautionary Notice by SEC</div>
                            <div className="mega-link-desc">Statutory investor advisory issued by the SEC Sri Lanka</div>
                          </div>
                        </Link>
                        <Link href="/services#tariffs" onClick={closeDropdown} className="mega-menu-item-link">
                          <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                          <div>
                            <div className="mega-link-title">Brokerage Tariffs &amp; SEC Levies</div>
                            <div className="mega-link-desc">Standard CSE transaction costs and statutory levy schedule</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="mega-promo-box">
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                          Official Document Repository
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                          Access all official SEC verified schedules, tariff breakdowns, and electronic KYC forms in one central vault.
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
          </>
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
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: '#111827' }} aria-label="Close Mobile Menu">
                <X size={22} />
              </button>
            </div>

            {/* Mobile Search Bar inside Drawer (Requested by user) */}
            <div style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-hairline)', background: '#FFFFFF' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search size={16} style={{ position: 'absolute', left: '0.85rem', color: 'var(--text-tertiary)' }} />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder') || "Search stocks, research, CDS forms..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/markets?search=${encodeURIComponent(searchQuery)}`;
                      setMobileMenuOpen(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem 0.65rem 2.4rem',
                    fontSize: '0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    outline: 'none',
                    background: 'var(--bg-secondary)'
                  }}
                />
              </div>
            </div>

            {/* Mobile Action Buttons: Digital CDS Account & Atrad Portal (Requested by user) */}
            <div style={{ padding: '0.85rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', borderBottom: '1px solid var(--border-hairline)', background: 'var(--bg-secondary)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOnboarding();
                }}
                className="btn-ndb-primary"
                style={{ width: '100%', padding: '0.7rem 1rem', fontSize: '0.885rem', justifyContent: 'center' }}
              >
                <UserCheck size={17} />
                <span>{t('digitalCdsAccount')}</span>
              </button>
              <a
                href="https://online.ndbs.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ndb-outline"
                style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.825rem', justifyContent: 'center' }}
              >
                <Monitor size={15} />
                <span>{t('atradDmaPortal')}</span>
              </a>
            </div>

            {/* Mobile Language Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.85rem 1.5rem', background: '#F8FAFC', borderBottom: '1px solid var(--border-hairline)' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  color: language === 'en' ? 'var(--ndb-red)' : 'var(--text-secondary)',
                  fontWeight: language === 'en' ? 700 : 500,
                  fontSize: '0.85rem',
                  textDecoration: language === 'en' ? 'underline' : 'none'
                }}
              >
                English
              </button>
              <span style={{ color: 'var(--border-subtle)' }}>|</span>
              <button
                onClick={() => setLanguage('si')}
                style={{
                  color: language === 'si' ? 'var(--ndb-red)' : 'var(--text-secondary)',
                  fontWeight: language === 'si' ? 700 : 500,
                  fontSize: '0.85rem',
                  textDecoration: language === 'si' ? 'underline' : 'none'
                }}
              >
                සිංහල
              </button>
              <span style={{ color: 'var(--border-subtle)' }}>|</span>
              <button
                onClick={() => setLanguage('ta')}
                style={{
                  color: language === 'ta' ? 'var(--ndb-red)' : 'var(--text-secondary)',
                  fontWeight: language === 'ta' ? 700 : 500,
                  fontSize: '0.85rem',
                  textDecoration: language === 'ta' ? 'underline' : 'none'
                }}
              >
                தமிழ்
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
                  <span>{t('personalEquities')}</span>
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
                    <Link href="/services#debt" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Corporate Debentures &amp; Debt
                    </Link>
                    <Link href="/services#funds" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Mutual Funds &amp; Unit Trusts
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 2: Wholesale & Institutional */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('wholesale')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>{t('institutionalForeign')}</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'wholesale' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'wholesale' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <Link href="/services#institutional" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Institutional Sales &amp; Block Trades
                    </Link>
                    <Link href="/services#foreign-desk" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Foreign Desk &amp; IIA Accounts
                    </Link>
                    <Link href="/services#margin" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Margin &amp; Leverage Facilities
                    </Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Invest in Sri Lanka: Heritage &amp; Opportunity
                    </Link>
                    <a href="https://www.ndbib.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      • NDB Investment Bank (NDBIB)
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 3: Research & Markets */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('research')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>{t('researchMedia')}</span>
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
                    <Link href="/markets#listings" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Upcoming Listings &amp; IPOs
                    </Link>
                    <Link href="/research" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Institutional Research Library
                    </Link>
                    <Link href="/research#macro" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Macro-Economic Forecasts
                    </Link>
                    <a href="https://www.youtube.com/@NDBSecuritiesLimited" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      • Market Commentary Videos
                    </a>
                  </div>
                )}
              </div>

              {/* Accordion 4: NDB Group */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('group')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>{t('aboutNdbGroup')}</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'group' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'group' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • The Firm (NDB Securities)
                    </Link>
                    <a href="https://www.ndbch.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      • The Group (NDB Capital Holdings)
                    </a>
                    <a href="https://www.ndbbank.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      • The Conglomerate (NDB Bank PLC)
                    </a>
                    <Link href="/about#leadership" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Board of Directors &amp; Leadership
                    </Link>
                    <Link href="/about#careers" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Careers at NDB Securities
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 5: Forms Vault */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('downloads')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>{t('quickForms')}</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'downloads' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'downloads' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • CDS 1 Individual Form
                    </Link>
                    <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • CDS 2 Corporate Form
                    </Link>
                    <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Anti-Money Laundering (AML) Policy
                    </Link>
                    <Link href="/services#tariffs" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • Brokerage Tariffs &amp; SEC Levies
                    </Link>
                    <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                      • Visit All Forms Vault
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 6: Corporate & Information (Topbar Links as requested by user) */}
              <div style={{ borderBottom: '1px solid var(--border-hairline)', padding: '0.85rem 0' }}>
                <button
                  onClick={() => toggleAccordion('corporate')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}
                >
                  <span>{t('whoWeAre') || 'Corporate & Quick Info'}</span>
                  <ChevronRight size={16} style={{ transform: mobileAccordion === 'corporate' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileAccordion === 'corporate' && (
                  <div style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • {t('aboutUs')}
                    </Link>
                    <Link href="/markets" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • {t('newsNotices')}
                    </Link>
                    <Link href="/research" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • {t('researchReports')}
                    </Link>
                    <Link href="/about#leadership" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • {t('peopleCulture')}
                    </Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • {t('sustainability')}
                    </Link>
                    <a href="https://www.ndbbank.com/investor-relations" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span>• {t('investorRelations')}</span>
                      <ArrowUpRight size={12} />
                    </a>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                      • {t('contactUs')}
                    </Link>
                  </div>
                )}
              </div>

              <div style={{ padding: '0.85rem 0' }}>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', display: 'block' }}>
                  {t('contactUs')} &amp; Branch Network
                </Link>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                Hotline: <a href="tel:+94112131000" style={{ color: 'var(--ndb-red)', fontWeight: 600 }}>+94 11 2 131 000</a>
              </div>
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
          .d-lg-none,
          .navbar-mobile-only {
            display: none !important;
          }
          .navbar-desktop-only {
            display: inline-flex !important;
          }
          .topbar-links-desktop {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .d-lg-flex {
            display: none !important;
          }
          .d-lg-none,
          .navbar-mobile-only {
            display: flex !important;
          }
          .navbar-desktop-only {
            display: none !important;
          }
          .topbar-links-desktop {
            display: none !important;
          }
          .mega-dropdown-menu,
          .mega-dropdown-backdrop {
            display: none !important;
          }
          .ndb-topbar {
            padding: 0.35rem 0;
          }
          .ndb-topbar :global(.container) {
            justify-content: center !important;
          }
        }
      `}</style>
    </header>
  );
}
