import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-crop"><img src="/logo.png?v=4" alt="Pleacode Logo" /></span>
          </Link>
          <p className="footer-mission">
            Our mission is to close the justice gap using technology and AI. We empower personal injury lawyers and victims to get the justice they deserve.
          </p>
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><Link to="/#platform">AI Drafts</Link></li>
            <li><Link to="/#platform">Express Demands</Link></li>
            <li><Link to="/#platform">Demands</Link></li>
            <li><Link to="/#platform">MedChrons</Link></li>
            <li><Link to="/#platform">Workflow Processes</Link></li>
            <li><Link to="/#platform">Case Companion</Link></li>
            <li><Link to="/#platform">Case Preparation</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customers</h4>
          <ul>
            <li><Link to="/customers">Customer Stories</Link></li>
            <li><Link to="/help">Help/Questions</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">Copyright 2026 @ Pleacode Inc</div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Conditions</a>
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
