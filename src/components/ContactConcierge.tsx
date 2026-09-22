'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, UserCheck } from 'lucide-react';
import { ADVISORY_TEAM } from '@/data/ndbsData';

export default function ContactConcierge() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Equity Brokerage',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', interest: 'Equity Brokerage', message: '' });
    }, 4000);
  };

  return (
    <section id="contacts" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge accent">
            <Phone size={14} />
            <span>Direct Client Concierge</span>
          </div>
          <h2>Connect with Our Wealth Advisors</h2>
          <p>
            Experience personalized institutional service. Contact our executive advisory team or visit our Colombo headquarters.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem',
          maxWidth: '1180px',
          margin: '0 auto'
        }}>
          {/* Left Column: Direct Extension Directory & Head Office */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Headquarters Card */}
            <div className="bento-card" style={{ background: '#FFFFFF' }}>
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
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Headquarters</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Colombo 04, Sri Lanka</span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                <strong>NDB Securities (Pvt) Ltd</strong><br />
                Level 2, NDB Capital Building, No: 135, Bauddhaloka Mawatha, Colombo 4, Sri Lanka.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Phone size={15} style={{ color: 'var(--text-tertiary)' }} />
                  <span><strong>Hotline:</strong> +94 (11) 2 131 000</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={15} style={{ color: 'var(--text-tertiary)' }} />
                  <span><strong>Client Support:</strong> support@ndbs.lk</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Clock size={15} style={{ color: 'var(--text-tertiary)' }} />
                  <span><strong>Trading Hours:</strong> Mon – Fri: 08:30 – 17:00 SLT</span>
                </div>
              </div>
            </div>

            {/* Direct Investment Advisors Directory */}
            <div className="bento-card" style={{ background: '#FFFFFF', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
                Direct Advisory Extension Lines
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxHeight: '280px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                {ADVISORY_TEAM.map((advisor, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-hairline)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{advisor.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{advisor.title}</div>
                    </div>
                    <a
                      href={`tel:${advisor.phone.replace(/\s+/g, '')}`}
                      className="apple-badge"
                      style={{ fontSize: '0.75rem', textDecoration: 'none', color: 'var(--ndb-crimson)' }}
                    >
                      Ext: {advisor.directExt}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="bento-card" style={{ background: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              Send an Advisory Inquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Our dedicated investment advisory desk will respond within 2 market hours.
            </p>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                background: 'var(--gain-green-bg)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--gain-green-text)'
              }}>
                <CheckCircle2 size={40} style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Dispatched!</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Thank you. An NDB Securities investment advisor has been assigned to your request.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyantha Dissanayake"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--bg-secondary)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 77 000 0000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--bg-secondary)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="Equity Brokerage">Equity Brokerage & DMA Trading</option>
                    <option value="Corporate Debt">Fixed Income & Corporate Debentures</option>
                    <option value="Mutual Funds">NDB Wealth Mutual Funds / Unit Trusts</option>
                    <option value="Foreign Inward Investment">Foreign Inward Investment Account (IIA)</option>
                    <option value="Institutional & Block Trades">Institutional & Block Trade Execution</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Message / Investment Requirement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your portfolio goals, planned capital allocation, or queries..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.9rem',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-apple-primary"
                  style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>Send Message to Advisory Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
