'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Hero from '@/components/Hero';
import MarketIntelligence from '@/components/MarketIntelligence';
import AudiencePerspective from '@/components/AudiencePerspective';
import ServicesBento from '@/components/ServicesBento';
import ResearchExplorer from '@/components/ResearchExplorer';
import DocumentVault from '@/components/DocumentVault';
import LeadershipSection from '@/components/LeadershipSection';
import ContactConcierge from '@/components/ContactConcierge';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';

export default function Home() {
  const [audience, setAudience] = useState<'local' | 'foreign'>('local');
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* 1. Frosted Glass Apple Header with Segmented Audience Switcher */}
      <Header
        audience={audience}
        onAudienceChange={setAudience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 2. Live CSE Market Feed Ticker */}
      <MarketTicker />

      {/* 3. Keynote Hero Section */}
      <Hero
        audience={audience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 4. Live Market Intelligence & Top Movers */}
      <MarketIntelligence />

      {/* 5. Adaptive Audience Gateway (Local vs Foreign Investors) */}
      <AudiencePerspective
        audience={audience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 6. Comprehensive Services & Products Bento Grid */}
      <ServicesBento
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 7. Institutional Research & Stock Directory Explorer */}
      <ResearchExplorer />

      {/* 8. Official Statutory Document Vault (CDS/KYC Forms) */}
      <DocumentVault />

      {/* 9. Leadership & Governance */}
      <LeadershipSection />

      {/* 10. Direct Advisor Concierge & Contact Center */}
      <ContactConcierge />

      {/* 11. Apple Minimalist Financial Footer */}
      <Footer />

      {/* 12. Paperless Digital e-KYC Modal Wizard */}
      <DigitalOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        defaultAudience={audience}
      />
    </main>
  );
}
