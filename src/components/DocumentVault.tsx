'use client';

import React, { useState } from 'react';
import { Download, FileText, Filter, Shield, CheckCircle } from 'lucide-react';
import { DOWNLOAD_DOCUMENTS, DownloadDoc } from '@/data/ndbsData';

export default function DocumentVault() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'CDS Accounts', 'KYC Documents', 'Agreements', 'Regulatory Policies'];

  const filteredDocs = DOWNLOAD_DOCUMENTS.filter(doc => {
    return activeCategory === 'All' || doc.category === activeCategory;
  });

  return (
    <section id="documents" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge">
            <FileText size={14} />
            <span>Document Vault</span>
          </div>
          <h2>Official Forms & Statutory Documentation</h2>
          <p>
            Download official Central Depository Systems (CDS) schedules, KYC declarations, and brokerage agreements verified by the SEC.
          </p>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`apple-badge ${activeCategory === cat ? 'accent' : ''}`}
              style={{
                cursor: 'pointer',
                fontSize: '0.85rem',
                padding: '0.45rem 1.15rem',
                background: activeCategory === cat ? 'var(--text-primary)' : 'var(--bg-card-solid)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                borderColor: activeCategory === cat ? 'var(--text-primary)' : 'var(--border-hairline)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1180px',
          margin: '0 auto'
        }}>
          {filteredDocs.map(doc => (
            <div
              key={doc.id}
              className="bento-card"
              style={{
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="apple-badge" style={{ fontSize: '0.75rem' }}>
                    {doc.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    {doc.size}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.35, color: 'var(--text-primary)' }}>
                  {doc.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {doc.description}
                </p>
              </div>

              <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-hairline)' }}>
                <a
                  href={doc.path}
                  download={doc.filename}
                  className="btn-apple-secondary"
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Download size={14} />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SEC Notice Banner */}
        <div style={{
          marginTop: '3rem',
          maxWidth: '860px',
          margin: '3rem auto 0 auto',
          padding: '1.25rem 1.75rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-hairline)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem'
        }}>
          <Shield size={20} style={{ color: 'var(--ndb-crimson)', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Regulatory Compliance Notice:</strong> All CDS and KYC documentation comply with the Securities and Exchange Commission of Sri Lanka (SEC) Act No. 19 of 2021 and the Financial Transactions Reporting Act (FTRA) No. 06 of 2006.
          </div>
        </div>
      </div>
    </section>
  );
}
