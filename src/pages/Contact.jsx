export default function Contact() {
  return (
    <section className="page-content contact-page">
      <div className="contact-hero">
        <h1>Connect with us.</h1>
        <p>Expert support for elite legal operations. Reach out to our team in Cuttack.</p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="icon-circle">📧</div>
          <h3>Email</h3>
          <p>General inquiries</p>
          <a href="mailto:info.pleacode@gmail.com">info.pleacode@gmail.com</a>
        </div>
        <div className="card">
          <div className="icon-circle">📍</div>
          <h3>Office</h3>
          <p>Cuttack, Odisha</p>
          <address>Pleacode Inc.</address>
        </div>
      </div>
    </section>
  );
}
