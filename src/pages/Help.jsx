export default function Help() {
  return (
    <section className="page-content help-page">
      <div className="help-hero">
        <h1>Help Center</h1>
        <p>Find answers and get support for Pleacode products.</p>
      </div>
      <div className="help-section">
        <h2>Getting Started</h2>
        <div className="help-grid">
          <div className="help-card">
            <h3>Getting Started</h3>
            <p>Schedule a demo, start a trial, and set up an onboarding call.</p>
          </div>
          <div className="help-card">
            <h3>Account & Billing</h3>
            <p>Access your account settings, manage users, and view billing history.</p>
          </div>
          <div className="help-card">
            <h3>Troubleshooting</h3>
            <p>Get technical support and learn how to fix connectivity and other issues.</p>
          </div>
        </div>
      </div>
      <div className="help-section">
        <h2>Browse by Product</h2>
        <div className="help-grid">
          {['AI Drafts™', 'Case Companion™', 'Workflow Processes', 'Express Demands™', 'Demands™', 'MedChrons™'].map((name) => (
            <div key={name} className="help-card">
              <h3>{name}</h3>
              <p>Product support and documentation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
