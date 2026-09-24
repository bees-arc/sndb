'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  Shield,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="ndb-footer">
      <div className="container">
        {/* Main 4-Column Directory (Enriched with all sections from ndbs.lk) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem'
          }}
        >
          {/* Column 1: Information & Useful Links (Exact from ndbs.lk) */}
          <div>
            <h5>{t('usefulLinks')}</h5>
            <ul>
              <li>
                <a href="https://www.cse.lk" target="_blank" rel="noopener noreferrer">
                  Colombo Stock Exchange (CSE)
                </a>
              </li>
              <li>
                <a href="https://www.sec.gov.lk" target="_blank" rel="noopener noreferrer">
                  Securities &amp; Exchange Commission
                </a>
              </li>
              <li>
                <a href="https://www.cds.lk" target="_blank" rel="noopener noreferrer">
                  Central Depository Systems (CDS)
                </a>
              </li>
              <li>
                <a href="https://www.cbsl.gov.lk" target="_blank" rel="noopener noreferrer">
                  Central Bank of Sri Lanka (CBSL)
                </a>
              </li>
              <li>
                <a href="https://www.ndbbank.com" target="_blank" rel="noopener noreferrer">
                  NDB Bank PLC
                </a>
              </li>
              <li>
                <Link href="/downloads">Cautionary Notice by SEC</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links & Upcoming Listings */}
          <div>
            <h5>{t('quickLinks')}</h5>
            <ul>
              <li>
                <Link href="/markets#listings">Upcoming Listings &amp; IPOs</Link>
              </li>
              <li>
                <Link href="/services#debt">Listed Corporate Debentures</Link>
              </li>
              <li>
                <Link href="/contact#branches">ATM &amp; Branch Locator</Link>
              </li>
              <li>
                <Link href="/contact">Contact &amp; Hotline Support</Link>
              </li>
              <li>
                <Link href="/contact#faq">Frequently Asked Questions (FAQ)</Link>
              </li>
              <li>
                <a href="https://online.ndbs.lk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ndb-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>Atrad Online DMA Portal</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Investment Resources & Governance */}
          <div>
            <h5>{t('investmentResources')}</h5>
            <ul>
              <li>
                <Link href="/markets#tracker">Daily Stock Tracker</Link>
              </li>
              <li>
                <Link href="/research">Institutional Research Reports</Link>
              </li>
              <li>
                <Link href="/downloads">Anti-Money Laundering (AML) Policy</Link>
              </li>
              <li>
                <Link href="/services#tariffs">Brokerage Tariffs &amp; SEC Levies</Link>
              </li>
              <li>
                <Link href="/about#leadership">Board of Directors &amp; Leadership</Link>
              </li>
              <li>
                <Link href="/about#careers">Careers at NDB Securities</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate Rating & Contact */}
          <div>
            {/* White Monochrome NDB Brand Mark */}
            <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <svg width="34" height="34" viewBox="0 0 180 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.2 2.2V13.3L20.1 2.2H1.2Z" fill="#FFFFFF" />
                <path d="M4.8 27H25.6V6.2L4.8 27Z" fill="#FFFFFF" />
                <path d="M1.2 16.3V27.1L27.6 0.7L1.2 16.3Z" fill="#cf152d" />
                <path d="M46.2 2.2V19.5L36.4 2.2H31V27H35.8V9.4L45.8 27.1H50.9V2.2H46.2Z" fill="#cf152d" />
                <path d="M66 2.2H55.3V27H65.9C74 27 76 19.3 76 14C76 8.7 74.3 2.2 66.1 2.2H66ZM65.2 22.7H60.2V6.5H65.1C67.3 6.5 70.7 7.1 70.7 14.4C70.7 21.7 69.3 22.7 65.2 22.7Z" fill="#cf152d" />
                <path d="M95.6 13.6C96.6 13.1 98.6 12.1 98.6 8.5C98.6 4.9 97.1 2.2 91.1 2.2H79.2V27H89.6C94.6 27 95.9 26.1 97.3 24.7C98.6 23.4 99.4 21.6 99.4 19.6C99.4 17.6 98.6 14.8 95.6 13.6ZM84 6.5H89.9C92.2 6.5 93.7 7.1 93.7 9.2C93.7 11.3 92.1 11.9 90.1 11.9H84.1V6.5H84ZM90.2 22.7H84V16.1H90.4C92.3 16.1 94.1 16.9 94.1 19.1C94.1 21.3 92.7 22.7 90.2 22.7Z" fill="#cf152d" />
                <path d="M179 33.7H1.2V51.6H179V33.7Z" fill="#cf152d" />
              </svg>
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                  NDB <span style={{ color: 'var(--ndb-red)' }}>SECURITIES</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#9CA3AF', letterSpacing: '0.05em' }}>
                  A SUBSIDIARY OF NDB BANK PLC
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: '#9CA3AF', marginBottom: '1rem', textAlign: 'justify' }}>
              <strong>A- (lka) Fitch Rating</strong> — National Development Bank PLC (PQ. 27) is a licensed Commercial Bank supervised by the Central Bank of Sri Lanka. NDB Securities (Pvt) Ltd is a licensed Stockbroker supervised by the Securities and Exchange Commission of Sri Lanka (SEC) and full trading member of the CSE.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.825rem' }}>
              <a href="mailto:contact@ndbs.lk" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB' }}>
                <Mail size={13} style={{ color: 'var(--ndb-red)' }} />
                <span>Email : contact@ndbs.lk</span>
              </a>
              <a href="tel:+94112131000" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB' }}>
                <Phone size={13} style={{ color: 'var(--ndb-red)' }} />
                <span>Hotline : +94 11 2 131 000</span>
              </a>
            </div>
          </div>
        </div>

        {/* Download on Mobile Row (Exact NDB Bank Style) */}
        <div style={{ borderTop: '1px solid #1F2937', paddingTop: '2.5rem', paddingBottom: '1rem' }}>
          <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Download Atrad &amp; NEOS on mobile
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.ndb.mobilebanking&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: '#1F2937',
                border: '1px solid #374151',
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-sm)',
                color: '#FFFFFF'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8L14.7 12L3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#2196F3" />
                <path d="M18.3 8.6L14.7 12L3.6 1.8C4.1 1.3 4.9 1.1 5.8 1.6L18.3 8.6Z" fill="#4CAF50" />
                <path d="M18.3 15.4L5.8 22.4C4.9 22.9 4.1 22.7 3.6 22.2L14.7 12L18.3 15.4Z" fill="#F44336" />
                <path d="M21.9 10.6C22.7 11.1 22.7 12.9 21.9 13.4L18.3 15.4L14.7 12L18.3 8.6L21.9 10.6Z" fill="#FFC107" />
              </svg>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#9CA3AF' }}>GET IT ON</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Google Play</div>
              </div>
            </a>

            <a
              href="https://apps.apple.com/lk/app/ndb-neos/id1467722307"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: '#1F2937',
                border: '1px solid #374151',
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-sm)',
                color: '#FFFFFF'
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.5 2.64-1.24" />
              </svg>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#9CA3AF' }}>Download on the</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-Footer (Exact NDB Bank Style) */}
      <div className="ndb-subfooter">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            &copy; 2025 - 2026 National Development Bank PLC &amp; NDB Securities (Pvt) Limited. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ color: '#9CA3AF' }}>Follow us</span>
            <a href="https://www.facebook.com/ndbbankplc" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ color: '#D1D5DB' }} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://twitter.com/ndbbank" target="_blank" rel="noopener noreferrer" title="X (Twitter)" style={{ color: '#D1D5DB' }} aria-label="X Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="http://www.youtube.com/user/NDBBankSL/" target="_blank" rel="noopener noreferrer" title="YouTube" style={{ color: '#D1D5DB' }} aria-label="YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/ndbbank/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#D1D5DB' }} aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ndbbank/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: '#D1D5DB' }} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
