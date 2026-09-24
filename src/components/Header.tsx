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
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  audience?: 'local' | 'foreign';
  onAudienceChange?: (audience: 'local' | 'foreign') => void;
  onOpenOnboarding: () => void;
}

export default function Header({ onOpenOnboarding }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'si' | 'ta'>('en');
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
            <Link href="/about" className="small">About Us</Link>
            <Link href="/markets" className="small">News & Notices</Link>
            <Link href="/research" className="small">Research Reports</Link>
            <Link href="/about#leadership" className="small">People & Culture</Link>
            <Link href="/about" className="small">Sustainability</Link>
            <a href="https://www.ndbbank.com/investor-relations" target="_blank" rel="noopener noreferrer" className="small">
              Investor Relations
            </a>
            <Link href="/contact" className="small">Contact Us</Link>
          </div>

          {/* Top Right Utilities (Languages, Font Resizer, Theme Toggle, Phone) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', borderRight: '1px solid rgba(255,255,255,0.25)', paddingRight: '0.75rem' }}>
              <button
                onClick={() => setSelectedLanguage('en')}
                style={{
                  color: selectedLanguage === 'en' ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  fontWeight: selectedLanguage === 'en' ? 700 : 400,
                  fontSize: '0.775rem'
                }}
              >
                English
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button
                onClick={() => setSelectedLanguage('si')}
                style={{
                  color: selectedLanguage === 'si' ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  fontWeight: selectedLanguage === 'si' ? 700 : 400,
                  fontSize: '0.775rem'
                }}
              >
                සිංහල
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button
                onClick={() => setSelectedLanguage('ta')}
                style={{
                  color: selectedLanguage === 'ta' ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  fontWeight: selectedLanguage === 'ta' ? 700 : 400,
                  fontSize: '0.775rem'
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
          {/* Logo with NDB Corporate Mark */}
          <Link href="/" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Authentic NDB Geometric Shape Icon */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="42" height="42" viewBox="0 0 180 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.2 2.2V13.3L20.1 2.2H1.2Z" fill="#111827" />
                <path d="M4.8 27H25.6V6.2L4.8 27Z" fill="#111827" />
                <path d="M1.2 16.3V27.1L27.6 0.7L1.2 16.3Z" fill="#cf152d" />
                <path d="M46.2 2.2V19.5L36.4 2.2H31V27H35.8V9.4L45.8 27.1H50.9V2.2H46.2Z" fill="#cf152d" />
                <path d="M66 2.2H55.3V27H65.9C74 27 76 19.3 76 14C76 8.7 74.3 2.2 66.1 2.2H66ZM65.2 22.7H60.2V6.5H65.1C67.3 6.5 70.7 7.1 70.7 14.4C70.7 21.7 69.3 22.7 65.2 22.7Z" fill="#cf152d" />
                <path d="M95.6 13.6C96.6 13.1 98.6 12.1 98.6 8.5C98.6 4.9 97.1 2.2 91.1 2.2H79.2V27H89.6C94.6 27 95.9 26.1 97.3 24.7C98.6 23.4 99.4 21.6 99.4 19.6C99.4 17.6 98.6 14.8 95.6 13.6ZM84 6.5H89.9C92.2 6.5 93.7 7.1 93.7 9.2C93.7 11.3 92.1 11.9 90.1 11.9H84.1V6.5H84ZM90.2 22.7H84V16.1H90.4C92.3 16.1 94.1 16.9 94.1 19.1C94.1 21.3 92.7 22.7 90.2 22.7Z" fill="#cf152d" />
                <path d="M179 33.7H1.2V51.6H179V33.7Z" fill="#cf152d" />
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>NDB</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ndb-red)' }}>SECURITIES</span>
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                Member Colombo Stock Exchange
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links with Mega-Menu Dropdowns (Exact NDB Bank Style) */}
          <div style={{ display: 'none', alignItems: 'center', height: '100%' }} className="d-lg-flex">
            {/* 1. Personal / Retail Equities */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setActiveDropdown('personal')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`ndb-nav-link ${activeDropdown === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'personal' ? null : 'personal')}
              >
                <span>Personal Equities</span>
                <ChevronDown size={14} className="chevron" />
              </button>

              {activeDropdown === 'personal' && (
                <div className="mega-dropdown-menu" style={{ left: 0, right: 0 }}>
                  <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ndb-red)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                          Account & Trading Access
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <li>
                            <button
                              onClick={() => { closeDropdown(); onOpenOnboarding(); }}
                              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', textAlign: 'left', width: '100%' }}
                            >
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Digital CDS Account Opening</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>100% paperless e-KYC in under 5 minutes</div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <a
                              href="https://online.ndbs.lk"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeDropdown}
                              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
                            >
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Atrad DMA Trading Portal</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Direct market execution engine for web & mobile</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <Link href="/services#equities" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Secondary Market Equities</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Retail share trading across all 285+ CSE stocks</div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ndb-red)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                          Privilege & Fixed Income
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <li>
                            <Link href="/services#elevate" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>NDB Elevate Private Wealth</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Dedicated portfolio advisors & personalized advisory</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services#debt" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Corporate Debentures & Debt</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Fixed return debt instruments & treasury yields</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services#shariah" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>NDB Shareek Compliant Stocks</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Shariah-screened equities conforming to Islamic principles</div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                          NDB NEOS & Atrad 2.0
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                          Execute trades, inspect real-time CSE order depths, and review your CDS portfolios on any device seamlessly.
                        </p>
                        <button
                          onClick={() => { closeDropdown(); onOpenOnboarding(); }}
                          className="btn-ndb-primary"
                          style={{ width: '100%', fontSize: '0.825rem', padding: '0.5rem 1rem' }}
                        >
                          Open Digital CDS Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Wholesale & Institutional */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setActiveDropdown('wholesale')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`ndb-nav-link ${activeDropdown === 'wholesale' ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'wholesale' ? null : 'wholesale')}
              >
                <span>Wholesale & Institutional</span>
                <ChevronDown size={14} className="chevron" />
              </button>

              {activeDropdown === 'wholesale' && (
                <div className="mega-dropdown-menu" style={{ left: 0, right: 0 }}>
                  <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ndb-red)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                          Institutional Execution
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <li>
                            <Link href="/services#institutional" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Institutional Sales & Block Trades</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>High-volume discrete executions for funds & corporations</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services#foreign-desk" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ArrowRight size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Foreign Desk & IIA Accounts</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Global custody coordination and Inward Investment Accounts</div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ndb-red)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                          Synergies & Custody
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <li>
                            <a href="https://www.ndbib.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>NDB Investment Bank (NDBIB)</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Debt structuring, IPO management & mergers</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.ndbbank.com/custody-trustee-and-escrow-services" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><ExternalLink size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Custody, Trustee & Escrow</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Institutional escrow & custodian banking with NDB Bank</div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                          Corporate Internet Portal
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                          Seamlessly pair institutional equities brokerage with NDB Bank Corporate NEOS banking.
                        </p>
                        <a
                          href="https://neoscorporate.ndbbank.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ndb-outline"
                          style={{ width: '100%', fontSize: '0.825rem', padding: '0.5rem 1rem' }}
                        >
                          Corporate Banking Login
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Research & Markets */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setActiveDropdown('research')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`ndb-nav-link ${activeDropdown === 'research' ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'research' ? null : 'research')}
              >
                <span>Research & Markets</span>
                <ChevronDown size={14} className="chevron" />
              </button>

              {activeDropdown === 'research' && (
                <div className="mega-dropdown-menu" style={{ left: 0, right: 0 }}>
                  <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ndb-red)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                          Live Market Watch
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <li>
                            <Link href="/markets" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><TrendingUp size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Live CSE Market Pulse</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>ASPI, S&P SL20, turnover & daily gainers/losers</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/markets#directory" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><BarChart2 size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Listed Equities Directory</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Comprehensive database across all 20 GICS sectors</div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ndb-red)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                          Macro & Sector Reports
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <li>
                            <Link href="/research" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><PieChart size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Institutional Research Portal</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>Daily morning reviews, equity valuations & sector outlooks</div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/research#macro" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <div style={{ color: 'var(--ndb-red)', marginTop: '2px' }}><Layers size={14} /></div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Macro-Economic Forecasts</div>
                                <div style={{ fontSize: '0.785rem', color: 'var(--text-tertiary)' }}>CBSL policy rates, inflation trajectories & yield curve updates</div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                          Award-Winning Research
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                          Ranked among the top research teams at the CFA Society Sri Lanka Capital Market Awards.
                        </p>
                        <Link
                          href="/research"
                          onClick={closeDropdown}
                          className="btn-ndb-outline"
                          style={{ width: '100%', fontSize: '0.825rem', padding: '0.5rem 1rem' }}
                        >
                          Access Research Library
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. NDB Capital Group */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setActiveDropdown('group')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`ndb-nav-link ${activeDropdown === 'group' ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'group' ? null : 'group')}
              >
                <span>NDB Group</span>
                <ChevronDown size={14} className="chevron" />
              </button>

              {activeDropdown === 'group' && (
                <div className="mega-dropdown-menu" style={{ left: 0, right: 0 }}>
                  <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                      <a href="https://www.ndbbank.com" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--ndb-red)', marginBottom: '0.25rem' }}>NDB Bank PLC</div>
                        <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>Licensed commercial bank supervised by CBSL (Fitch A-(lka))</div>
                      </a>
                      <a href="https://www.ndbch.com" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.25rem' }}>NDB Capital Holdings</div>
                        <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>Holding umbrella for NDB investment banking companies</div>
                      </a>
                      <a href="https://www.ndbwealth.com" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.25rem' }}>NDB Wealth Management</div>
                        <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>Sri Lanka&apos;s largest private sector wealth management firm</div>
                      </a>
                      <a href="https://www.ndbib.com" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.25rem' }}>NDB Investment Bank</div>
                        <div style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>Market leader in equity, debt structuring and corporate advisory</div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Downloads & Forms */}
            <Link href="/downloads" className="ndb-nav-link">
              <span>Downloads</span>
            </Link>
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
              <span>Atrad Portal</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Open CDS Account (High-impact NDB Red button) */}
            <button
              onClick={onOpenOnboarding}
              className="btn-ndb-primary"
              style={{ fontSize: '0.85rem', padding: '0.55rem 1.25rem' }}
            >
              <span>Open CDS Account</span>
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
