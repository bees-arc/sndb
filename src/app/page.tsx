'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import {
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BookOpen,
  Layers,
  Globe,
  Briefcase,
  PieChart,
  PhoneCall,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { SAMPLE_CSE_STOCKS } from '@/data/ndbsData';

export default function Home() {
  const [audience, setAudience] = useState<'local' | 'foreign'>('local');
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  const topGainers = [...SAMPLE_CSE_STOCKS].sort((a, b) => b.pctChange - a.pctChange).slice(0, 3);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* 1. Spacious Header with 4 Core Main Topics & Dropdowns */}
      <Header
        audience={audience}
        onAudienceChange={setAudience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 2. Well-Spaced Live Market Feed Ticker */}
      <MarketTicker />

      {/* 3. Executive Hero Section */}
      <Hero
        audience={audience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 4. Live CSE Market Snapshot (Clean & Spacious) */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="apple-badge accent" style={{ marginBottom: '0.5rem' }}>
                <Activity size={13} />
                <span>Market Intelligence</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800 }}>Colombo Stock Exchange Live Pulse</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Real-time price discovery and volume leaders powered by NDB Securities data feeds.
              </p>
            </div>

            <Link
              href="/markets"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: 'var(--ndb-crimson)'
              }}
            >
              <span>Explore Full Live Markets & Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 3 Focused Market Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Card 1: Benchmark Overview */}
            <div className="bento-card">
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                Benchmark Indices
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-hairline)' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>ASPI Index</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>All Share Price Index</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontFamily: 'var(--font-mono)' }}>11,842.30</div>
                    <span className="apple-badge success" style={{ fontSize: '0.725rem' }}>+48.10 (+0.41%)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>S&P SL20 Index</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Top 20 Blue Chip Equities</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontFamily: 'var(--font-mono)' }}>3,485.60</div>
                    <span className="apple-badge success" style={{ fontSize: '0.725rem' }}>+19.20 (+0.55%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Top Daily Movers */}
            <div className="bento-card">
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
                Top Daily Gainers
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {topGainers.map(stock => (
                  <div key={stock.symbol} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-hairline)' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{stock.symbol.split('.')[0]}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{stock.name}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Rs. {stock.price.toFixed(2)}</div>
                      <span className="apple-badge success" style={{ fontSize: '0.725rem' }}>+{stock.pctChange}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Direct DMA Access */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="apple-badge blue" style={{ marginBottom: '0.85rem' }}>
                  Atrad Online Trading
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Direct Market Access (DMA) Terminal
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Trade shares in real-time with direct integration to the Colombo Stock Exchange matching engine.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://online.ndbs.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apple-primary"
                  style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.85rem', textAlign: 'center' }}
                >
                  <span>Launch Atrad</span>
                  <ArrowUpRight size={14} />
                </a>
                <Link
                  href="/markets"
                  className="btn-apple-secondary"
                  style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                >
                  Live Feed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Services Overview (3 Focused Pillars) */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="apple-badge" style={{ marginBottom: '0.5rem' }}>
                <Layers size={13} />
                <span>Our Capabilities</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800 }}>Institutional & Private Client Services</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Comprehensive financial solutions backed by NDB Capital Holdings balance sheet.
              </p>
            </div>

            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: 'var(--ndb-crimson)'
              }}
            >
              <span>Explore All Financial Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Pillar 1 */}
            <div className="bento-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--ndb-crimson-subtle)',
                color: 'var(--ndb-crimson)',
                border: '1px solid rgba(138, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Equity Brokerage & DMA
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Direct execution of equities on the CSE with dedicated personal investment advisors and institutional block trading capabilities.
              </p>
              <Link href="/services#equities" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--apple-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bento-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(180, 131, 27, 0.08)',
                color: 'var(--ndb-gold)',
                border: '1px solid rgba(180, 131, 27, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <PieChart size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Corporate Debt & Debentures
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                High-yield fixed income structures, senior/subordinated listed debentures, and primary corporate issuance syndication.
              </p>
              <Link href="/services#debt" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--apple-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bento-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--apple-blue-subtle)',
                color: 'var(--apple-blue)',
                border: '1px solid rgba(2, 132, 199, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Globe size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Foreign & Expat Desk (IIA)
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Cross-border trading facilitation with Inward Investment Accounts, tax exemptions, and custodian bank settlements (Standard Chartered, HSBC, Citi).
              </p>
              <Link href="/services#foreign-desk" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--apple-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Institutional Research Highlights */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="apple-badge blue" style={{ marginBottom: '0.5rem' }}>
                <BookOpen size={13} />
                <span>NDB Intelligence Lab</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800 }}>Featured Macro & Sector Research</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Fundamental valuation digests and equity reviews published by our award-winning research desk.
              </p>
            </div>

            <Link
              href="/research"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: 'var(--ndb-crimson)'
              }}
            >
              <span>View All Reports & Stock Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="apple-badge accent" style={{ fontSize: '0.75rem' }}>Sector Outlook</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>September 2026</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Banking & Financial Sector Review 2026
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Analysis of monetary policy easing, NPL trajectory, credit growth revival, and valuation multipliers across licensed commercial banks in Sri Lanka.
                </p>
              </div>
              <Link href="/research" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ndb-crimson)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Read Executive Summary</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="apple-badge accent" style={{ fontSize: '0.75rem' }}>Market Digest</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>September 2026</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  CSE Market Valuation & PE Multiplier Digest
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Comprehensive price-to-earnings mapping, dividend yield comparisons, and institutional foreign flow analysis across all 20 CSE sectors.
                </p>
              </div>
              <Link href="/research" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ndb-crimson)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Read Executive Summary</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clear Fast-Track Call to Action */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ padding: '0 2rem' }}>
          <div className="bento-card" style={{
            padding: '3rem',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="apple-badge success" style={{ marginBottom: '0.75rem' }}>
                <ShieldCheck size={13} />
                <span>100% Digital e-KYC Ready</span>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Begin Investing in Sri Lankan Equities Today
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Open your Central Depository Systems (CDS) account online in minutes with your National Identity Card or Passport. Zero maintenance fees, dedicated personal advisor assigned.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setOnboardingOpen(true)}
                className="btn-apple-primary"
                style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
              >
                <span>Open Digital Account</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/contact"
                className="btn-apple-secondary"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
              >
                <span>Speak to an Advisor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Minimalist Financial Footer */}
      <Footer />

      {/* 9. Paperless Digital e-KYC Modal Wizard */}
      <DigitalOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        defaultAudience={audience}
      />
    </main>
  );
}
