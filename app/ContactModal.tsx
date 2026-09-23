'use client';

import React, { useEffect } from 'react';
import { X, Mail, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const phone = '+91 8076241590';
  const email = 'Risexmedia6@gmail.com';
  const whatsappUrl = 'https://wa.me/918076241590?text=Hi%20RiseXMedia%2C%20I%20would%20like%20to%20connect!';
  const emailUrl = `mailto:${email}?subject=Project%20Inquiry%20-%20RiseXMedia`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <h3 className="modal-title">Get in touch</h3>

        <div className="contact-buttons">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="simple-contact-btn whatsapp"
          >
            <div className="btn-left">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.537 1.948.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.806-5.77-5.806zm3.385 8.167c-.144.405-.837.774-1.171.823-.312.043-.699.063-2.128-.528-1.503-.622-2.483-2.15-2.558-2.25-.075-.101-.61-8.11-.61-1.551 0-.74.388-1.106.526-1.253.138-.147.301-.184.402-.184.101 0 .202.001.29.006.094.005.22-.036.344.262.129.311.44 1.074.478 1.152.038.078.064.168.013.269-.051.101-.077.164-.153.253-.076.089-.16.198-.228.266-.076.076-.156.16-.067.313.09.152.399.658.857 1.066.59.524 1.088.687 1.241.763.153.076.241.064.33-.038.089-.102.38-.442.482-.594.101-.152.203-.127.341-.076.139.051.886.417 1.038.493.153.076.254.114.292.177.038.064.038.368-.106.773z"/>
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.99.584 3.844 1.597 5.411L2 22l4.735-1.547A9.957 9.957 0 0 0 12.004 22c5.523 0 10.004-4.48 10.004-9.996C22.008 6.48 17.527 2 12.004 2zm0 18.204c-1.683 0-3.25-.494-4.57-1.343l-.328-.21-2.805.916.924-2.738-.226-.341a8.17 8.17 0 0 1-1.207-4.484c0-4.53 3.687-8.216 8.212-8.216 4.526 0 8.212 3.686 8.212 8.216 0 4.53-3.686 8.216-8.212 8.216z"/>
              </svg>
              <div className="btn-text">
                <span className="btn-title">WhatsApp</span>
                <span className="btn-sub">{phone}</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="btn-arrow" />
          </a>

          {/* Email Button */}
          <a
            href={emailUrl}
            className="simple-contact-btn email"
          >
            <div className="btn-left">
              <Mail size={22} />
              <div className="btn-text">
                <span className="btn-title">Email</span>
                <span className="btn-sub">{email}</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="btn-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
