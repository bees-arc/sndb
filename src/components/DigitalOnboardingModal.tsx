'use client';

import React, { useState } from 'react';
import { X, User, Building, Globe, CheckCircle2, ArrowRight, ArrowLeft, Shield, FileText, Sparkles } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAudience?: 'local' | 'foreign';
}

export default function DigitalOnboardingModal({ isOpen, onClose, defaultAudience = 'local' }: ModalProps) {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<'individual_local' | 'individual_foreign' | 'corporate_local' | 'corporate_foreign'>(
    defaultAudience === 'foreign' ? 'individual_foreign' : 'individual_local'
  );

  const [formData, setFormData] = useState({
    fullName: '',
    nicOrPassport: '',
    email: '',
    phone: '',
    bankName: '',
    accountNumber: '',
    employment: 'Private Sector Professional',
    sourceOfFunds: 'Salary / Business Profits'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
      }, 1000);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsCompleted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-hairline)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!isCompleted ? (
          <>
            {/* Header & Step Tracker */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="apple-badge accent" style={{ fontSize: '0.75rem' }}>
                  <Shield size={12} /> Paperless e-KYC
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                  Step {step} of 3
                </span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>
                {step === 1 && 'Select Account Category'}
                {step === 2 && 'Personal Identification'}
                {step === 3 && 'Banking & Settlement Mandate'}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {step === 1 && 'Choose your citizenship and investor structure for CDS registration.'}
                {step === 2 && 'Enter verified identification per SEC and FIU Sri Lanka regulations.'}
                {step === 3 && 'Direct linkage for automated dividend credits and trade settlements.'}
              </p>

              {/* Progress Bar */}
              <div style={{
                height: '4px',
                width: '100%',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-xs)',
                marginTop: '1rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: `${(step / 3) * 100}%`,
                  background: 'var(--ndb-crimson)',
                  borderRadius: 'var(--radius-xs)',
                  transition: 'width var(--transition-normal)'
                }} />
              </div>
            </div>

            {/* Step 1: Category Selection */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div
                  onClick={() => setAccountType('individual_local')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: `2px solid ${accountType === 'individual_local' ? 'var(--ndb-crimson)' : 'var(--border-hairline)'}`,
                    background: accountType === 'individual_local' ? 'var(--ndb-crimson-subtle)' : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <User size={24} style={{ color: 'var(--ndb-crimson)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>Sri Lankan Resident Individual</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Personal or joint CDS account using National Identity Card (NIC) or Sri Lankan Passport.
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setAccountType('individual_foreign')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: `2px solid ${accountType === 'individual_foreign' ? 'var(--ndb-crimson)' : 'var(--border-hairline)'}`,
                    background: accountType === 'individual_foreign' ? 'var(--ndb-crimson-subtle)' : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <Globe size={24} style={{ color: 'var(--apple-blue)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>Foreign Citizen / Non-Resident Expat</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      International CDS account linked with an Inward Investment Account (IIA) or Custodian Bank.
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setAccountType('corporate_local')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: `2px solid ${accountType === 'corporate_local' ? 'var(--ndb-crimson)' : 'var(--border-hairline)'}`,
                    background: accountType === 'corporate_local' ? 'var(--ndb-crimson-subtle)' : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <Building size={24} style={{ color: 'var(--gain-green)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>Corporate & Institutional Entity</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Private/Public companies registered under Companies Act 07 of 2007, trusts, or funds.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Identification */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Full Legal Name (as appearing in NIC/Passport)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kasun Chamara Perera"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.95rem',
                      background: 'var(--bg-secondary)'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      NIC or Passport No
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 199012345678 or N1234567"
                      value={formData.nicOrPassport}
                      onChange={e => setFormData({ ...formData, nicOrPassport: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.95rem',
                        background: 'var(--bg-secondary)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      Mobile Phone (with country code)
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.95rem',
                        background: 'var(--bg-secondary)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Email Address (for e-Statements & Atrad credentials)
                  </label>
                  <input
                    type="email"
                    placeholder="kasun.perera@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.95rem',
                      background: 'var(--bg-secondary)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Banking & Settlement */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Settlement Bank in Sri Lanka
                  </label>
                  <select
                    value={formData.bankName}
                    onChange={e => setFormData({ ...formData, bankName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.95rem',
                      background: 'var(--bg-secondary)'
                    }}
                  >
                    <option value="">Select your preferred settlement bank</option>
                    <option value="NDB Bank PLC">NDB Bank PLC (Recommended - Fast Track)</option>
                    <option value="Commercial Bank of Ceylon">Commercial Bank of Ceylon PLC</option>
                    <option value="Hatton National Bank">Hatton National Bank PLC (HNB)</option>
                    <option value="Sampath Bank">Sampath Bank PLC</option>
                    <option value="Standard Chartered Bank">Standard Chartered Bank Sri Lanka (Custodian / IIA)</option>
                    <option value="HSBC Sri Lanka">HSBC Sri Lanka (Custodian / IIA)</option>
                    <option value="Other Licensed Commercial Bank">Other Licensed Commercial Bank</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    Bank Account Number (LKR / IIA)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 101000123456"
                    value={formData.accountNumber}
                    onChange={e => setFormData({ ...formData, accountNumber: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.95rem',
                      background: 'var(--bg-secondary)'
                    }}
                  />
                </div>

                <div style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gain-green-bg)',
                  border: '1px solid rgba(52, 199, 89, 0.2)',
                  fontSize: '0.85rem',
                  color: 'var(--gain-green-text)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem'
                }}>
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Automated CDS & Dividend Mandate:</strong> Your CDS account will be directly registered with Colombo Stock Exchange Central Depository Systems. Dividends from held shares will be credited straight to this bank account.
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="btn-apple-secondary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
              ) : <div />}

              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="btn-apple-primary"
                style={{ padding: '0.75rem 1.8rem', fontSize: '0.9rem' }}
              >
                <span>{isSubmitting ? 'Verifying e-KYC...' : step === 3 ? 'Complete & Submit' : 'Continue'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </>
        ) : (
          /* Completion State */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--gain-green-bg)',
              color: 'var(--gain-green)',
              border: '1px solid #BBF7D0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Application Submitted!
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.fullName || 'Investor'}</strong>. Your digital CDS registration reference number is <strong>NDBS-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              <br /><br />
              An onboarding specialist from our Investment Advisory team will contact you within <strong>24 business hours</strong> to finalize your electronic signature and activate your online Atrad trading terminal.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={resetAndClose}
                className="btn-apple-primary"
                style={{ padding: '0.8rem 2rem' }}
              >
                Return to Portal
              </button>
              <a
                href="#documents"
                onClick={resetAndClose}
                className="btn-apple-secondary"
                style={{ padding: '0.8rem 1.6rem' }}
              >
                <FileText size={16} />
                <span>View Downloadable Forms</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
