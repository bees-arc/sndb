'use client';

import React, { useState } from 'react';
import { Search, BookOpen, Download, Filter, FileText, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { CSE_SECTORS, SAMPLE_CSE_STOCKS, StockTicker } from '@/data/ndbsData';

export default function ResearchExplorer() {
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStocks = SAMPLE_CSE_STOCKS.filter(stock => {
    const matchesSector = selectedSector === 'All Sectors' || stock.sector === selectedSector;
    const matchesQuery = stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         stock.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesQuery;
  });

  const sampleReports = [
    {
      title: 'Banking & Financial Sector Review 2026',
      date: 'September 2026',
      type: 'Sector Outlook',
      author: 'Raynal Wickremeratne & Macro Desk',
      summary: 'Analysis of monetary policy easing, NPL trajectory, credit growth revival, and valuation multipliers across licensed commercial banks in Sri Lanka.',
      tags: ['Banking', 'Macro Economy', 'Interest Rates']
    },
    {
      title: 'Colombo Stock Exchange Market Valuation Digest',
      date: 'September 2026',
      type: 'Market Digest',
      author: 'NDBS Research Team',
      summary: 'Comprehensive PE ratio mapping, dividend yield comparisons, and institutional foreign flow analysis across all 20 CSE sectors.',
      tags: ['CSE Equities', 'Valuations', 'Dividends']
    },
    {
      title: 'Conglomerates & Diversified Holdings Focus',
      date: 'August 2026',
      type: 'Earnings Update',
      author: 'Equity Advisory Desk',
      summary: 'In-depth review of JKH (City of Dreams Sri Lanka gaming resort launch), Hayleys global supply chain resilience, and Melstacorp cash reserves.',
      tags: ['JKH', 'HAYL', 'MELS', 'Tourism']
    }
  ];

  return (
    <section id="research" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge blue">
            <BookOpen size={14} />
            <span>NDBS Intelligence Lab</span>
          </div>
          <h2>Institutional Research & Stock Directory</h2>
          <p>
            &ldquo;Quality research is the essential cornerstone of a successful broker-client relationship.&rdquo;
            <br />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>— Raynal Wickremeratne, Head of Research</span>
          </p>
        </div>

        {/* Featured Research Briefings Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {sampleReports.map((report, idx) => (
            <div key={idx} className="bento-card" style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="apple-badge accent" style={{ fontSize: '0.75rem' }}>{report.type}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{report.date}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {report.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                  By {report.author}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {report.summary}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {report.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', background: 'rgba(0,0,0,0.04)', color: 'var(--text-secondary)' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-hairline)' }}>
                <a
                  href="#documents"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--ndb-crimson)'
                  }}
                >
                  <Download size={14} />
                  <span>Request Full PDF Report</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CSE Stock Directory & Search Filter */}
        <div className="bento-card" style={{ padding: '2rem', background: '#FFFFFF' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '1.75rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Colombo Stock Exchange Listed Securities</h3>
              <p style={{ fontSize: '0.9rem' }}>Real-time sector categorization across all CSE securities</p>
            </div>

            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.55rem 1rem',
              background: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-hairline)',
              minWidth: '280px'
            }}>
              <Search size={16} style={{ color: 'var(--text-tertiary)' }} />
              <input
                type="text"
                placeholder="Search stock by symbol or name (e.g., JKH, COMB)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  width: '100%'
                }}
              />
            </div>
          </div>

          {/* Sector Filter Dropdown & Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '0.5rem' }}>
              <Filter size={13} /> Filter Sector:
            </span>
            {CSE_SECTORS.slice(0, 7).map(sector => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: selectedSector === sector ? 'var(--text-primary)' : 'var(--bg-tertiary)',
                  color: selectedSector === sector ? '#FFFFFF' : 'var(--text-secondary)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Listed Stocks Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem'
          }}>
            {filteredStocks.map(stock => (
              <div
                key={stock.symbol}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>
                      {stock.symbol.split('.')[0]}
                    </span>
                    <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                      LKR {stock.price.toFixed(2)}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {stock.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    Sector: {stock.sector}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.85rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <span className={`apple-badge ${stock.change >= 0 ? 'success' : 'accent'}`} style={{ fontSize: '0.725rem' }}>
                    {stock.change >= 0 ? '+' : ''}{stock.pctChange}%
                  </span>
                  <a
                    href="https://online.ndbs.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.775rem', fontWeight: 600, color: 'var(--apple-blue)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                  >
                    <span>Order</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredStocks.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-tertiary)' }}>
              No stocks found matching &ldquo;{searchQuery}&rdquo; in sector &ldquo;{selectedSector}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
