'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Activity } from 'lucide-react';
import { SAMPLE_CSE_STOCKS, StockTicker } from '@/data/ndbsData';

export default function MarketTicker() {
  const [stocks, setStocks] = useState<StockTicker[]>(SAMPLE_CSE_STOCKS);
  const [aspi, setAspi] = useState({ value: 11842.30, change: 48.10, pct: 0.41 });
  const [sp20, setSp20] = useState({ value: 3485.60, change: 19.20, pct: 0.55 });
  const [turnover, setTurnover] = useState(2450.8); // Million LKR
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Live simulation to replicate AtradDataFeed
  const simulateFeedTick = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setStocks(prev => prev.map(stock => {
        const delta = (Math.random() - 0.48) * 0.8;
        const newPrice = Math.max(1, Number((stock.price + delta).toFixed(2)));
        const newChange = Number((stock.change + delta).toFixed(2));
        const newPct = Number(((newChange / (newPrice - newChange)) * 100).toFixed(2));
        return {
          ...stock,
          price: newPrice,
          change: newChange,
          pctChange: newPct
        };
      }));

      const aspiDelta = (Math.random() - 0.45) * 4;
      setAspi(prev => ({
        value: Number((prev.value + aspiDelta).toFixed(2)),
        change: Number((prev.change + aspiDelta).toFixed(2)),
        pct: Number(((prev.change / prev.value) * 100).toFixed(2))
      }));

      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      simulateFeedTick();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'var(--bg-card-solid)',
      borderBottom: '1px solid var(--border-hairline)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {/* Left CSE Index Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="pulse-dot" title="Live Market Feed Active" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-secondary)' }}>
              CSE LIVE
            </span>
          </div>

          {/* ASPI */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>ASPI</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {aspi.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
            <span className={`apple-badge ${aspi.change >= 0 ? 'success' : 'accent'}`} style={{ padding: '0.15rem 0.45rem', fontSize: '0.75rem' }}>
              {aspi.change >= 0 ? '+' : ''}{aspi.change.toFixed(1)} ({aspi.pct >= 0 ? '+' : ''}{aspi.pct}%)
            </span>
          </div>

          {/* S&P SL20 */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>S&P SL20</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {sp20.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
            <span className={`apple-badge ${sp20.change >= 0 ? 'success' : 'accent'}`} style={{ padding: '0.15rem 0.45rem', fontSize: '0.75rem' }}>
              {sp20.change >= 0 ? '+' : ''}{sp20.change.toFixed(1)} ({sp20.pct >= 0 ? '+' : ''}{sp20.pct}%)
            </span>
          </div>

          {/* Turnover */}
          <div style={{ display: 'none' }} className="turnover-box">
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Turnover:</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Rs. {(turnover / 1000).toFixed(2)} Bn</span>
          </div>
        </div>

        {/* Right: Scrolling/Ticker Preview Stocks + Manual Refresh */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1, justifyContent: 'flex-end', minWidth: '320px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            overflowX: 'auto',
            paddingRight: '0.5rem',
            scrollbarWidth: 'none'
          }}>
            {stocks.slice(0, 6).map(stock => {
              const isPositive = stock.change >= 0;
              return (
                <div key={stock.symbol} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.825rem',
                  flexShrink: 0
                }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{stock.symbol.split('.')[0]}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{stock.price.toFixed(2)}</span>
                  <span style={{
                    color: isPositive ? 'var(--gain-green-text)' : 'var(--loss-red-text)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {isPositive ? <TrendingUp size={11} style={{ marginRight: 2 }} /> : <TrendingDown size={11} style={{ marginRight: 2 }} />}
                    {isPositive ? '+' : ''}{stock.pctChange}%
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={simulateFeedTick}
            disabled={isRefreshing}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.35rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-hairline)',
              color: 'var(--text-secondary)'
            }}
            title="Update Live Ticker Feed"
            aria-label="Refresh ticker"
          >
            <RefreshCw size={13} className={isRefreshing ? 'spin' : ''} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1080px) {
          .turnover-box {
            display: flex !important;
            align-items: center;
            gap: 0.35rem;
          }
        }
        .spin {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
