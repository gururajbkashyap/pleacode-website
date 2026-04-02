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
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerView);
  const activePage = Math.floor(testimonialIndex / itemsPerView);
  const visibleTestimonials = TESTIMONIALS.slice(testimonialIndex, testimonialIndex + itemsPerView);

  const goPrev = () => setTestimonialIndex((i) => Math.max(0, i - itemsPerView));
  const goNext = () => setTestimonialIndex((i) => Math.min(maxIndex, i + itemsPerView));
  const goToPage = (page) => setTestimonialIndex(Math.min(maxIndex, page * itemsPerView));

  return (
    <section className="page-content customers-page">
      <div className="customers-hero">
        <h1>Customer Stories</h1>
        <p>See how leading personal injury firms use Pleacode to scale and win.</p>
      </div>

      <div className="results-section">
        <p className="results-subtitle">RESULTS</p>
        <h2>What firms are seeing</h2>
        <p className="results-tagline">A quick snapshot of outcomes personal injury practices report after adopting Pleacode.</p>

        <div className="results-grid">
          <div className="result-card">
            <div className="result-icon">⏱️</div>
            <div className="result-body">
              <p className="result-firm">McCready Law</p>
              <h3>Hundreds of hours saved</h3>
              <p className="result-text">By automating demand letter drafts and medical chronology summaries, this firm cut prep time by over 40%. Their team now spends more time negotiating and less on repetitive drafting checks.</p>
              <span className="result-location">Illinois</span>
            </div>
          </div>

          <div className="result-card">
            <div className="result-icon">📈</div>
            <div className="result-body">
              <p className="result-firm">Hartley PI Group</p>
              <h3>Stronger settlement outcomes</h3>
              <p className="result-text">Demand letters are now data-backed with a consistent structure, making the case narrative clearer for adjusters. This led to a noticeable increase in policy-limit offers in less than 2 months.</p>
              <span className="result-location">Texas</span>
            </div>
          </div>

          <div className="result-card">
            <div className="result-icon">🚦</div>
            <div className="result-body">
              <p className="result-firm">Sanders & Cole</p>
              <h3>Improved adjuster response</h3>
              <p className="result-text">Structured chronologies and precise damages summaries reduced adjuster questions by 50% in the first quarter. Faster responses keep cases moving and minimize evidence lag.</p>
              <span className="result-location">Georgia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <p className="testimonials-subtitle">TESTIMONIALS</p>
        <h2 className="testimonials-title">What our customers say</h2>
        <p className="testimonials-tagline">Trusted by personal injury teams to reduce drafting time, improve settlement outcomes, and scale operations.</p>

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

        <div className="testimonial-dots">
          {Array.from({ length: totalPages }).map((_, page) => (
            <button
              key={page}
              type="button"
              className={`testimonial-dot ${page === activePage ? 'active' : ''}`}
              onClick={() => goToPage(page)}
              aria-label={`Go to testimonials page ${page + 1}`}>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
