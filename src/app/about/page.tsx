'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import LeadershipSection from '@/components/LeadershipSection';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import { Building, Award, Shield, CheckCircle2, Layers, Landmark } from 'lucide-react';

export default function AboutPage() {
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
        paddingBottom: '3.5rem',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        borderBottom: '1px solid var(--border-hairline)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="apple-badge accent" style={{ marginBottom: '1rem' }}>
              <Building size={13} />
              <span>Established 1992 • Member of NDB Group</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              About NDB Securities
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Three decades of pioneering leadership in Sri Lanka’s capital markets. Backed by the financial strength of National Development Bank PLC and NDB Capital Holdings.
            </p>
          </div>

          {/* Corporate Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginTop: '2.5rem'
          }}>
            <div className="bento-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--ndb-crimson-subtle)',
                color: 'var(--ndb-crimson)',
                border: '1px solid rgba(138, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>CSE Founder Member</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Founded in 1992 as one of the pioneer stockbroking houses of the Colombo Stock Exchange, facilitating generational wealth accumulation.
              </p>
            </div>

            <div className="bento-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--apple-blue-subtle)',
                color: 'var(--apple-blue)',
                border: '1px solid rgba(2, 132, 199, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Landmark size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>NDB Group Synergy</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Full-service integration with NDB Bank PLC, NDB Wealth Management, and NDB Investment Bank for end-to-end financial solutions.
              </p>
            </div>

            <div className="bento-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--gain-green-bg)',
                color: 'var(--gain-green)',
                border: '1px solid #BBF7D0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Shield size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>SEC Regulated</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Licensed by the Securities and Exchange Commission of Sri Lanka (SEC) with institutional-grade risk management and KYC protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Board of Directors */}
      <div id="leadership">
        <LeadershipSection />
      </div>

      {/* Compliance & Governance Details */}
      <section id="compliance" style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div className="bento-card" style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem' }}>
            <div className="apple-badge" style={{ marginBottom: '1rem' }}>
              <Shield size={13} />
              <span>Statutory Compliance & Fiduciary Oversight</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
              Corporate Governance & Regulatory Standards
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              NDB Securities (Private) Limited operates under the rigorous supervisory framework of the Securities and Exchange Commission of Sri Lanka Act No. 19 of 2021, the Colombo Stock Exchange Stockbroker Rules, and the Financial Intelligence Unit (FIU) under the Financial Transactions Reporting Act No. 06 of 2006.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Audited annually by Ernst & Young Chartered Accountants</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Capital adequacy ratios maintained substantially above statutory minimums</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Strict segregation of client funds and direct CDS custodian settlement</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Zero-tolerance AML, CFT, and anti-market manipulation protocols</span>
              </div>
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
