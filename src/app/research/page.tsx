'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import ResearchExplorer from '@/components/ResearchExplorer';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import { BookOpen, Award, FileText, Download } from 'lucide-react';

export default function ResearchPage() {
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
            <div className="apple-badge blue" style={{ marginBottom: '1rem' }}>
              <BookOpen size={13} />
              <span>Independent Macro & Equity Insights</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              Institutional Research Lab
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Rigorous, fundamental equity analysis and macro economic forecasting designed for institutional asset managers, corporate treasuries, and high-conviction retail investors.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Research Explorer & Stock Directory */}
      <ResearchExplorer />

      <Footer />

      <DigitalOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        defaultAudience={audience}
      />
    </main>
  );
}
