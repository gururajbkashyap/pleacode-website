import { useState } from 'react';

const TESTIMONIALS = [
  {
    headline: 'Drafts come back quicker than expected',
    quote: 'We send the records over and get a structured draft back within a day or two. It still needs a review, but it saves us the time of starting from scratch on every file.',
    client: 'Arjun Mehta, Personal Injury Firm (Mumbai, India)',
  },
  {
    headline: 'Chronology is easier to follow now',
    quote: 'The treatment timeline is laid out clearly, which makes it easier when we are putting the demand together. Less time hunting through records for dates.',
    client: 'Priya Nair, Motor Vehicle & PI Practice (Bengaluru, India)',
  },
  {
    headline: 'Fewer drafts going back and forth',
    quote: 'We used to do three or four rounds of edits on most demands. Now it is usually one or two. The structure is mostly right on the first pass.',
    client: 'R. L., Personal Injury Law Firm (North Carolina)',
  },
  {
    headline: 'Works for settlement and litigation both',
    quote: 'The demand holds up whether we settle or go further. We are not rebuilding the narrative from scratch when a case moves to litigation.',
    client: 'Sanjay Iyer, Personal Injury & Premises Liability (Chennai, India)',
  },
  {
    headline: 'Manageable for a small team',
    quote: 'We do not have the bandwidth to hire just for demand drafting. Pleacode fills that gap without adding headcount. It has been practical for our size.',
    client: 'S. Reddy, Personal Injury Firm (Michigan)',
  },
  {
    headline: 'Consistent structure across all files',
    quote: 'Every demand comes out in the same format — liability, treatment, damages in order. Our team knows what to expect and reviews go faster.',
    client: 'Deepa Krishnamurthy, Personal Injury Law Firm (Hyderabad, India)',
  },
  {
    headline: 'Onboarding was straightforward',
    quote: 'Getting started did not take long. We had a few questions and the team was responsive. We were using it on real files within the first couple of weeks.',
    client: 'Karan Patel, PI & Workers Comp Practice (Illinois)',
  },
  {
    headline: 'Helps keep cases from sitting idle',
    quote: 'When demands are ready faster, cases move faster. We are not waiting on drafts as a bottleneck the way we used to be.',
    client: 'Meera Chandran, Personal Injury Firm (Pune, India)',
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
