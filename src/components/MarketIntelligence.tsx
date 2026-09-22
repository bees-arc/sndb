'use client';

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, BarChart2, DollarSign, Activity, ChevronRight } from 'lucide-react';
import { SAMPLE_CSE_STOCKS, StockTicker } from '@/data/ndbsData';

export default function MarketIntelligence() {
  const [activeTab, setActiveTab] = useState<'gainers' | 'losers' | 'turnover'>('gainers');

  const gainers = [...SAMPLE_CSE_STOCKS].sort((a, b) => b.pctChange - a.pctChange).slice(0, 5);
  const losers = [...SAMPLE_CSE_STOCKS].sort((a, b) => a.pctChange - b.pctChange).slice(0, 5);
  const turnoverLeaders = [...SAMPLE_CSE_STOCKS].sort((a, b) => parseFloat(b.turnover) - parseFloat(a.turnover)).slice(0, 5);

  const currentList = activeTab === 'gainers' ? gainers : activeTab === 'losers' ? losers : turnoverLeaders;

  return (
    <section id="market" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge">
            <Activity size={14} />
            <span>Market Intelligence</span>
          </div>
          <h2>Colombo Stock Exchange at a Glance</h2>
          <p>
            Institutional-grade data feeds powered by NDBS. Real-time insights, price discoveries, and sector momentum.
          </p>
        </div>

        {/* Apple Style Segmented Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div className="segmented-control">
            <button
              onClick={() => setActiveTab('gainers')}
              className={`segmented-option ${activeTab === 'gainers' ? 'active' : ''}`}
            >
              <TrendingUp size={15} style={{ color: 'var(--gain-green)' }} />
              <span>Top Gainers</span>
            </button>
            <button
              onClick={() => setActiveTab('losers')}
              className={`segmented-option ${activeTab === 'losers' ? 'active' : ''}`}
            >
              <TrendingDown size={15} style={{ color: 'var(--loss-red)' }} />
              <span>Top Losers</span>
            </button>
            <button
              onClick={() => setActiveTab('turnover')}
              className={`segmented-option ${activeTab === 'turnover' ? 'active' : ''}`}
            >
              <DollarSign size={15} style={{ color: 'var(--apple-blue)' }} />
              <span>Highest Turnover</span>
            </button>
          </div>
        </div>

        {/* Market Table Bento Card */}
        <div className="bento-card" style={{ padding: '0', background: '#FFFFFF', overflow: 'hidden' }}>
          <div style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(0, 0, 0, 0.015)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BarChart2 size={18} style={{ color: 'var(--ndb-crimson)' }} />
              <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                {activeTab === 'gainers' ? 'Daily Top Gainers' : activeTab === 'losers' ? 'Daily Declining Equities' : 'Most Active by Volume & Turnover'}
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
              Source: CSE Feed via Atrad Engine
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '640px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-hairline)', fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  <th style={{ padding: '1rem 1.75rem' }}>Security</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Sector</th>
                  <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Price (LKR)</th>
                  <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Change</th>
                  <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Turnover</th>
                  <th style={{ padding: '1rem 1.75rem', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentList.map((stock, idx) => {
                  const isPositive = stock.change >= 0;
                  return (
                    <tr
                      key={stock.symbol}
                      style={{
                        borderBottom: idx < currentList.length - 1 ? '1px solid var(--border-hairline)' : 'none',
                        transition: 'background var(--transition-fast)'
                      }}
                      className="table-row-hover"
                    >
                      <td style={{ padding: '1.1rem 1.75rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {stock.symbol.split('.')[0]}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {stock.name}
                        </div>
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span className="apple-badge" style={{ fontSize: '0.75rem' }}>
                          {stock.sector}
                        </span>
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', textAlign: 'right', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {stock.price.toFixed(2)}
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', textAlign: 'right' }}>
                        <span className={`apple-badge ${isPositive ? 'success' : 'accent'}`} style={{ fontFamily: 'var(--font-mono)' }}>
                          {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.pctChange}%)
                        </span>
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', textAlign: 'right', fontSize: '0.875rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        Rs. {stock.turnover}
                      </td>
                      <td style={{ padding: '1.1rem 1.75rem', textAlign: 'center' }}>
                        <a
                          href="https://online.ndbs.lk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apple-badge blue"
                          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                        >
                          <span>Trade</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          color: 'var(--text-tertiary)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>Data displays normal trading hours (09:30 - 14:30 SLT). Market quotes subject to statutory CSE clearing protocols.</div>
          <a
            href="https://online.ndbs.lk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--apple-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            Launch Full Atrad DMA Trading Terminal <ChevronRight size={14} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .table-row-hover:hover {
          background: rgba(0, 0, 0, 0.02);
        }
      `}</style>
    </section>
  );
}
