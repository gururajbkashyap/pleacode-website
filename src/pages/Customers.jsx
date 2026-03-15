import { useState } from 'react';

const TESTIMONIALS = [
  {
    headline: 'Faster turnaround on demand letters',
    quote: 'We used to spend a lot of time pulling together medical records and drafting demands. With Pleacode we get a solid first draft in a few days. It lets us send out demands sooner and keep more cases moving.',
    client: 'R. Sharma, Personal Injury Firm (Ohio)',
  },
  {
    headline: 'Medical chronology that actually lines up',
    quote: 'The chronology is clear and matches how we present damages in the demand. Adjusters don’t have to hunt for dates or treatment—it’s all in one place. That helps move negotiations along.',
    client: 'Priya M., Personal Injury & Motor Vehicle Practice (Florida)',
  },
  {
    headline: 'Less back-and-forth on revisions',
    quote: 'First drafts are structured the way we like—liability, treatment timeline, damages. We still review everything, but we’re doing fewer rounds of edits. That’s been a real time-saver on volume.',
    client: 'R. L., Personal Injury Law Firm (North Carolina)',
  },
  {
    headline: 'Useful for both settlement and trial prep',
    quote: 'When we do settle, the demand gives us a clear paper trail. When we don’t, the same structure works for litigation. We’re not redoing the story from scratch.',
    client: 'A. Krishnan, Personal Injury & Premises Liability (Georgia)',
  },
  {
    headline: 'Scales with our caseload',
    quote: 'We’re a small firm. We can’t add a full-time person for demands right now. Pleacode lets us handle more PI cases without that step. So far it’s been a good fit.',
    client: 'S. Reddy, Personal Injury Firm (Michigan)',
  },
  {
    headline: 'Consistent format across cases',
    quote: 'Every demand follows the same structure—liability, treatment, damages. Our team knows where to find things, and we look more put-together when we send to carriers.',
    client: 'D. W., Personal Injury Law Firm (Texas)',
  },
  {
    headline: 'Good support when we needed it',
    quote: 'Onboarding was straightforward and we had a few questions early on. The team walked us through the workflow and we were up and running within a couple of weeks.',
    client: 'K. Patel, Personal Injury & Workers’ Comp (Illinois)',
  },
  {
    headline: 'Helps us stay on top of deadlines',
    quote: 'We get reminders when records or drafts are due. For a busy PI practice that’s helpful—we don’t want cases sitting in a queue because we forgot to follow up.',
    client: 'M. C., Personal Injury Firm (Pennsylvania)',
  },
];

export default function Customers() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const itemsPerView = 2;
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);
  const visibleTestimonials = TESTIMONIALS.slice(testimonialIndex, testimonialIndex + itemsPerView);

  const goPrev = () => setTestimonialIndex((i) => Math.max(0, i - 1));
  const goNext = () => setTestimonialIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="page-content customers-page">
      <div className="customers-hero">
        <h1>Customer Stories</h1>
        <p>See how leading personal injury firms use Pleacode to scale and win.</p>
      </div>

      <div className="stories-section">
        <h2>All Customer Stories</h2>
        <div className="story-grid">
          <div className="story-card">
            <h3>Faster settlements with MedChrons</h3>
            <p>How one firm reduced demand turnaround by 40%.</p>
          </div>
          <div className="story-card">
            <h3>Scaling without the headcount</h3>
            <p>AI Drafts and Workflow Processes at a 50-attorney practice.</p>
          </div>
          <div className="story-card">
            <h3>Clearer medical timelines for motor vehicle cases</h3>
            <p>A PI firm uses structured chronologies so adjusters see treatment and damages in one place—fewer follow-up requests.</p>
          </div>
          <div className="story-card">
            <h3>Demand letters that match our strategy</h3>
            <p>One practice relies on Pleacode for first drafts that follow their liability and damages framework, then they refine and send.</p>
          </div>
          <div className="story-card">
            <h3>Keeping volume PI cases moving</h3>
            <p>Small firm with a heavy caseload uses the platform to avoid bottlenecks on demand prep and stay on top of deadlines.</p>
          </div>
          <div className="story-card">
            <h3>From intake to demand in less time</h3>
            <p>Firm cut the time between file intake and sending a demand by getting draft chronologies and demand outlines sooner.</p>
          </div>
          <div className="story-card">
            <h3>Fewer revisions on first drafts</h3>
            <p>A PI practice found that demand drafts came back with liability, treatment, and damages already in order—so they spend less time rewriting.</p>
          </div>
          <div className="story-card">
            <h3>Slip-and-fall and premises cases</h3>
            <p>Firm handling premises liability uses the same workflow for demand prep so every case type gets a consistent, clear presentation.</p>
          </div>
          <div className="story-card">
            <h3>Ready for mediation and trial</h3>
            <p>When cases don’t settle early, one firm uses the same chronology and demand structure as a base for mediation and litigation prep.</p>
          </div>
          <div className="story-card">
            <h3>Onboarding that didn’t slow us down</h3>
            <p>New firm was up and running within a few weeks; support helped them map their existing process to the platform.</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2 className="testimonials-title">What our customers say</h2>
        <div className="testimonials-carousel-wrap">
          <button type="button" className="testimonial-arrow testimonial-arrow-prev" onClick={goPrev} aria-label="Previous" disabled={testimonialIndex === 0}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="testimonials-track">
            {visibleTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <h3 className="testimonial-headline">{t.headline}</h3>
                <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                <p className="testimonial-client">{t.client}</p>
              </div>
            ))}
          </div>
          <button type="button" className="testimonial-arrow testimonial-arrow-next" onClick={goNext} aria-label="Next" disabled={testimonialIndex >= maxIndex}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
