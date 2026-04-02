export default function JobDesign() {
  return (
    <section className="page-content jobdesign-page">
      <div className="page-wrapper">
        <header className="job-header">
          <h1>Full Stack Developer</h1>
          <div className="meta-pill-container">
            <span className="meta-pill">Technical Team</span>
            <span className="meta-pill">In Office</span>
            <span className="meta-pill">Full-Time</span>
          </div>
        </header>
        <div className="content-grid">
          <div className="description-area">
            <h2>About the role</h2>
            <p>We are looking for a Full Stack Developer with 1–2 years of hands-on experience to join our growing product and engineering team.</p>
            <h2>Requirements</h2>
            <ul>
              <li>1–2 years experience in web development</li>
              <li>React, Node.js, or similar stack</li>
              <li>Strong communication and collaboration</li>
            </ul>
          </div>
          <div className="application-card">
            <h3>Apply for this role</h3>
            <p>Submit your details and we&apos;ll get back to you.</p>
            <form name="job-application" method="POST" data-netlify="true" action="/">
              <input type="hidden" name="form_type" value="job" />
              <input type="hidden" name="role" value="Full Stack Developer" />
              <input type="hidden" name="form-name" value="job-application" />
              <div className="form-group">
                <label htmlFor="job-name">Full Name</label>
                <input id="job-name" type="text" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="job-email">Email</label>
                <input id="job-email" type="email" name="email" required />
              </div>
              <div className="form-group resume-note">
                <p className="resume-email-text">Send your resume to <a href="mailto:info@pleacode.com">info@pleacode.com</a></p>
              </div>
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
