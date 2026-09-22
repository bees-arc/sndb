'use client';

import React from 'react';
import { Globe, User, Building, Landmark, CheckCircle, FileText, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface AudiencePerspectiveProps {
  audience: 'local' | 'foreign';
  onOpenOnboarding: () => void;
}

export default function AudiencePerspective({ audience, onOpenOnboarding }: AudiencePerspectiveProps) {
  const isForeign = audience === 'foreign';

  return (
    <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge accent">
            {isForeign ? <Globe size={14} /> : <Landmark size={14} />}
            <span>{isForeign ? 'International & Expatriate Desk' : 'Domestic Investor Gateway'}</span>
          </div>
          <h2>
            {isForeign 
              ? 'Effortless Investment from Anywhere in the World' 
              : 'Empowering Sri Lankan Investors with Institutional Tools'}
          </h2>
          <p>
            {isForeign
              ? 'Complete facilitation for global funds, corporate entities, and Sri Lankan expatriates with dedicated custodial clearance and foreign currency repatriation.'
              : 'Open your CDS account in minutes. Benefit from direct market execution, personalized wealth advisors, and research-backed portfolio strategies.'}
          </p>
        </div>

        {/* Bento Grid layout adapting to audience */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1140px',
          margin: '0 auto'
        }}>
          {/* Card 1: Individual Investors */}
          <div className="bento-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--ndb-crimson-subtle)',
                color: 'var(--ndb-crimson)',
                border: '1px solid rgba(138, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {isForeign ? 'Foreign & Expat Individuals' : 'Sri Lankan Individual Accounts'}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                  {isForeign ? 'Non-Resident CDS 2(A) Flow' : 'CDS 1 Personal / Joint Accounts'}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {isForeign
                ? 'Invest through an Inward Investment Account (IIA). Enjoy 100% tax-exempt capital gains on listed shares with smooth dividend remittance directly to your home country.'
                : 'Direct online account registration with your National Identity Card (NIC). Gain immediate direct access to CSE equities, debentures, and Unit Trusts.'}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Inward Investment Account (IIA) integration' : 'Instant paperless e-KYC with NIC / Passport'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Zero capital gains tax on CSE shares' : 'Dedicated Personal Investment Advisor assigned'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Repatriable in USD, GBP, EUR, AUD, AED' : 'Zero account maintenance fee on CDS holdings'}</span>
              </li>
            </ul>

            <button
              onClick={onOpenOnboarding}
              className="btn-apple-primary"
              style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem' }}
            >
              <span>{isForeign ? 'Start International Application' : 'Open Individual Account'}</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 2: Corporate & Institutional */}
          <div className="bento-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--apple-blue-subtle)',
                color: 'var(--apple-blue)',
                border: '1px solid rgba(2, 132, 199, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Building size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {isForeign ? 'Foreign Institutional Funds' : 'Local Corporate & Treasuries'}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                  {isForeign ? 'Offshore Entities & Sovereign Funds' : 'Private & Public Limited Companies'}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {isForeign
                ? 'Comprehensive institutional desk facilitating block trades, private placements, algorithmic order execution, and settlement through international custodian networks.'
                : 'Tailored treasury management for Sri Lankan enterprises looking to optimize surplus reserves through corporate debt, high-yield debentures, and liquid equities.'}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Custodian Bank clearing with HSBC, StanChart, Citi' : 'Board Resolution & Corporate KYC fast-track'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Tailored research briefings for asset managers' : 'Institutional volume fee discounts available'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Direct access to Head of Research & Executive sales' : 'NDB Capital investment banking syndication access'}</span>
              </li>
            </ul>

            <button
              onClick={onOpenOnboarding}
              className="btn-apple-secondary"
              style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem' }}
            >
              <span>{isForeign ? 'Corporate Institutional Inquiry' : 'Corporate Account Setup'}</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 3: Custody & Clearing / Banking Synergy */}
          <div className="bento-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--gain-green-bg)',
                color: 'var(--gain-green)',
                border: '1px solid #BBF7D0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Landmark size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {isForeign ? 'Custodian Banking Protocol' : 'NDB Bank Banking Synergy'}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                  {isForeign ? 'Global Settlement Architecture' : 'Unified Wealth & Brokerage Ecosystem'}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {isForeign
                ? 'NDB Securities interfaces seamlessly with licensed custodian banks in Sri Lanka. Clients maintain full legal and beneficial custody while we execute secondary market orders.'
                : 'Connect your NDB Bank savings or current account for instant trade margin settlements, automated dividend transfers, and single-view consolidated wealth e-statements.'}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Standard Chartered Bank Sri Lanka' : 'Instant fund transfers with NDB NEOS App'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'HSBC Global Custody Network' : 'Margin trading facilities up to statutory limits'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--gain-green)', flexShrink: 0 }} />
                <span>{isForeign ? 'Citibank N.A. & Deutsche Bank AG' : 'Free consolidated monthly e-statements'}</span>
              </li>
            </ul>

            <a
              href="#contacts"
              className="btn-apple-secondary"
              style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem', textAlign: 'center' }}
            >
              <span>Speak to Custody Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
