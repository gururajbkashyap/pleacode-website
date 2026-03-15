import { Link } from 'react-router-dom';

const JOBS = [
  { title: 'Full Stack Developer', team: 'Technical Team', location: 'In Office', type: 'Full-Time', path: '/jobdesign' },
];

export default function Careers() {
  return (
    <section className="page-content careers-page">
      <div className="hero hero-careers">
        <h1>Careers at Pleacode</h1>
        <p>Join us in closing the justice gap with technology and AI.</p>
      </div>
      <div className="jobs-section">
        <div className="section-label">Open roles</div>
        <div className="job-list">
          {JOBS.map((job) => (
            <Link key={job.title} to={job.path} className="job-item">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.team} · {job.location} · {job.type}</p>
              </div>
              <span className="arrow-icon">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
