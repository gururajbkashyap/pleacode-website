import { useState, useEffect } from 'react';

const STATS = [
  { num: '98%', label: 'File Accuracy', subtext: 'Meticulous medical record synthesis.' },
  { num: '24h', label: 'Operational Speed', subtext: 'Rapid turnaround on critical file reviews.' },
  { num: '15+', label: 'Premier Partners', subtext: "Trusted by the nation's leading firms." },
  { num: '82%', label: 'Settlement Rate', subtext: 'Higher likelihood of favorable outcomes.' },
  { num: '10K+', label: 'Cases Processed', subtext: 'Proven track record of excellence.' },
];

export default function HeroStatSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STATS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="stat-slider">
      {STATS.map((s, i) => (
        <div key={s.label} className={`stat-slide ${i === active ? 'active' : ''}`}>
          <span className="stat-num">{s.num}</span>
          <span className="stat-label">{s.label}</span>
          <span className="stat-subtext">{s.subtext}</span>
        </div>
      ))}
    </div>
  );
}
