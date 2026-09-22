'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import ContactConcierge from '@/components/ContactConcierge';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
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
              <Phone size={13} />
              <span>Direct Advisory Hotline & Extension Directory</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              Contact Our Investment Advisory Team
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Connect directly with our licensed equity brokers and portfolio specialists at our Colombo headquarters. We are available throughout market trading hours to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Concierge & Advisor Directory */}
      <ContactConcierge />

      <Footer />

      <DigitalOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        defaultAudience={audience}
      />
    </main>
  );
}
