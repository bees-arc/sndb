'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  audience?: 'local' | 'foreign';
  onOpenOnboarding: () => void;
}

interface SlideItem {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  primaryCta: { text: string; action: 'modal' | 'link'; href?: string };
  secondaryCta: { text: string; href: string };
  bgGradient: string;
  accentColor: string;
  bgImage?: string;
  features: string[];
}

import { useLanguage } from '@/context/LanguageContext';

export default function Hero({ onOpenOnboarding }: HeroProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: SlideItem[] = [
    {
      id: 1,
      tag: t('heroPioneer'),
      title: t('heroSlide1Title'),
      subtitle: t('heroSlide1Subtitle'),
      primaryCta: { text: t('openDigitalAccount'), action: 'modal' },
      secondaryCta: { text: t('exploreMarkets'), href: '/markets' },
      bgGradient: 'linear-gradient(135deg, rgba(17, 24, 39, 0.92) 0%, rgba(31, 41, 55, 0.85) 50%, rgba(130, 0, 159, 0.7) 100%)',
      accentColor: '#cf152d',
      bgImage: 'https://ndbbankweb.ndbbank.com/media/c5882017-2b7c-465a-a825-5a5d0ab7c261_1.webp',
      features: ['SEC Licensed Stockbroker', 'Full Trading Member CSE', 'Fitch A-(lka) Parentage']
    },
    {
      id: 2,
      tag: t('heroSlide2Tag'),
      title: t('heroSlide2Title'),
      subtitle: t('heroSlide2Subtitle'),
      primaryCta: { text: t('launchAtrad'), action: 'link', href: 'https://online.ndbs.lk' },
      secondaryCta: { text: t('viewResearch'), href: '/research' },
      bgGradient: 'linear-gradient(135deg, rgba(11, 15, 25, 0.94) 0%, rgba(15, 23, 42, 0.88) 50%, rgba(207, 21, 45, 0.65) 100%)',
      accentColor: '#f7345e',
      bgImage: 'https://ndbbankweb.ndbbank.com/media/31aa1fab-099e-45f3-8a8f-9c28bab5d933_2.webp',
      features: ['Omnichannel Web & Mobile', 'CSE Direct Execution', 'Zero Account Opening Fee']
    },
    {
      id: 3,
      tag: t('heroSlide3Tag'),
      title: t('heroSlide3Title'),
      subtitle: t('heroSlide3Subtitle'),
      primaryCta: { text: t('openDigitalAccount'), action: 'modal' },
      secondaryCta: { text: t('downloadGuides'), href: '/downloads' },
      bgGradient: 'linear-gradient(135deg, rgba(20, 24, 36, 0.92) 0%, rgba(30, 41, 59, 0.85) 60%, rgba(112, 0, 137, 0.7) 100%)',
      accentColor: '#cf152d',
      bgImage: 'https://ndbbankweb.ndbbank.com/media/b632998b-a6a3-49f1-a66a-0cfe416dc9ce_3.webp',
      features: ['Instant Verification', 'No Branch Visit Needed', 'Tax-Free Capital Gains']
    }
  ];

  // Auto advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0B0F19',
        color: '#FFFFFF'
      }}
    >
      {/* Background Media with Fade Transition */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === currentSlide ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: 0
          }}
        >
          {/* Subtle Stock Video / Image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.38) saturate(1.2)'
            }}
          />
          {/* Gradient Overlay matching NDB colors */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: s.bgGradient
            }}
          />
        </div>
      ))}

      {/* Main Slide Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '4.5rem 1.25rem', width: '100%' }}>
        <div style={{ maxWidth: '820px' }}>

          {/* Headline */}
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            {current.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.88)',
              fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
              lineHeight: 1.65,
              marginBottom: '2.25rem',
              maxWidth: '680px'
            }}
          >
            {current.subtitle}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {current.primaryCta.action === 'modal' ? (
              <button
                onClick={onOpenOnboarding}
                className="btn-ndb-primary"
                style={{
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: '0 4px 15px rgba(207, 21, 45, 0.45)'
                }}
              >
                <span>{current.primaryCta.text}</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <a
                href={current.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ndb-primary"
                style={{
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: '0 4px 15px rgba(207, 21, 45, 0.45)'
                }}
              >
                <span>{current.primaryCta.text}</span>
                <ArrowUpRight size={16} />
              </a>
            )}

            <Link
              href={current.secondaryCta.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '0.85rem 1.6rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.925rem',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
            >
              <span>{current.secondaryCta.text}</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Pill Highlights */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', opacity: 0.9 }}>
            {current.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
                <ShieldCheck size={14} style={{ color: '#34D399' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls (Arrows) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hero-arrow-btn"
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hero-arrow-btn"
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators (Pills at Bottom) */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem'
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '36px' : '10px',
              height: '8px',
              borderRadius: '4px',
              background: idx === currentSlide ? 'var(--ndb-red)' : 'rgba(255, 255, 255, 0.4)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </section>
  );
}
