'use client';

import React, { useState } from 'react';
import { Globe, ArrowUpRight, Menu, X, Shield, UserPlus, PhoneCall, Sparkles } from 'lucide-react';

interface HeaderProps {
  audience: 'local' | 'foreign';
  onAudienceChange: (audience: 'local' | 'foreign') => void;
  onOpenOnboarding: () => void;
}

export default function Header({ audience, onAudienceChange, onOpenOnboarding }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      borderBottom: '1px solid var(--border-hairline)'
    }}>
      {/* Top Notification / Regulatory Ribbon */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-hairline)',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        padding: '0.4rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: 'var(--ndb-crimson)' }}>
            <Shield size={13} /> SEC Licensed
          </span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Full Trading Member Colombo Stock Exchange (CSE)</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>A Subsidiary of NDB Capital Holdings & NDB Bank</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href="#contacts" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
            <PhoneCall size={12} /> +94 (11) 2 131 000
          </a>
          <a href="https://online.ndbs.lk" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--apple-blue)', fontWeight: 600 }}>
            Atrad Online <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Main Apple Navbar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.25rem'
      }}>
        {/* Brand Logo & Descriptor */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, #8A0000 0%, #4A0000 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '-0.03em',
            boxShadow: '0 4px 12px rgba(138, 0, 0, 0.25)'
          }}>
            NDB
          </div>
          <div>
            <div style={{
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              lineHeight: 1.1
            }}>
              NDB SECURITIES
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              EST. 1992 • WEALTH & CAPITAL MARKETS
            </div>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', listStyle: 'none' }}>
            <li><a href="#market" className="nav-link">Live Markets</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#research" className="nav-link">Research</a></li>
            <li><a href="#onboarding" className="nav-link">Open Account</a></li>
            <li><a href="#documents" className="nav-link">Downloads</a></li>
            <li><a href="#leadership" className="nav-link">Leadership</a></li>
            <li><a href="#contacts" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Right Controls: Audience Switcher & Primary Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* iOS Segmented Audience Control */}
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
            onClick={onOpenOnboarding}
            className="btn-apple-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            <UserPlus size={16} />
            <span>Open Account</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-tertiary)',
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
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-hairline)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <a href="#market" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Live Markets</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Services & Products</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Research Library</a>
          <a href="#onboarding" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Digital Account Opening</a>
          <a href="#documents" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Forms & Downloads</a>
          <a href="#leadership" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Leadership & Governance</a>
          <a href="#contacts" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 600 }}>Contact Advisory Team</a>
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOnboarding(); }}
              className="btn-apple-primary"
              style={{ flex: 1, padding: '0.8rem' }}
            >
              Start e-KYC
            </button>
            <a
              href="https://online.ndbs.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-secondary"
              style={{ padding: '0.8rem 1.2rem' }}
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
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
      `}</style>
    </header>
  );
}
