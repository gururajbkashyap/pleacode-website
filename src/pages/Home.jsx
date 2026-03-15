import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroStatSlider from '../components/HeroStatSlider';
import WhyPleacodeDiagram from '../components/WhyPleacodeDiagram';
import Slideshow from '../components/Slideshow';

const WHY_ITEMS = [
  { icon: 'expand', text: 'The 1st proactive AI platform for personal injury' },
  { icon: 'grid', text: 'Built on the largest personal injury dataset' },
  { icon: 'message', text: 'A world-class onboarding team' },
  { icon: 'shield', text: 'SOC 2–audited and HIPAA–attested' },
  { icon: 'users', text: 'The best personal injury firms use Pleacode' },
];

const BENEFITS = [
  { title: 'Faster turnaround', desc: '24–72 hours delivery on demand letters and case reviews' },
  { title: 'Consistent formatting', desc: 'Uniform structure across all cases for seamless integration' },
  { title: 'Aligned narratives', desc: 'Demand letters perfectly aligned with medical chronology' },
  { title: 'Clear liability framing', desc: 'Precise damages breakdown and liability presentation' },
  { title: 'Scalable operations', desc: 'Grows with your caseload without increasing overhead' },
  { title: 'Audit-ready documentation', desc: 'Full traceability and structured records for every case' },
  { title: 'Fewer revisions', desc: 'Draft quality that reduces rounds of edits and speeds time to send' },
  { title: 'Dedicated support', desc: 'Expert onboarding and ongoing support tailored to your practice' },
  { title: 'Settlement-focused drafts', desc: 'Demands built to anchor strong positions and accelerate resolution' },
  { title: 'Secure & compliant', desc: 'Enterprise-grade security and compliance for sensitive case data' },
];

const PROCESS_STEPS = [
  'You share intake + medical records (securely)',
  'We analyze liability, treatment timeline & damages',
  'Draft a negotiation-ready demand letter',
  'Internal QA review',
  'Delivery in your preferred format',
];

const PLATFORM_SECTIONS = [
  { title: 'Intake', paragraphs: ['We review every new file the moment it reaches us.', 'Key facts, liability indicators, and coverage details are extracted and organized instantly.', 'Case strengths stand out early, risks are flagged sooner, and nothing slips through the cracks.', 'Your files stay current, structured, and ready for action—without manual follow-ups.'] },
  { title: 'Treatment', paragraphs: ['We track treatment as it unfolds, not after it ends.', 'Medical records, bills, and timelines are continuously reviewed for gaps and inconsistencies.', "You always know where the case stands and what's missing.", 'Stronger narratives begin with complete, well-documented care.'] },
  { title: 'Demand', paragraphs: ['We draft settlement-ready demand letters that insurers take seriously.', "Every letter is tailored to your firm's tone, strategy, and negotiation style.", 'Facts are precise, damages are clearly framed, and leverage is built into every page.', 'Faster drafts. Cleaner reviews. Stronger settlement positions.'] },
  { title: 'Negotiation', paragraphs: ['Our drafting anticipates defense arguments before they arise.', 'Treatment gaps, prior incidents, and negative diagnostics are addressed proactively.', 'Demands are structured to anchor higher settlements and reduce unnecessary pushback.', 'You negotiate from a position of clarity and confidence.'] },
  { title: 'Litigation', paragraphs: ['When cases escalate, your documents are already litigation-ready.', 'We prepare briefs, responses, and chronologies that tell a compelling, consistent story.', 'Every fact is traceable. Every exhibit accounted for.', 'Less rework. Stronger courtroom positioning.'] },
  { title: 'Insights', paragraphs: ['We bring structure to your demand workflow.', 'Bottlenecks become visible. Turnaround improves. Output scales.', 'Handle more cases without adding headcount.', 'Operate leaner. Settle smarter.'] },
];

const ICON_PATHS = {
  expand: 'M1 4v6h6M23 20v-6h-6M20 1h-6v6M4 23h6v-6',
  grid: 'M3 3h18v18H3z M3 9h18 M9 3v18',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
};

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'));
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="line1">Personal Injury.</span><br />
            <span className="line2">Precision</span><br />
            <span className="line3">Architecture.</span>
          </h1>
          <p>Institutional-grade legal operations for the modern personal injury firm. We provide the infrastructure for high-stakes litigation success.</p>
          <Link to="/#contact" className="hero-cta">Request Consultation</Link>
        </div>
        <div className="hero-visual">
          <HeroStatSlider />
        </div>
      </section>

      <section className="why-choose-section fade-in" id="why-choose">
        <div className="section-label">Why Law Firms Choose Pleacode</div>
        <h2 className="section-title">Built for High-Volume Personal Injury Practices</h2>
        <p className="section-subtitle">Use outcome-based language, not skills. We don&apos;t replace attorneys. We give them back their time.</p>
        <div className="benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title} className="benefit-card">
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="strong-line">We don&apos;t replace attorneys. We give them back their time.</div>
      </section>

      <section className="why-pleacode-section fade-in">
        <div className="why-pleacode-content">
          <div className="why-pleacode-visual">
            <div className="map-visual">
              <div className="map-dots">
                <WhyPleacodeDiagram />
              </div>
            </div>
          </div>
          <div className="why-pleacode-list-wrap">
            <h2 className="why-pleacode-title">Why Pleacode?</h2>
            <ul className="why-pleacode-list">
              {WHY_ITEMS.map((item) => (
                <li key={item.text} className="why-pleacode-list-item">
                  <svg className="why-pleacode-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={ICON_PATHS[item.icon]} />
                  </svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="why-pleacode-cta">
          <h3>Join the thousands of PI firms that transformed their practice with Pleacode.</h3>
          <Link to="/#contact" className="cta-button">Schedule a Call</Link>
        </div>
      </section>

      <section className="process-section fade-in">
        <div className="section-label">Our Process</div>
        <h2 className="section-title">Law firms love predictability</h2>
        <p className="section-subtitle">A streamlined workflow that delivers consistent results</p>
        <div className="process-grid">
          {PROCESS_STEPS.map((text, i) => (
            <div key={i} className="process-step">
              <div className="process-number">{i + 1}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="process-note">Revisions included. Confidentiality assured.</div>
      </section>

      <section className="platform-section fade-in" id="platform">
        {PLATFORM_SECTIONS.map((section, i) => (
          <div key={section.title} className="platform-content">
            <div className="platform-text">
              <div className="platform-label">Platform</div>
              <h3 className="platform-title">{section.title}</h3>
              <div className="platform-description">
                {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </div>
            <div className="platform-visual">
              <Slideshow order={i} />
            </div>
          </div>
        ))}
      </section>

      <section className="contact-section fade-in" id="contact">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Connect with our specialists.</h2>
            <p>Schedule a tailored walkthrough of our case management architecture.</p>
          </div>
          <div className="contact-form">
            <form name="contact" method="POST" data-netlify="true" action="/">
              <input type="hidden" name="form_type" value="contact" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-org">Organisation</label>
                <input id="contact-org" type="text" name="organisation" placeholder="Firm Name" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Work Email</label>
                <input id="contact-email" type="email" name="email" placeholder="email@firm.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Mobile number (optional)</label>
                <input id="contact-phone" type="tel" name="contact_number" placeholder="+1 234 567 8900" />
              </div>
              <button type="submit" className="submit-btn">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
