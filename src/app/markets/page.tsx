'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import MarketIntelligence from '@/components/MarketIntelligence';
import ResearchExplorer from '@/components/ResearchExplorer';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import { TrendingUp, ArrowUpRight, ShieldCheck, Activity, LineChart, ChevronRight } from 'lucide-react';

export default function MarketsPage() {
  const [audience, setAudience] = useState<'local' | 'foreign'>('local');
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Header
        audience={audience}
        onAudienceChange={setAudience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      <MarketTicker />

      {/* Page Header Banner */}
      <section style={{
        paddingTop: '3.5rem',
        paddingBottom: '3rem',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        borderBottom: '1px solid var(--border-hairline)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="apple-badge accent" style={{ marginBottom: '1rem' }}>
              <Activity size={13} />
              <span>Colombo Stock Exchange Live Data</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              Market Watch & Real-Time Intelligence
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Direct market data feeds from the Colombo Stock Exchange (CSE). Track benchmark indices, daily turnover, sector momentum, and top-performing securities.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginTop: '2.5rem'
          }}>
            <div className="bento-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>All Share Price Index (ASPI)</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>11,842.30</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.35rem' }}>
                <span className="apple-badge success">+48.10 (+0.41%)</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Today</span>
              </div>
            </div>

            <div className="bento-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>S&P Sri Lanka 20 (S&P SL20)</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>3,485.60</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.35rem' }}>
                <span className="apple-badge success">+19.20 (+0.55%)</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Today</span>
              </div>
            </div>

            <div className="bento-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Market Turnover</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>Rs. 2.45 Bn</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.35rem' }}>
                <span className="apple-badge blue">Normal Hours</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>09:30 - 14:30 SLT</span>
              </div>
            </div>

            <div className="bento-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Market Capitalization</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>Rs. 4.62 Tn</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.35rem' }}>
                <span className="apple-badge">290 Listed Equities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Market Intelligence Table */}
      <MarketIntelligence />

      {/* Listed Securities Directory & Live Search */}
      <div id="directory">
        <ResearchExplorer />
      </div>

      {/* Atrad Direct Market Access Banner */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div className="bento-card" style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            color: '#FFFFFF',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="apple-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '0.85rem' }}>
                Direct DMA Platform
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Trade Directly via Atrad Online Terminal
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Execute orders in milliseconds on the CSE matching engine. Full Level-2 order book depth, real-time portfolio valuation, and instant trade alerts.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href="https://online.ndbs.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary"
                style={{ background: 'var(--ndb-crimson)', padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
              >
                <span>Launch Atrad DMA</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                onClick={() => setOnboardingOpen(true)}
                className="btn-apple-secondary"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)', padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
              >
                <span>Open CDS Account</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <DigitalOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        defaultAudience={audience}
      />
    </main>
  );
}
