'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import DocumentVault from '@/components/DocumentVault';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import { FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';

export default function DownloadsPage() {
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
              <FileText size={13} />
              <span>SEC Verified Statutory Documentation</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              Forms & Downloads Vault
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Direct access to official Central Depository Systems (CDS) schedules, electronic KYC declaration packages, corporate mandates, and client service agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Document Vault Grid */}
      <DocumentVault />

      {/* Checklist Banner */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div className="bento-card" style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>
              Required Documents for Physical Account Opening
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              If you prefer submitting physical documentation instead of our paperless digital onboarding, please ensure the following certified copies accompany your CDS application:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Certified copy of National Identity Card (NIC) or valid Sri Lankan/Foreign Passport</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Proof of residence (utility bill or bank statement within past 3 months if address differs)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>Bank account confirmation / cancelled cheque leaf for automated dividend mandate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--gain-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>For Foreign Investors: Proof of Inward Investment Account (IIA) from licensed commercial bank</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Want to skip manual paperwork? Complete our 3-step digital onboarding in 3 minutes.
              </span>
              <button
                onClick={() => setOnboardingOpen(true)}
                className="btn-apple-primary"
                style={{ padding: '0.65rem 1.4rem' }}
              >
                Open Digital Account
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
