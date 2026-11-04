import React from 'react';
import '../Styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack / Backend Developer',
      company: 'Mounttown Technologies',
      period: 'March 2026 – Present',
      location: 'Coimbatore, India',
      bullets: [
        'Enterprise Backend Architecture: Spearheaded backend engineering for core enterprise modules using Node.js, Express.js, and MongoDB, delivering 25+ secure RESTful API endpoints for corporate workforce management and HRMS.',
        'Multi-Factor Authentication & RBAC: Engineered zero-trust authentication workflows utilizing mobile OTP verification, JWT sessions, and granular 5-tier Role-Based Access Control (Admin, HR, PM, Lead, Employee) ensuring zero privilege escalation.',
        'Database Optimization: Redesigned MongoDB schemas with compound indexing and optimized aggregation pipelines, driving a 35% decrease in API response times across high-volume analytics dashboards.',
        'Automated Email Pipeline: Built modular, reusable EJS email templates integrated with Nodemailer for employee onboarding, credential management, password resets, and critical workflow notifications.',
        'API Testing & Quality: Authored extensive Postman test collections with automated script assertions, reducing regression bugs by 25% prior to staging and production deployments.',
      ],
      skills: ['Node.js', 'Express.js', 'MongoDB', '5-Tier RBAC', 'JWT / OTP', 'Compound Indexing', 'Postman Automation', 'Nodemailer'],
    },
    {
      role: 'Node.js Developer',
      company: 'Selorg Tech Pvt Ltd',
      period: 'July 2024 – February 2026',
      location: 'Chennai, India',
      bullets: [
        'Multi-Project Backend Leadership: Managed backend API architecture for 14+ client and internal applications across AgriTech, Real Estate (BuiltGlory), B2B, B2C e-commerce, and Matrimony domains.',
        'Payment & Checkout Workflows: Integrated PhonePe Payment Gateway, handling webhook listeners, idempotent order status transactions, and subscription plan billing with zero transaction drop-offs.',
        'Geospatial & Mapping Services: Integrated Google Maps Platform APIs (Geocoding, Places, Distance Matrix) powering radius-based property discovery and agricultural dispatch logistics.',
        'High-Performance Aggregations: Implemented multi-stage MongoDB aggregation pipelines for faceted product search and complex multi-criteria filtering, reducing average database query latency by 40%.',
        'Cross-Platform Synchronization: Collaborated closely with React.js web and Flutter mobile teams to enforce standard JSON API schemas, robust error handling, and uniform payload structures.',
      ],
      skills: ['PhonePe Gateway', 'Google Maps API', 'MongoDB Aggregations', 'Webhook Listeners', 'Idempotency', 'Microservices', 'Flutter Sync'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Agania Technologies',
      period: 'July 2023 – July 2024',
      location: 'Coimbatore, India',
      bullets: [
        'Full-Stack MERN Architecture: Developed end-to-end features using Node.js, Express.js, MongoDB, and React.js for enterprise administration portals and internal operations management.',
        'Analytics Endpoints & Dashboards: Designed RESTful aggregation endpoints processing and transforming large transactional datasets into real-time business KPIs for executive dashboards.',
        'Security & Request Sanitization: Enforced tokenized session validation, input sanitization middleware, and CORS policies across all backend routes to eliminate vulnerability risks.',
        'Agile Team Collaboration: Actively contributed in bi-weekly Agile sprints, code reviews, and Git branching workflows to deliver clean, maintainable, and modular codebases.',
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Input Sanitization', 'CORS', 'Agile / Scrum'],
    },
    {
      role: 'MERN Stack Developer',
      company: 'M8 IT Solutions Pvt Ltd',
      period: 'December 2022 – July 2023',
      location: 'Coimbatore, India',
      bullets: [
        'FinTech & E-Commerce Engineering: Built core backend microservices for JewelAR (jewelry catalog & orders) and Gold Chit Fund (member management, chit cycles, and auction ledgers).',
        'Chit Fund Financial Algorithms: Formulated server-side calculation algorithms for monthly dividend distribution, bidding records, installment tracking, and automated ledger updates.',
        'Frontend Integration: Developed dynamic React.js UI views, wired components with backend endpoints, and resolved state synchronization bugs across high-frequency transactional screens.',
      ],
      skills: ['FinTech Logic', 'Chit Fund Algorithms', 'MongoDB Transactions', 'React.js', 'Microservices', 'State Sync'],
    },
  ];

  return (
    <div className="exp-container">
      <div className="exp-header">
        <span className="section-tag">Career History</span>
        <h1 className="section-heading">Professional Work Experience</h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Nearly 4 years of proven backend and full-stack engineering delivery across enterprise, FinTech, e-commerce, and logistics domains.
        </p>
      </div>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-card">
            <span className="timeline-dot"></span>
            <div className="timeline-card-header">
              <div className="company-role-wrap">
                <h3 className="job-role">{exp.role}</h3>
                <span className="company-name">
                  <i className="bi bi-building"></i> {exp.company}
                </span>
              </div>
              <div className="job-meta">
                <span className="job-period">{exp.period}</span>
                <span className="job-location">
                  <i className="bi bi-geo-alt"></i> {exp.location}
                </span>
              </div>
            </div>

            <ul className="job-bullets">
              {exp.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>
                  <i className="bi bi-arrow-right-short"></i>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="job-skills-pills">
              {exp.skills.map((skill, sIndex) => (
                <span key={sIndex} className="job-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
