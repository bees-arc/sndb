'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  UserPlus,
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
  Phone
} from 'lucide-react';

interface HeaderProps {
  audience: 'local' | 'foreign';
  onAudienceChange: (audience: 'local' | 'foreign') => void;
  onOpenOnboarding: () => void;
}

export default function Header({ audience, onAudienceChange, onOpenOnboarding }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

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

  return (
    <header
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        borderBottom: '1px solid var(--border-hairline)',
        background: '#FFFFFF'
      }}
    >
      {/* Top Regulatory Ribbon */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-hairline)',
          fontSize: '0.785rem',
          color: 'var(--text-secondary)',
          padding: '0.4rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: 'var(--ndb-crimson)' }}>
            <Shield size={13} /> SEC Licensed
          </span>
          <span style={{ opacity: 0.35 }}>•</span>
          <span>Full Trading Member CSE</span>
          <span style={{ opacity: 0.35 }} className="hide-sm">•</span>
          <span className="hide-sm">NDB Capital Holdings & NDB Bank PLC Subsidiary</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
            <PhoneCall size={12} /> +94 (11) 2 131 000
          </Link>
          <a
            href="https://online.ndbs.lk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--apple-blue)', fontWeight: 600 }}
          >
            Atrad Online <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Main Spacious Navbar */}
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem',
          padding: '0 2rem'
        }}
      >
        {/* Official Brand Logo (Spacious on White Background) */}
        <Link
          href="/"
          onClick={closeDropdown}
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: '1.5rem',
            marginRight: '0.5rem'
          }}
        >
          <img
            src="/ndb-securities-logo.png"
            alt="NDB Securities"
            style={{
              height: '40px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* Clear Main Navigation Links (Desktop) */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none' }}>
            {/* 1. Markets Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('markets')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'markets' ? null : 'markets')}
                className={`nav-button ${activeDropdown === 'markets' ? 'active' : ''}`}
              >
                <span>Markets</span>
                <ChevronDown size={14} className={`chevron-icon ${activeDropdown === 'markets' ? 'rotate' : ''}`} />
              </button>

              {activeDropdown === 'markets' && (
                <div className="dropdown-panel" style={{ width: '340px' }}>
                  <Link href="/markets" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon red">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Live CSE Market Watch</div>
                      <div className="dropdown-subtitle">ASPI, S&P SL20, turnover & top daily movers</div>
                    </div>
                  </Link>

                  <Link href="/markets#directory" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon blue">
                      <BarChart2 size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Listed Equities Directory</div>
                      <div className="dropdown-subtitle">Browse listed stocks across all 20 CSE sectors</div>
                    </div>
                  </Link>

                  <a
                    href="https://online.ndbs.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDropdown}
                    className="dropdown-link"
                  >
                    <div className="dropdown-icon green">
                      <ArrowUpRight size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span>Atrad DMA Trading</span>
                        <ArrowUpRight size={12} />
                      </div>
                      <div className="dropdown-subtitle">Direct market access online execution portal</div>
                    </div>
                  </a>
                </div>
              )}
            </li>

            {/* 2. Services Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`nav-button ${activeDropdown === 'services' ? 'active' : ''}`}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`chevron-icon ${activeDropdown === 'services' ? 'rotate' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="dropdown-panel" style={{ width: '360px' }}>
                  <Link href="/services" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon red">
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">All Services Overview</div>
                      <div className="dropdown-subtitle">Comprehensive equities, debt & advisory pillars</div>
                    </div>
                  </Link>

                  <Link href="/services#equities" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon blue">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Domestic Equity Brokerage</div>
                      <div className="dropdown-subtitle">Retail & institutional secondary share trading</div>
                    </div>
                  </Link>

                  <Link href="/services#debt" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon gold">
                      <PieChart size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Fixed Income & Corporate Debt</div>
                      <div className="dropdown-subtitle">Listed debentures and government bond structures</div>
                    </div>
                  </Link>

                  <Link href="/services#foreign-desk" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon purple">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Foreign & Expatriate Desk</div>
                      <div className="dropdown-subtitle">Inward Investment Accounts (IIA) & global custody</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            {/* 3. Research (Direct Link) */}
            <li>
              <Link
                href="/research"
                onClick={closeDropdown}
                className="nav-button"
              >
                Research
              </Link>
            </li>

            {/* 4. Downloads (Direct Link - Prominently Visible!) */}
            <li>
              <Link
                href="/downloads"
                onClick={closeDropdown}
                className="nav-button"
              >
                Downloads
              </Link>
            </li>

            {/* 5. About Us Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`nav-button ${activeDropdown === 'about' ? 'active' : ''}`}
              >
                <span>About Us</span>
                <ChevronDown size={14} className={`chevron-icon ${activeDropdown === 'about' ? 'rotate' : ''}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="dropdown-panel" style={{ width: '320px' }}>
                  <Link href="/about" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon red">
                      <Building size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Firm Profile & Heritage</div>
                      <div className="dropdown-subtitle">Established in 1992 • Member of NDB Group</div>
                    </div>
                  </Link>

                  <Link href="/about#leadership" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon blue">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Board of Directors</div>
                      <div className="dropdown-subtitle">Seasoned bankers, leaders & fiduciary governance</div>
                    </div>
                  </Link>

                  <Link href="/about#compliance" onClick={closeDropdown} className="dropdown-link">
                    <div className="dropdown-icon green">
                      <Shield size={18} />
                    </div>
                    <div>
                      <div className="dropdown-title">Regulatory Compliance</div>
                      <div className="dropdown-subtitle">SEC Act No. 19 of 2021 & CSE membership rules</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            {/* 6. Contact (Direct Link) */}
            <li>
              <Link
                href="/contact"
                onClick={closeDropdown}
                className="nav-button"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
          {/* Segmented Audience Toggle */}
          <div className="segmented-control" role="group" aria-label="Audience Type">
            <button
              onClick={() => onAudienceChange('local')}
              className={`segmented-option ${audience === 'local' ? 'active' : ''}`}
            >
              <span>🇱🇰</span>
              <span>Local</span>
            </button>
            <button
              onClick={() => onAudienceChange('foreign')}
              className={`segmented-option ${audience === 'foreign' ? 'active' : ''}`}
            >
              <span>🌐</span>
              <span>Foreign</span>
            </button>
          </div>

          {/* Open Account CTA */}
          <button
            onClick={() => { closeDropdown(); onOpenOnboarding(); }}
            className="btn-apple-primary"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap'
            }}
          >
            <UserPlus size={15} />
            <span>Open Account</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-hairline)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderTop: '1px solid var(--border-hairline)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === 'markets' ? null : 'markets')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}
            >
              <span>Markets</span>
              <ChevronDown size={16} style={{ transform: mobileAccordion === 'markets' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {mobileAccordion === 'markets' && (
              <div style={{ paddingLeft: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.5rem' }}>
                <Link href="/markets" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Live CSE Market Watch
                </Link>
                <Link href="/markets#directory" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Listed Equities Directory
                </Link>
                <a href="https://online.ndbs.lk" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--apple-blue)', fontWeight: 600 }}>
                  • Atrad Online Portal ↗
                </a>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}
            >
              <span>Services</span>
              <ChevronDown size={16} style={{ transform: mobileAccordion === 'services' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {mobileAccordion === 'services' && (
              <div style={{ paddingLeft: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.5rem' }}>
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • All Services Overview
                </Link>
                <Link href="/services#equities" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Domestic Equity Brokerage
                </Link>
                <Link href="/services#debt" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Fixed Income & Debt
                </Link>
                <Link href="/services#foreign-desk" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Foreign & Expat Desk (IIA)
                </Link>
              </div>
            )}
          </div>

          <Link href="/research" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Research Library
          </Link>

          <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Downloads & Document Vault
          </Link>

          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === 'about' ? null : 'about')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}
            >
              <span>About Us</span>
              <ChevronDown size={16} style={{ transform: mobileAccordion === 'about' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {mobileAccordion === 'about' && (
              <div style={{ paddingLeft: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '0.5rem' }}>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • About NDB Securities
                </Link>
                <Link href="/about#leadership" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Board of Directors
                </Link>
                <Link href="/about#compliance" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  • Regulatory Compliance
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Contact Advisors
          </Link>

          <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOnboarding(); }}
              className="btn-apple-primary"
              style={{ flex: 1, padding: '0.85rem' }}
            >
              Start e-KYC
            </button>
            <a
              href="https://online.ndbs.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-secondary"
              style={{ padding: '0.85rem 1.25rem' }}
            >
              Atrad Portal
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hide-sm {
            display: none !important;
          }
        }
        .nav-button {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.6rem 0.95rem;
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--text-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .nav-button:hover,
        .nav-button.active {
          color: var(--ndb-crimson);
          background: var(--bg-tertiary);
        }
        .chevron-icon {
          transition: transform 0.2s ease;
        }
        .chevron-icon.rotate {
          transform: rotate(180deg);
        }
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 0.4rem);
          left: 0;
          background: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08);
          padding: 0.65rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 1000;
          animation: dropFade 0.15s ease-out;
        }
        .dropdown-link {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.75rem 0.85rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: background var(--transition-fast);
        }
        .dropdown-link:hover {
          background: var(--bg-secondary);
        }
        .dropdown-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
        }
        .dropdown-icon.red {
          background: var(--ndb-crimson-subtle);
          color: var(--ndb-crimson);
          border: 1px solid rgba(138, 0, 0, 0.12);
        }
        .dropdown-icon.blue {
          background: var(--apple-blue-subtle);
          color: var(--apple-blue);
          border: 1px solid rgba(2, 132, 199, 0.15);
        }
        .dropdown-icon.green {
          background: var(--gain-green-bg);
          color: var(--gain-green);
          border: 1px solid #BBF7D0;
        }
        .dropdown-icon.gold {
          background: rgba(180, 131, 27, 0.08);
          color: var(--ndb-gold);
          border: 1px solid rgba(180, 131, 27, 0.2);
        }
        .dropdown-icon.purple {
          background: #F5F3FF;
          color: #7C3AED;
          border: 1px solid #DDD6FE;
        }
        .dropdown-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }
        .dropdown-subtitle {
          font-size: 0.775rem;
          color: var(--text-tertiary);
          line-height: 1.4;
          margin-top: 0.15rem;
        }
        @keyframes dropFade {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
