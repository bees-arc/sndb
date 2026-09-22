'use client';

import React, { useState } from 'react';
import { Award, UserCheck, Shield, ChevronRight, X } from 'lucide-react';
import { BOARD_MEMBERS, BoardMember } from '@/data/ndbsData';

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState<BoardMember | null>(null);

  return (
    <section id="leadership" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="apple-badge">
            <Award size={14} />
            <span>Governance & Stewardship</span>
          </div>
          <h2>Leadership & Board of Directors</h2>
          <p>
            Seasoned international bankers and capital market pioneers driving fiduciary excellence, investor trust, and innovation.
          </p>
        </div>

        {/* Leadership Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1180px',
          margin: '0 auto'
        }}>
          {BOARD_MEMBERS.map(leader => (
            <div
              key={leader.id}
              className="bento-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem'
              }}
            >
              <div>
                {/* Avatar Initial Squircle */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, rgba(138, 0, 0, 0.12) 0%, rgba(138, 0, 0, 0.04) 100%)',
                  color: 'var(--ndb-crimson)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(138, 0, 0, 0.12)'
                }}>
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ndb-crimson)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                  {leader.role}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                  {leader.name}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {leader.credentials}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {leader.bio}
                </p>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-hairline)', marginTop: '1.25rem' }}>
                <button
                  onClick={() => setSelectedLeader(leader)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--apple-blue)',
                    padding: 0
                  }}
                >
                  <span>Read Full Biography</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedLeader && (
        <div className="modal-overlay" onClick={() => setSelectedLeader(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedLeader(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '1.5rem' }}>
              <div className="apple-badge accent" style={{ marginBottom: '0.5rem' }}>
                {selectedLeader.role}
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800 }}>
                {selectedLeader.name}
              </h2>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                {selectedLeader.credentials}
              </div>
            </div>

            <div style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-primary)',
              borderTop: '1px solid var(--border-hairline)',
              paddingTop: '1.5rem',
              marginBottom: '2rem'
            }}>
              {selectedLeader.bio}
            </div>

            <button
              onClick={() => setSelectedLeader(null)}
              className="btn-apple-primary"
              style={{ width: '100%', padding: '0.75rem' }}
            >
              Close Biography
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
