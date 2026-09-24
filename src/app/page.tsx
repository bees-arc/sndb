'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import DigitalOnboardingModal from '@/components/DigitalOnboardingModal';
import {
  UserCheck,
  Monitor,
  Activity,
  BookOpen,
  Layers,
  DollarSign,
  Download,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  PieChart,
  Globe,
  Landmark,
  PhoneCall,
  Volume2,
  ChevronRight,
  CheckCircle2,
  Award,
  ExternalLink,
  Share2,
  Building
} from 'lucide-react';
import { SAMPLE_CSE_STOCKS } from '@/data/ndbsData';

export default function Home() {
  const [audience, setAudience] = useState<'local' | 'foreign'>('local');
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const topGainers = [...SAMPLE_CSE_STOCKS].sort((a, b) => b.pctChange - a.pctChange).slice(0, 3);

  // Voice Assist Reader for Accessibility (like NDB Bank sound button)
  const toggleVoiceAssist = () => {
    if (typeof window === 'undefined') return;
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const text = "Welcome to NDB Securities, member of the Colombo Stock Exchange and subsidiary of National Development Bank PLC. Open your digital CDS account online today or trade via the Atrad portal.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Text-to-speech is not supported in your browser.");
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* 1. Header with NDB Bank Official Topbar & Dropdown Mega Menus */}
      <Header
        audience={audience}
        onAudienceChange={setAudience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 2. Hero Carousel (Exact NDB Bank slider with official banners & CTAs) */}
      <Hero
        audience={audience}
        onOpenOnboarding={() => setOnboardingOpen(true)}
      />

      {/* 3. 8-Column Quick Access Bar (Exact NDB Bank Homequick layout) */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="homequick-row">
          {/* 1. Digital CDS Account */}
          <button
            onClick={() => setOnboardingOpen(true)}
            className="homequickcont"
            aria-label="Open Digital CDS Account"
          >
            <div className="homebtns">
              <UserCheck size={22} />
            </div>
            <span>Digital CDS Account</span>
          </button>

          {/* 2. Atrad DMA Portal */}
          <a
            href="https://online.ndbs.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="homequickcont"
            aria-label="Atrad Online Trading"
          >
            <div className="homebtns">
              <Monitor size={22} />
            </div>
            <span>Atrad DMA Portal</span>
          </a>

          {/* 3. CSE Live Feed */}
          <Link href="/markets" className="homequickcont" aria-label="Colombo Stock Exchange Live Pulse">
            <div className="homebtns">
              <Activity size={22} />
            </div>
            <span>CSE Live Feed</span>
          </Link>

          {/* 4. Research Reports */}
          <Link href="/research" className="homequickcont" aria-label="Research Reports & Market Intelligence">
            <div className="homebtns">
              <BookOpen size={22} />
            </div>
            <span>Research Desk</span>
          </Link>

          {/* 5. Listed Corporate Debt */}
          <Link href="/services#debt" className="homequickcont" aria-label="Corporate Debt & Listed Debentures">
            <div className="homebtns">
              <Layers size={22} />
            </div>
            <span>Corporate Debt</span>
          </Link>

          {/* 6. Margin Trading */}
          <Link href="/services#margin" className="homequickcont" aria-label="Margin Trading Facilities">
            <div className="homebtns">
              <DollarSign size={22} />
            </div>
            <span>Margin Trading</span>
          </Link>

          {/* 7. Forms & Downloads */}
          <Link href="/downloads" className="homequickcont" aria-label="Statutory Forms and Downloads">
            <div className="homebtns">
              <Download size={22} />
            </div>
            <span>Forms Vault</span>
          </Link>

          {/* 8. Branch Locator */}
          <Link href="/contact#branches" className="homequickcont" aria-label="Branch Network & Advisor Locator">
            <div className="homebtns">
              <MapPin size={22} />
            </div>
            <span>Branch Locator</span>
          </Link>
        </div>
      </section>

      {/* 4. Real-time Colombo Stock Exchange Live Market Ticker */}
      <MarketTicker />

      {/* 5. Section 2: Invest with NDB Securities (Exact NDB Bank sec2 Grid) */}
      <section className="sec2">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              alignItems: 'stretch'
            }}
          >
            {/* Intro Lead Card */}
            <div className="sec2-intro-card">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--ndb-red)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem'
                }}
              >
                <Award size={15} />
                <span>NDB Securities Advantage</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem', color: '#111827' }}>
                Invest with <br />
                <span className="ndbcolor">NDB Securities</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Backed by the financial strength and heritage of National Development Bank PLC, we provide direct market access, institutional execution, and award-winning research for individual and global institutional investors.
              </p>
              <div>
                <Link href="/services" className="btn-ndb-primary" style={{ padding: '0.75rem 1.6rem' }}>
                  <span>Explore All Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Feature Card 1: Retail & Private Client Equities */}
            <div className="sec2-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
                  alt="Equity Trading Terminal"
                  className="sec2-card-img"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(207, 21, 45, 0.92)',
                    color: '#FFFFFF',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-xs)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Retail &amp; Private Clients
                </span>
              </div>
              <div className="sec2-card-body">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>
                  Direct Equity Execution &amp; DMA
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  Trade shares in real-time with direct integration to the Colombo Stock Exchange matching engine via our omnichannel Atrad web and mobile platforms.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    onClick={() => setOnboardingOpen(true)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--ndb-red)'
                    }}
                  >
                    <span>Open Account</span>
                    <ArrowRight size={14} />
                  </button>
                  <Link
                    href="/services#equities"
                    style={{ fontSize: '0.825rem', color: 'var(--text-tertiary)', fontWeight: 500 }}
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature Card 2: Institutional & Foreign Desk */}
            <div className="sec2-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
                  alt="Institutional Dealing"
                  className="sec2-card-img"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(31, 41, 55, 0.92)',
                    color: '#FFFFFF',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-xs)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Institutional &amp; Global
                </span>
              </div>
              <div className="sec2-card-body">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>
                  Institutional Block Trading &amp; IIA
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  Bespoke execution for mutual funds, foreign portfolio managers, and family offices with full Inward Investment Account (IIA) custodian bank settlement.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    href="/services#foreign-desk"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--ndb-red)'
                    }}
                  >
                    <span>Inward Investment Desk</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/services#institutional"
                    style={{ fontSize: '0.825rem', color: 'var(--text-tertiary)', fontWeight: 500 }}
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature Card 3: Listed Debt & Corporate Debentures */}
            <div className="sec2-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="Corporate Bonds & Fixed Income"
                  className="sec2-card-img"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(180, 131, 27, 0.95)',
                    color: '#FFFFFF',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-xs)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Fixed Income
                </span>
              </div>
              <div className="sec2-card-body">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>
                  Listed Debentures &amp; Corporate Debt
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  High-yield fixed-income corporate debentures, senior/subordinated notes, and primary syndication to optimize risk-adjusted returns.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    href="/services#debt"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--ndb-red)'
                    }}
                  >
                    <span>View Debt Listings</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/services#tariffs"
                    style={{ fontSize: '0.825rem', color: 'var(--text-tertiary)', fontWeight: 500 }}
                  >
                    Tariffs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Promotional Mid-Page Banner (Exact NDB Bank sec-promo layout) */}
      <section className="sec-promo" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2.5rem'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <ShieldCheck size={14} style={{ color: '#34D399' }} />
                <span>100% Digital e-KYC • SEC Licensed Member</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.25 }}>
                Begin Investing in Sri Lankan Equities Today
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.025rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Open your Central Depository Systems (CDS) account in under 5 minutes with your Sri Lankan NIC or Passport. Enjoy zero account maintenance fees, real-time Atrad trading access, and personal advisory.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setOnboardingOpen(true)}
                  className="btn-ndb-primary"
                  style={{
                    fontSize: '0.95rem',
                    padding: '0.85rem 2rem',
                    boxShadow: '0 4px 15px rgba(207, 21, 45, 0.5)'
                  }}
                >
                  <span>Open Digital CDS Account</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#FFFFFF',
                    padding: '0.85rem 1.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.925rem',
                    fontWeight: 600
                  }}
                >
                  <span>Speak to an Advisor</span>
                  <PhoneCall size={15} />
                </Link>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                minWidth: '280px',
                maxWidth: '420px',
                width: '100%'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  30+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                  Years Capital Market Leadership
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  Fitch A-
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                  National Long-Term Rating
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  Rs. 50B+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                  Annual Traded Equity Volume
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.25rem' }}>
                  Paperless Digital e-KYC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Live CSE Market Snapshot & Benchmark Overview */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="apple-badge accent" style={{ marginBottom: '0.5rem' }}>
                <Activity size={13} />
                <span>Market Intelligence</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827' }}>
                Colombo Stock Exchange Live Pulse
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Real-time price discovery, daily volume leaders, and benchmark metrics powered by NDB Securities data feeds.
              </p>
            </div>

            <Link
              href="/markets"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: 'var(--ndb-red)'
              }}
            >
              <span>Explore Full Live Markets &amp; Stock Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Benchmark Card */}
            <div className="homecard">
              <div style={{ fontSize: '0.785rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                Benchmark Indices
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-hairline)' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#111827' }}>ASPI Index</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>All Share Price Index</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>11,842.30</div>
                    <span className="apple-badge success" style={{ fontSize: '0.725rem' }}>+48.10 (+0.41%)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#111827' }}>S&amp;P SL20 Index</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Top 20 Blue Chip Equities</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>3,485.60</div>
                    <span className="apple-badge success" style={{ fontSize: '0.725rem' }}>+19.20 (+0.55%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Daily Movers */}
            <div className="homecard">
              <div style={{ fontSize: '0.785rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                Top Daily Gainers
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {topGainers.map((stock) => (
                  <div key={stock.symbol} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-hairline)' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#111827' }}>{stock.symbol.split('.')[0]}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{stock.name}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Rs. {stock.price.toFixed(2)}</div>
                      <span className="apple-badge success" style={{ fontSize: '0.725rem' }}>+{stock.pctChange}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct DMA Terminal Launcher */}
            <div className="homecard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="apple-badge blue" style={{ marginBottom: '0.85rem' }}>
                  Atrad Online Trading
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111827' }}>
                  Direct Market Access (DMA)
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Execute buy and sell orders with sub-second transmission directly into the CSE ATS engine with live charts and real-time market depth.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://online.ndbs.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ndb-primary"
                  style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.85rem', textAlign: 'center' }}
                >
                  <span>Launch Atrad</span>
                  <ArrowUpRight size={14} />
                </a>
                <Link
                  href="/markets"
                  className="btn-ndb-outline"
                  style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                >
                  Full Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section 3: Our Diversified Offerings & Group Synergies (Exact NDB Bank sec3) */}
      <section className="sec3">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch'
            }}
          >
            {/* Left Info Panel */}
            <div className="sec3info">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--ndb-red)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem'
                }}
              >
                <Building size={15} />
                <span>NDB Capital Holdings Group</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem', color: '#111827' }}>
                Our Diversified <br />
                <span className="ndbcolor">Financial Ecosystem</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                NDB Securities operates as an integral arm of NDB Capital Holdings, collaborating across commercial banking, investment banking, and private wealth management to provide institutional and retail clients with full-spectrum capital solutions.
              </p>
              <a
                href="https://www.ndbbank.com/ndb-group"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ndb-outline"
                style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>About NDB Group</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Right 4 Group Synergies Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', gridColumn: 'span 2' }}>
              {/* Group Company 1 */}
              <div className="homecard">
                <div className="group-icon-img">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(207, 21, 45, 0.08)',
                      color: 'var(--ndb-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Landmark size={22} />
                  </div>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: '#111827' }}>
                  NDB Bank PLC
                </h4>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ndb-red)', marginBottom: '0.5rem' }}>
                  Commercial Banking • Fitch A-(lka)
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Full-service commercial banking with over 113 islandwide branches, foreign currency accounts, and digital banking via NDB NEOS.
                </p>
              </div>

              {/* Group Company 2 */}
              <div className="homecard">
                <div className="group-icon-img">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(130, 0, 159, 0.08)',
                      color: 'var(--ndb-plum)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Briefcase size={22} />
                  </div>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: '#111827' }}>
                  NDB Investment Bank
                </h4>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ndb-plum)', marginBottom: '0.5rem' }}>
                  NDBIB • Debt &amp; Equity Advisory
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Sri Lanka&apos;s leading investment bank, structuring landmark IPOs, syndicated debt facilities, M&amp;A, and corporate restructurings.
                </p>
              </div>

              {/* Group Company 3 */}
              <div className="homecard">
                <div className="group-icon-img">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(2, 132, 199, 0.08)',
                      color: 'var(--apple-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PieChart size={22} />
                  </div>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: '#111827' }}>
                  NDB Wealth Management
                </h4>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--apple-blue)', marginBottom: '0.5rem' }}>
                  Asset Management &amp; Unit Trusts
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Largest private sector fund manager in Sri Lanka, managing money market funds, growth funds, and institutional mandates.
                </p>
              </div>

              {/* Group Company 4 */}
              <div className="homecard">
                <div className="group-icon-img">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(16, 185, 129, 0.08)',
                      color: 'var(--gain-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <TrendingUp size={22} />
                  </div>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: '#111827' }}>
                  NDB Securities (NDBS)
                </h4>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gain-green-text)', marginBottom: '0.5rem' }}>
                  CSE Full Trading Member • Equity &amp; Debt
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Premier stockbroking house offering paperless digital onboarding, Atrad DMA execution, and equity research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Award-Winning Research Highlights */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="apple-badge blue" style={{ marginBottom: '0.5rem' }}>
                <BookOpen size={13} />
                <span>NDBS Research Lab</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827' }}>
                Featured Macro &amp; Sector Intelligence
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Actionable equity valuation models and macroeconomic strategy notes produced by our award-winning research desk.
              </p>
            </div>

            <Link
              href="/research"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: 'var(--ndb-red)'
              }}
            >
              <span>View All Reports &amp; Valuations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div className="homecard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="apple-badge accent" style={{ fontSize: '0.75rem' }}>Sector Outlook</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>September 2026</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>
                  Banking &amp; Financial Sector Review 2026
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Detailed analysis of monetary policy easing, NPL recovery trajectories, and valuation multipliers across licensed commercial banks on the CSE.
                </p>
              </div>
              <Link href="/research" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>Read Executive Summary</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="homecard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="apple-badge accent" style={{ fontSize: '0.75rem' }}>Market Valuation</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>September 2026</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>
                  CSE Market Valuation &amp; Multiplier Digest
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Forward price-to-earnings mapping, dividend yields, and foreign investor transaction flow tracking across key CSE capitalization tiers.
                </p>
              </div>
              <Link href="/research" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ndb-red)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>Read Executive Summary</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Floating Speed Dial Quick Menu (Like NDB Bank Right-hand Drawer) */}
      <div className="share-buttons">
        <a
          href="https://online.ndbs.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="share-menu-item"
          title="Trade Online (Atrad)"
        >
          <Monitor size={16} />
          <span>Atrad Online DMA</span>
        </a>
        <button
          onClick={() => setOnboardingOpen(true)}
          className="share-menu-item"
          title="Open CDS Account"
        >
          <UserCheck size={16} />
          <span>Open Digital CDS</span>
        </button>
        <Link href="/services#tariffs" className="share-menu-item" title="Tariffs & Levies">
          <DollarSign size={16} />
          <span>Tariff Schedule</span>
        </Link>
        <Link href="/contact#branches" className="share-menu-item" title="Branch Network">
          <MapPin size={16} />
          <span>Branch Locator</span>
        </Link>
        <a href="tel:+94112131000" className="share-menu-item" title="Hotline Support">
          <PhoneCall size={16} />
          <span>+94 11 2 131 000</span>
        </a>
        <div className="share-button-main" title="Quick Access Menu">
          <Share2 size={20} />
        </div>
      </div>

      {/* 11. Voice Assist / Audio Reading Floating Button (Like NDB Bank sound button) */}
      <button
        onClick={toggleVoiceAssist}
        className="sound-play-btn"
        title={isSpeaking ? 'Stop Audio' : 'Listen to Page Overview'}
        aria-label="Voice Assist"
      >
        <Volume2 size={20} style={{ animation: isSpeaking ? 'pulseGlow 1.2s infinite' : 'none' }} />
      </button>

      {/* 12. Minimalist Corporate NDB Bank Footer */}
      <Footer />

      {/* 13. Digital Paperless e-KYC Modal Wizard */}
      <DigitalOnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        defaultAudience={audience}
      />
    </main>
  );
}
