'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Award, Layers } from 'lucide-react';

interface HeroProps {
  audience: 'local' | 'foreign';
  onOpenOnboarding: () => void;
}

export default function Hero({ audience, onOpenOnboarding }: HeroProps) {
  const isForeign = audience === 'foreign';

  return (
    <section style={{
      position: 'relative',
      paddingTop: '4rem',
      paddingBottom: '4.5rem',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      borderBottom: '1px solid var(--border-hairline)'
    }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Eyebrow Badge (4px radius) */}
        <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
          <div className="apple-badge accent" style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}>
            <Sparkles size={13} />
            <span>
              {isForeign 
                ? 'Global Investor Gateway • Tax-Free Equities in Sri Lanka' 
                : 'Premier Stockbroking • A Subsidiary of NDB Bank'}
            </span>
          </div>
        </div>

        {/* Display Headline */}
        <h1 style={{
          maxWidth: '920px',
          margin: '0 auto 1.25rem auto',
          fontWeight: 800,
          letterSpacing: '-0.035em'
        }}>
          {isForeign ? (
            <>
              Invest in Sri Lanka’s <span style={{
                background: 'linear-gradient(135deg, #8A0000 20%, #B91C1C 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Emerging Growth.</span>
            </>
          ) : (
            <>
              Institutional Power. <br />
              <span style={{
                background: 'linear-gradient(135deg, #8A0000 20%, #B91C1C 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Personalized Wealth Growth.</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p style={{
          maxWidth: '680px',
          margin: '0 auto 2.25rem auto',
          fontSize: '1.125rem',
          lineHeight: 1.6,
          color: 'var(--text-secondary)'
        }}>
          {isForeign
            ? 'Seamless cross-border trading on the Colombo Stock Exchange (CSE) with global custodian settlement, Inward Investment Accounts (IIA), and 100% capital repatriation.'
            : 'Access Sri Lanka’s frontier equity and fixed income markets with premier institutional research, dedicated personal investment advisors, and direct digital execution.'}
        </p>

        {/* Action Buttons (6px radius) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.85rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          <button
            onClick={onOpenOnboarding}
            className="btn-apple-primary"
            style={{ fontSize: '0.95rem', padding: '0.8rem 1.8rem' }}
          >
            <span>{isForeign ? 'Open International Account' : 'Open CDS Account Online'}</span>
            <ArrowRight size={16} />
          </button>

          <a
            href="#research"
            className="btn-apple-secondary"
            style={{ fontSize: '0.95rem', padding: '0.8rem 1.6rem' }}
          >
            <span>Browse Research Library</span>
          </a>
        </div>

        {/* 4 Clean Institutional Trust / Metric Badges (8px radius, clean 1px border) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          maxWidth: '1120px',
          margin: '0 auto'
        }}>
          <div className="bento-card" style={{ padding: '1.35rem', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--ndb-crimson-subtle)',
              color: 'var(--ndb-crimson)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem',
              border: '1px solid rgba(138, 0, 0, 0.12)'
            }}>
              <Award size={20} />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Over 30 Years
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Pioneering Sri Lankan capital markets since 1992 as a CSE founder member.
            </div>
          </div>

          <div className="bento-card" style={{ padding: '1.35rem', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--apple-blue-subtle)',
              color: 'var(--apple-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem',
              border: '1px solid rgba(2, 132, 199, 0.15)'
            }}>
              <TrendingUp size={20} />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              100% Digital
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Paperless e-KYC onboarding & instant trade confirmations with zero friction.
            </div>
          </div>

          <div className="bento-card" style={{ padding: '1.35rem', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--gain-green-bg)',
              color: 'var(--gain-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem',
              border: '1px solid #BBF7D0'
            }}>
              <ShieldCheck size={20} />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              SEC Licensed
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Regulated by the Securities & Exchange Commission with highest fiduciary standards.
            </div>
          </div>

          <div className="bento-card" style={{ padding: '1.35rem', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(180, 131, 27, 0.08)',
              color: 'var(--ndb-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.85rem',
              border: '1px solid rgba(180, 131, 27, 0.2)'
            }}>
              <Layers size={20} />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              NDB Group
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Backed by NDB Capital Holdings and National Development Bank PLC balance sheet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
