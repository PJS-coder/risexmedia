'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Asterisk, 
  Instagram, 
  Users, 
  Clapperboard, 
  Megaphone, 
  Palette, 
  Globe, 
  MessageCircle, 
  Heart, 
  Play,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import ScrollMotion from './ScrollMotion';
import ContactModal from './ContactModal';

const serviceIcons = [MessageCircle, Users, Clapperboard, Instagram, Megaphone, Palette, Globe];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <main>
      <ScrollMotion />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />

      {/* Hero Section */}
      <section className="hero" id="home">
        <nav>
          <a className="logo" href="#home">
            <img className="brand-logo" src="/risexmedia-logo.png" alt="RiseXMedia logo" width={40} height={36} />
            rise<span className="word-x">x</span>media<span className="registered">®</span>
          </a>
          <div className="navlinks">
            <a href="#studio">Studio</a>
            <a href="#services">What we do</a>
            <a href="#approach">Our approach</a>
            <a href="#contact" onClick={openContact}>Contact</a>
          </div>
          <button className="button white" onClick={openContact} type="button">
            Let’s talk <ArrowUpRight size={17} />
          </button>
        </nav>

        <div className="campaign-hero">
          <div className="campaign-title">
            <p className="eyebrow"><span /> HEY, WE’RE RISEXMEDIA</p>
            <h1>Social.<br />Creative.<br /><em>Unignorable.</em></h1>
          </div>

          <div className="campaign-art">
            <img 
              src="/hero-megaphone.png" 
              alt="Sculptural chrome and red megaphone" 
              width={1254} 
              height={1254} 
              fetchPriority="high"
            />
            <span className="art-note">TURN UP YOUR BRAND.</span>
          </div>

          <div className="campaign-copy">
            <span className="campaign-spark" aria-hidden="true">
              <Asterisk size={38} strokeWidth={1.4} />
            </span>
            <h2>Attention is good.<br /> Connection is<br /> <span>everything.</span></h2>
            <p>We bring brands and creators closer to their audience through bold content, smart strategy, and partnerships that fit.</p>
            <button className="button white" onClick={openContact} type="button">
              Let’s make some noise <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="ticker" aria-label="Our disciplines">
        <div>
          SOCIAL MEDIA <Asterisk /> INFLUENCER MARKETING <Asterisk /> VIDEO & CONTENT <Asterisk /> BRAND STRATEGY <Asterisk />
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="studio section">
        <p className="eyebrow"><span /> THIS IS RISEXMEDIA</p>
        <div className="studio-grid">
          <h2>The world doesn’t need<br />more noise.<br />It needs <span className="underlined">your voice.</span></h2>
          <div className="studio-copy">
            <p>We bring social strategy, influencer partnerships, video editing, and design together to help brands and creators build a presence that feels unmistakably theirs.</p>
            <p className="muted">From the first idea to the final pixel, we make every move mean something.</p>
            <a href="#approach" className="text-link">Get to know our approach <ArrowUpRight size={19} /></a>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="clients" className="clients" aria-label="Brands we have worked with">
        <p className="eyebrow"><span /> BRANDS WE’VE WORKED WITH</p>
        <div className="client-names">
          {[
            ['Probo', 'probo.avif'],
            ['Duolingo', 'duolingo.svg'],
            ['Profee', 'profee.png'],
            ['Alps Goodness', 'alps-goodness.png']
          ].map(([name, file]) => (
            <div className={name === 'Duolingo' ? 'client-card duo-card' : 'client-card'} key={name}>
              <img src={'/brands/' + file} alt={name} width={180} height={76} />
              {name === 'Duolingo' && <span className="duo-name">duolingo</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <p className="eyebrow"><span /> WHAT WE DO</p>
        <div className="section-heading">
          <h2>Your next move.<br /><span className="muted">Our kind of work.</span></h2>
          <p>One creative partner.<br />A whole new level of possibility.</p>
        </div>

        <div className="service-list">
          {[
            ['01', 'Social media marketing', 'From the content calendar to the comments section, we help your brand show up consistently and build a community that cares.', 'Social strategy · Content planning · Publishing · Community management · Reporting'],
            ['02', 'Influencer marketing', 'Connect your brand with creators who fit your audience. We bring the partnership together, from the first brief to the campaign wrap-up.', 'Creator discovery · Outreach · Campaign briefs · Collaboration management · Campaign reporting'],
            ['03', 'Video editing & production', 'Turn raw footage and fresh ideas into videos people want to watch, with a clear story and a distinctive point of view.', 'Instagram Reels · YouTube Shorts · Long-form editing · Motion graphics · Subtitles · Ad creatives'],
            ['04', 'Instagram profile management', 'We manage many Instagram influencer profiles, helping creators stay consistent while keeping their individual voice front and centre.', 'Profile optimisation · Content calendars · Posting · Audience engagement · Brand collaboration coordination'],
            ['05', 'Paid social & campaigns', 'Bring your message to the right audience with focused campaigns, thoughtful creative, and ongoing measurement.', 'Meta ads · Audience planning · Creative testing · Campaign optimisation · Performance reporting'],
            ['06', 'Content creation & branding', 'Give every post, story, and campaign a recognisable identity with ideas and design that belong to your brand.', 'Copywriting · Graphic design · Carousels · Stories · UGC direction · Brand identity'],
            ['07', 'Websites & digital', 'Give your audience a clear next step with a digital home designed around your brand and your goals.', 'Website design · Development · Campaign landing pages']
          ].map(([n, title, desc, tags], index) => {
            const Icon = serviceIcons[index];
            return (
              <details key={n} className="service">
                <summary>
                  <span className="service-no">/{n}</span>
                  <span className="service-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <span className="service-toggle">+</span>
                </summary>
                <div className="service-detail">
                  <p>{desc}</p>
                  <span>{tags}</span>
                  <button onClick={openContact} className="text-link text-link-btn" type="button">
                    Let’s make it happen <ArrowUpRight size={18} />
                  </button>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* Creator Section */}
      <section className="creator-section section">
        <div>
          <p className="eyebrow"><span /> FOR THE PEOPLE BEHIND THE PROFILES</p>
          <h2>You create.<br />We handle <span className="muted">the rest.</span></h2>
        </div>
        <div className="creator-copy">
          <div className="creator-icons" aria-hidden="true">
            <span><Instagram /></span>
            <span><Heart /></span>
            <span><Play /></span>
            <span><MessageCircle /></span>
          </div>
          <p className="creator-lead">We manage many Instagram influencer profiles.</p>
          <p>From planning and editing to publishing and community management, we help creators keep their profiles active, cohesive, and true to their voice.</p>
          <button className="text-link text-link-btn" onClick={openContact} type="button">
            Talk about your profile <ArrowUpRight size={19} />
          </button>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="manifesto">
        <div className="manifesto-top">
          <span>THE RISEX MINDSET</span>
          <span>NO BLENDING IN.</span>
        </div>
        <p>Less ordinary.<br />More <span>extra</span>ordinary.</p>
        <div className="manifesto-bottom">
          <Asterisk size={62} strokeWidth={1.3} />
          <span>Different isn’t a look.<br />It’s a way of thinking.</span>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach section" id="approach">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> HOW WE MAKE IT HAPPEN</p>
            <h2>Big ideas.<br />Thoughtful execution.</h2>
          </div>
          <p>Good chemistry. Honest conversations.<br />Work we’re all proud to put out.</p>
        </div>
        <div className="steps">
          {[
            ['01', 'Find the spark.', 'We get close to your brand, your audience, and what you want to change. The right questions come first.'],
            ['02', 'Push the idea.', 'We explore, challenge, and refine until we find a direction with a reason to exist.'],
            ['03', 'Make it real.', 'We bring the idea to life with care in every detail, ready for your brand’s next chapter.']
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="step-num">{n}<ArrowUpRight size={20} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact">
        <div className="footer-top">
          <p className="eyebrow"><span /> GOT SOMETHING IN MIND?</p>
          <span>LET’S MAKE SOME NOISE.</span>
        </div>

        <button onClick={openContact} className="big-cta big-cta-btn" type="button">
          Let’s rise<span>together.</span>
          <ArrowUpRight />
        </button>

        {/* Direct Footer Contact Cards */}
        <div className="footer-contact-cards">
          <a 
            href={`https://wa.me/918076241590?text=${encodeURIComponent('Hi RiseXMedia team, I would like to connect and discuss a project!')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-contact-card"
          >
            <div className="footer-card-icon whatsapp">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.537 1.948.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.806-5.77-5.806zm3.385 8.167c-.144.405-.837.774-1.171.823-.312.043-.699.063-2.128-.528-1.503-.622-2.483-2.15-2.558-2.25-.075-.101-.61-8.11-.61-1.551 0-.74.388-1.106.526-1.253.138-.147.301-.184.402-.184.101 0 .202.001.29.006.094.005.22-.036.344.262.129.311.44 1.074.478 1.152.038.078.064.168.013.269-.051.101-.077.164-.153.253-.076.089-.16.198-.228.266-.076.076-.156.16-.067.313.09.152.399.658.857 1.066.59.524 1.088.687 1.241.763.153.076.241.064.33-.038.089-.102.38-.442.482-.594.101-.152.203-.127.341-.076.139.051.886.417 1.038.493.153.076.254.114.292.177.038.064.038.368-.106.773z"/>
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.99.584 3.844 1.597 5.411L2 22l4.735-1.547A9.957 9.957 0 0 0 12.004 22c5.523 0 10.004-4.48 10.004-9.996C22.008 6.48 17.527 2 12.004 2zm0 18.204c-1.683 0-3.25-.494-4.57-1.343l-.328-.21-2.805.916.924-2.738-.226-.341a8.17 8.17 0 0 1-1.207-4.484c0-4.53 3.687-8.216 8.212-8.216 4.526 0 8.212 3.686 8.212 8.216 0 4.53-3.686 8.216-8.212 8.216z"/>
              </svg>
            </div>
            <div className="footer-card-info">
              <span className="footer-card-tag">WhatsApp Chat</span>
              <span className="footer-card-value">+91 8076241590</span>
            </div>
            <ArrowUpRight size={18} className="footer-card-arrow" />
          </a>

          <a 
            href="mailto:Risexmedia6@gmail.com?subject=Project%20Inquiry%20-%20RiseXMedia" 
            className="footer-contact-card"
          >
            <div className="footer-card-icon email">
              <Mail size={22} />
            </div>
            <div className="footer-card-info">
              <span className="footer-card-tag">Official Email</span>
              <span className="footer-card-value">Risexmedia6@gmail.com</span>
            </div>
            <ArrowUpRight size={18} className="footer-card-arrow" />
          </a>
        </div>

        <div className="footer-bottom">
          <a className="logo" href="#home">
            <img className="brand-logo" src="/risexmedia-logo.png" alt="RiseXMedia logo" width={40} height={36} />
            rise<span className="word-x">x</span>media®
          </a>
          <span>© {new Date().getFullYear()} RiseXMedia</span>
          <a href="https://www.instagram.com/risexmedia/" target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight size={16} />
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* Floating Quick WhatsApp / Contact Button */}
      <button 
        className="floating-contact-btn" 
        onClick={openContact}
        aria-label="Contact RiseXMedia on WhatsApp or Email"
        title="Contact on WhatsApp or Email"
        type="button"
      >
        <span className="floating-ping" />
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.983.537 1.948.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.806-5.77-5.806zm3.385 8.167c-.144.405-.837.774-1.171.823-.312.043-.699.063-2.128-.528-1.503-.622-2.483-2.15-2.558-2.25-.075-.101-.61-8.11-.61-1.551 0-.74.388-1.106.526-1.253.138-.147.301-.184.402-.184.101 0 .202.001.29.006.094.005.22-.036.344.262.129.311.44 1.074.478 1.152.038.078.064.168.013.269-.051.101-.077.164-.153.253-.076.089-.16.198-.228.266-.076.076-.156.16-.067.313.09.152.399.658.857 1.066.59.524 1.088.687 1.241.763.153.076.241.064.33-.038.089-.102.38-.442.482-.594.101-.152.203-.127.341-.076.139.051.886.417 1.038.493.153.076.254.114.292.177.038.064.038.368-.106.773z"/>
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.99.584 3.844 1.597 5.411L2 22l4.735-1.547A9.957 9.957 0 0 0 12.004 22c5.523 0 10.004-4.48 10.004-9.996C22.008 6.48 17.527 2 12.004 2zm0 18.204c-1.683 0-3.25-.494-4.57-1.343l-.328-.21-2.805.916.924-2.738-.226-.341a8.17 8.17 0 0 1-1.207-4.484c0-4.53 3.687-8.216 8.212-8.216 4.526 0 8.212 3.686 8.212 8.216 0 4.53-3.686 8.216-8.212 8.216z"/>
        </svg>
        <span className="floating-text">Chat with us</span>
      </button>
    </main>
  );
}
