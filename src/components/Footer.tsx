'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      fontSize: '0.875rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        {/* Top 4-Column Directory */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Column 1: Brand & Parentage */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/ndb-securities-logo.png"
                alt="NDB Securities"
                style={{
                  height: '36px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </div>
            <p style={{ fontSize: '0.825rem', lineHeight: 1.6, color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
              A pioneer stockbroking firm licensed by the Securities and Exchange Commission of Sri Lanka (SEC) and a full trading member of the Colombo Stock Exchange (CSE).
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Level 2, NDB Capital Building, No: 135, Bauddhaloka Mawatha, Colombo 4, Sri Lanka.
            </div>
          </div>

          {/* Column 2: Products & Execution */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Services & Markets
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/services#equities" style={{ color: 'var(--text-secondary)' }}>Equity Brokerage & DMA</Link></li>
              <li><Link href="/services#debt" style={{ color: 'var(--text-secondary)' }}>Listed Corporate Debt</Link></li>
              <li><Link href="/services" style={{ color: 'var(--text-secondary)' }}>NDB Wealth Mutual Funds</Link></li>
              <li><Link href="/services#foreign-desk" style={{ color: 'var(--text-secondary)' }}>Global Custodian Banking</Link></li>
              <li><Link href="/markets" style={{ color: 'var(--text-secondary)' }}>Live CSE Market Intelligence</Link></li>
              <li>
                <a
                  href="https://online.ndbs.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: 'var(--apple-blue)', fontWeight: 600 }}
                >
                  Atrad Online Trading Portal <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Intelligence & Downloads */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Research & Compliance
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/research" style={{ color: 'var(--text-secondary)' }}>Institutional Research Library</Link></li>
              <li><Link href="/markets#directory" style={{ color: 'var(--text-secondary)' }}>CSE Sector Valuations Directory</Link></li>
              <li><Link href="/downloads" style={{ color: 'var(--text-secondary)' }}>CDS 1 & 2 Application Forms</Link></li>
              <li><Link href="/downloads" style={{ color: 'var(--text-secondary)' }}>AML & Counter-Terrorism Policy</Link></li>
              <li><Link href="/about#compliance" style={{ color: 'var(--text-secondary)' }}>SEC Regulatory Disclosures</Link></li>
            </ul>
          </div>

          {/* Column 4: Institutional Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Group & Regulators
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><a href="https://www.ndbbank.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>NDB Bank PLC</a></li>
              <li><a href="https://www.cse.lk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>Colombo Stock Exchange (CSE)</a></li>
              <li><a href="https://www.sec.gov.lk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>SEC Sri Lanka</a></li>
              <li><a href="https://www.cbsl.gov.lk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>Central Bank of Sri Lanka</a></li>
              <li><Link href="/contact" style={{ color: 'var(--ndb-crimson)', fontWeight: 600 }}>Branch & Advisor Directory</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Statutory Fine Print */}
        <div style={{
          paddingTop: '1.75rem',
          borderTop: '1px solid var(--border-hairline)',
          fontSize: '0.775rem',
          color: 'var(--text-tertiary)',
          lineHeight: 1.6,
          marginBottom: '1.75rem'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Regulatory Disclaimer:</strong> NDB Securities (Private) Limited is an authorized stockbroker firm licensed by the Securities and Exchange Commission of Sri Lanka (SEC) and a full trading member of the Colombo Stock Exchange. Investments in capital markets, equities, and fixed-income securities are subject to market risks. Investors are advised to read all relevant disclosure documents, risk prospectuses, and research ratings before committing funds.
          </p>
          <p>
            Past performance of equities or mutual funds is not necessarily indicative of future performance. Nothing contained on this portal constitutes an offer or solicitation of investment advice in any jurisdiction where such offer or solicitation is unlawful.
          </p>
        </div>

        {/* Bottom Line: Copyright & Status */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-tertiary)'
        }}>
          <div>
            © {new Date().getFullYear()} NDB Securities (Pvt) Ltd. All Rights Reserved. Member of NDB Group.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={14} style={{ color: 'var(--gain-green)' }} /> ISO & SEC Compliant
            </span>
            <Link href="/downloads">Privacy Policy</Link>
            <Link href="/downloads">Terms of Use</Link>
            <Link href="/about#compliance">Security Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
