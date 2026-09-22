'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import ServicesBento from '@/components/ServicesBento';
import AudiencePerspective from '@/components/AudiencePerspective';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
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
              <Layers size={13} />
              <span>Full Capital Markets Spectrum</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              Financial Services & Investment Solutions
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              From primary debt listings to algorithmic equity execution and global custodian clearance, NDB Securities combines institutional scale with personalized fiduciary advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Bento Grid */}
      <ServicesBento onOpenOnboarding={() => setOnboardingOpen(true)} />

      {/* Audience Perspectives (Local vs Foreign Desks) */}
      <AudiencePerspective
        audience={audience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* Corporate Account Opening Advisory Banner */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div className="bento-card" style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-hairline)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Need a Custom Corporate Advisory Package?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Our institutional desk advises corporate treasuries, private trusts, and high-net-worth family offices on portfolio allocation, liquidity management, and debenture placements.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setOnboardingOpen(true)}
                className="btn-apple-primary"
                style={{ padding: '0.8rem 1.8rem' }}
              >
                <span>Open an Account</span>
                <ArrowRight size={16} />
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
