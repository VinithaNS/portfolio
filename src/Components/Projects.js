import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  const enterpriseProjects = [
    {
      id: 1,
      domain: 'Enterprise HRMS & Workforce Security',
      title: 'HRMS – Enterprise Human Resource Management System',
      subtitle: 'Mounttown Technologies | Corporate Workforce Platform',
      bullets: [
        'Architected modular backend services for employee attendance, multi-tiered leave approval workflows, and administrative department structures delivering 25+ secure RESTful API endpoints.',
        'Engineered granular 5-tier Role-Based Access Control (Admin, HR, PM, Team Lead, Employee) backed by mobile OTP verification and JWT session tokens ensuring zero privilege escalation.',
        'Redesigned MongoDB collection schemas with compound indexing and optimized aggregation pipelines, driving a 35% decrease in API response times on heavy analytics dashboards.',
        'Built automated email pipelines utilizing reusable EJS templates integrated with Nodemailer for employee onboarding, credential management, password resets, and alert dispatches.',
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'EJS', 'JWT / Mobile OTP', '5-Tier RBAC', 'Postman Automation'],
    },
    {
      id: 2,
      domain: 'FinTech & E-Commerce Logistics',
      title: 'Selorg – AgriTech & E-Commerce Marketplace',
      subtitle: 'Selorg Tech Pvt Ltd | Multi-Vendor Marketplace',
      bullets: [
        'Developed high-concurrency order placement, inventory reservation systems, customer subscription models, and shopping cart management APIs.',
        'Integrated PhonePe Payment Gateway with cryptographic signature verification, webhook callback listeners, and idempotent transaction state machines with 0% transaction drop-offs.',
        'Implemented multi-stage MongoDB aggregation pipelines for faceted product search and multi-criteria pricing/category filtering, reducing database query latency by 40%.',
        'Synchronized standard JSON API contracts and uniform error payloads with React.js web and Flutter mobile frontend applications.',
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB Aggregation', 'PhonePe Gateway', 'Webhooks', 'Idempotency', 'REST APIs', 'Postman'],
    },
    {
      id: 3,
      domain: 'FinTech & Auction Algorithms',
      title: 'Gold Chit Fund – Financial Management & Auction Platform',
      subtitle: 'M8 IT Solutions | Real-time Financial Ledger',
      bullets: [
        'Engineered backend business logic and mathematical algorithms for member subscriptions, monthly installment schedules, and live auction bidding records.',
        'Formulated server-side calculation algorithms for monthly dividend distributions, bidding records, installment tracking, and automated ledger updates.',
        'Implemented MongoDB multi-document ACID transactions ensuring strict data consistency, financial audit trails, and automatic penalty calculations.',
        'Designed high-frequency transactional API endpoints integrated with dynamic React.js UI views.',
      ],
      techStack: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB Transactions', 'React.js', 'Financial Algorithms', 'REST APIs'],
    },
    {
      id: 4,
      domain: 'PropTech & Geospatial Discovery',
      title: 'BuiltGlory – Location-Based Real Estate Discovery Platform',
      subtitle: 'Selorg Tech Pvt Ltd | Property Discovery Engine',
      bullets: [
        'Architected geospatial property listing and radius-based search services utilizing Google Maps Platform APIs (Geocoding, Places, and Distance Matrix).',
        'Designed performant database schemas for handling multi-media property asset links, dynamic specification parameters, and real-time agent inquiry routing.',
        'Optimized geospatial indexing (2dsphere) for sub-second location filtering across thousands of real estate properties.',
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB 2dsphere', 'Google Maps Platform', 'Geocoding', 'Places API', 'RESTful APIs'],
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <span className="section-tag">Case Studies & Architectures</span>
        <h1 className="section-heading">Featured Enterprise Projects</h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Mission-critical backend architectures and full-stack systems engineered for scale, zero-trust security, and high performance across 16+ production deployments.
        </p>
      </div>

      <div className="enterprise-projects-grid">
        {enterpriseProjects.map((proj) => (
          <div key={proj.id} className="enterprise-project-card">
            <div>
              <span className="project-domain-tag">
                <i className="bi bi-tag-fill"></i> {proj.domain}
              </span>
              <h3 className="project-card-title">{proj.title}</h3>
              <div className="project-subtitle">{proj.subtitle}</div>

              <ul className="project-bullets-list">
                {proj.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <i className="bi bi-check2-circle"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech-section">
              <span className="tech-label">Architecture & Tech Stack</span>
              <div className="tech-badges-list">
                {proj.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
