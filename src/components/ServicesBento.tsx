'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, PieChart, Building2, Globe, FileText, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { CORE_SERVICES } from '@/data/ndbsData';

interface ServicesBentoProps {
  onOpenOnboarding: () => void;
}

export default function ServicesBento({ onOpenOnboarding }: ServicesBentoProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp size={24} style={{ color: 'var(--ndb-crimson)' }} />;
      case 'ShieldCheck': return <ShieldCheck size={24} style={{ color: 'var(--gain-green)' }} />;
      case 'PieChart': return <PieChart size={24} style={{ color: 'var(--apple-blue)' }} />;
      case 'Building2': return <Building2 size={24} style={{ color: 'var(--ndb-gold)' }} />;
      case 'Globe': return <Globe size={24} style={{ color: '#5856D6' }} />;
      default: return <FileText size={24} style={{ color: 'var(--text-secondary)' }} />;
    }
  };

  return (
    <section id="services" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge">
            <Layers size={14} />
            <span>Comprehensive Financial Architecture</span>
          </div>
          <h2>What We Offer</h2>
          <p>
            From primary market listings to precision secondary execution, NDB Securities delivers institutional breadth with bespoke private client care.
          </p>
        </div>

        {/* Apple Bento Grid layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {CORE_SERVICES.map((service, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={service.id}
                className="bento-card"
                style={{
                  gridColumn: isFeatured ? 'span 1' : 'span 1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-hairline)'
                    }}>
                      {getIcon(service.iconName)}
                    </div>
                    <span className="apple-badge" style={{ fontSize: '0.75rem' }}>
                      Pillar {idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {service.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ndb-crimson)', marginBottom: '0.85rem' }}>
                    {service.tagline}
                  </div>
                  <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.775rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>
                      Key Capabilities
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {service.highlights.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={14} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <button
                    onClick={onOpenOnboarding}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: 'var(--apple-blue)',
                      padding: 0
                    }}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
