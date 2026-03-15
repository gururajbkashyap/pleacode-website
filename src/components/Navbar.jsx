import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const PRODUCTS = [
  { name: 'AI Drafts', desc: 'Draft any document in minutes' },
  { name: 'Express Demands', desc: 'High-quality demands in minutes by AI' },
  { name: 'Demands', desc: 'AI demands with professional review' },
  { name: 'MedChrons', desc: 'Trusted medical chronology with AI' },
  { name: 'Workflow Processes', desc: 'Surface insights and automate workflows' },
  { name: 'Case Companion', desc: 'AI assistant built for PI' },
  { name: 'Case Preparation', desc: 'Find priors and resolve missing information' },
];

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/" className="logo">
        <span className="logo-crop"><img src="/logo.png?v=4" alt="Pleacode Logo" /></span>
      </Link>
      <div className="nav-links">
        <div className="nav-dropdown">
          <Link to="/#platform">Products</Link>
          <div className="dropdown-menu">
            <div className="dropdown-header">THE CLAIMS INTELLIGENCE PLATFORM</div>
            <div className="dropdown-content">
              <div className="dropdown-column">
                {PRODUCTS.slice(0, 3).map((p) => (
                  <Link key={p.name} to="/#platform" className="dropdown-item">
                    <div className="dropdown-item-name">{p.name}</div>
                    <div className="dropdown-item-desc">{p.desc}</div>
                  </Link>
                ))}
              </div>
              <div className="dropdown-column">
                {PRODUCTS.slice(3, 7).map((p) => (
                  <Link key={p.name} to="/#platform" className="dropdown-item">
                    <div className="dropdown-item-name">{p.name}</div>
                    <div className="dropdown-item-desc">{p.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="nav-dropdown">
          <Link to="/customers">Customers</Link>
          <div className="dropdown-menu">
            <Link to="/customers" className="dropdown-item">
              <div className="dropdown-item-name">Customer Stories</div>
            </Link>
            <Link to="/help" className="dropdown-item">
              <div className="dropdown-item-name">Help/Questions</div>
            </Link>
          </div>
        </div>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
        <button type="button" className="dark-mode-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <Link to="/#contact" className="nav-cta">Schedule a Call</Link>
      </div>
    </nav>
  );
}
