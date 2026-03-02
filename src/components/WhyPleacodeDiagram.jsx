export default function WhyPleacodeDiagram() {
  return (
    <svg viewBox="0 0 800 600" className="why-pleacode-diagram" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2E8CFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1E6FD9', stopOpacity: 0.9 }} />
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect className="diagram-bg" width="800" height="600" fill="#F8F9FB" opacity="0.4" />
      <pattern id="docLines" x="0" y="0" width="800" height="24" patternUnits="userSpaceOnUse">
        <line x1="0" y1="12" x2="800" y2="12" stroke="#E5E9F0" strokeWidth="1" opacity="0.4" />
      </pattern>
      <rect width="800" height="600" fill="url(#docLines)" opacity="0.6" />
      <g transform="translate(100, 140)">
        <rect x="0" y="0" width="72" height="88" fill="white" stroke="#2E8CFF" strokeWidth="2" rx="4" opacity="0.95" />
        <rect x="6" y="6" width="72" height="88" fill="white" stroke="#2E8CFF" strokeWidth="2" rx="4" opacity="0.85" />
        <rect x="12" y="12" width="72" height="88" fill="white" stroke="#2E8CFF" strokeWidth="2" rx="4" opacity="0.8" />
        <line x1="22" y1="28" x2="62" y2="28" stroke="#2E8CFF" strokeWidth="1.5" opacity="0.6" />
        <line x1="22" y1="42" x2="55" y2="42" stroke="#2E8CFF" strokeWidth="1.5" opacity="0.6" />
        <line x1="22" y1="56" x2="58" y2="56" stroke="#2E8CFF" strokeWidth="1.5" opacity="0.6" />
        <circle cx="48" cy="108" r="14" fill="#2E8CFF" opacity="0.9" />
        <text x="48" y="113" fontFamily="Arial, sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">+</text>
        <text x="48" y="-8" fontFamily="Arial, sans-serif" fontSize="11" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Intake + Records</text>
      </g>
      <g transform="translate(320, 240)">
        <rect x="-90" y="-50" width="180" height="100" rx="12" fill="url(#primaryGrad)" opacity="0.95" />
        <text x="0" y="-8" fontFamily="Arial, sans-serif" fontSize="18" fill="white" textAnchor="middle" fontWeight="700">Pleacode</text>
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="11" fill="white" textAnchor="middle" opacity="0.95">AI Platform for PI</text>
        <rect x="-50" y="26" width="100" height="18" rx="4" fill="white" opacity="0.25" />
        <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="9" fill="white" textAnchor="middle">Proactive • Secure • Trusted</text>
      </g>
      <g transform="translate(580, 100)">
        <rect x="0" y="0" width="110" height="130" fill="white" stroke="#2E8CFF" strokeWidth="2" rx="4" opacity="0.98" />
        <line x1="14" y1="22" x2="96" y2="22" stroke="#2E8CFF" strokeWidth="1.5" opacity="0.7" />
        <line x1="14" y1="38" x2="82" y2="38" stroke="#2E8CFF" strokeWidth="1.2" opacity="0.6" />
        <line x1="14" y1="52" x2="90" y2="52" stroke="#2E8CFF" strokeWidth="1.2" opacity="0.6" />
        <line x1="14" y1="70" x2="96" y2="70" stroke="#2E8CFF" strokeWidth="1" opacity="0.5" />
        <line x1="14" y1="84" x2="88" y2="84" stroke="#2E8CFF" strokeWidth="1" opacity="0.5" />
        <circle cx="92" cy="118" r="12" fill="#2E8CFF" />
        <text x="92" y="122" fontFamily="Arial, sans-serif" fontSize="8" fill="white" textAnchor="middle" fontWeight="700">LEGAL</text>
        <text x="55" y="-10" fontFamily="Arial, sans-serif" fontSize="11" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Demand</text>
      </g>
      <g transform="translate(140, 460)">
        <line x1="0" y1="0" x2="520" y2="0" stroke="#E5E9F0" strokeWidth="2" opacity="0.8" />
        <line x1="0" y1="0" x2="520" y2="0" stroke="url(#primaryGrad)" strokeWidth="2.5" opacity="0.5" strokeDasharray="8 6" />
        <circle cx="0" cy="0" r="7" fill="url(#primaryGrad)" />
        <circle cx="130" cy="0" r="7" fill="url(#primaryGrad)" />
        <circle cx="260" cy="0" r="7" fill="url(#primaryGrad)" />
        <circle cx="390" cy="0" r="7" fill="url(#primaryGrad)" />
        <circle cx="520" cy="0" r="9" fill="url(#primaryGrad)" filter="url(#softGlow)" />
        <text x="0" y="-14" fontFamily="Arial, sans-serif" fontSize="12" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Intake</text>
        <text x="130" y="-14" fontFamily="Arial, sans-serif" fontSize="12" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Treatment</text>
        <text x="260" y="-14" fontFamily="Arial, sans-serif" fontSize="12" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Demand</text>
        <text x="390" y="-14" fontFamily="Arial, sans-serif" fontSize="12" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Settlement</text>
        <text x="520" y="-14" fontFamily="Arial, sans-serif" fontSize="11" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Outcome</text>
      </g>
      <g transform="translate(660, 420)">
        <circle cx="0" cy="0" r="40" fill="url(#primaryGrad)" opacity="0.9" />
        <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="32" fill="white" textAnchor="middle" fontWeight="bold">$</text>
        <g transform="translate(48, -28)">
          <circle cx="0" cy="0" r="16" fill="#2E8CFF" />
          <path d="M -6 -2 L -1 3 L 7 -5" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="0" y="52" fontFamily="Arial, sans-serif" fontSize="11" fill="#2E8CFF" textAnchor="middle" fontWeight="600">Settlement</text>
      </g>
      <path d="M 172 200 Q 260 220 320 200" fill="none" stroke="#2E8CFF" strokeWidth="2" strokeDasharray="6 5" opacity="0.5" />
      <polygon points="318,198 324,200 318,202" fill="#2E8CFF" opacity="0.6" />
      <path d="M 410 250 Q 520 200 580 165" fill="none" stroke="#2E8CFF" strokeWidth="2" strokeDasharray="6 5" opacity="0.5" />
      <polygon points="578,163 584,165 580,170" fill="#2E8CFF" opacity="0.6" />
      <path d="M 520 460 Q 620 430 660 420" fill="none" stroke="#2E8CFF" strokeWidth="2" strokeDasharray="6 5" opacity="0.5" />
      <polygon points="658,418 664,420 660,425" fill="#2E8CFF" opacity="0.6" />
    </svg>
  );
}
