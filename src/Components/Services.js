import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Services.css';

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 1,
      badge: 'High Demand',
      icon: 'bi-cpu-fill',
      title: 'Scalable RESTful API & Backend Architecture',
      desc: 'Architecting modular, production-ready backend systems using Node.js, Express.js, and clean MVC/Microservices patterns tailored to high-concurrency traffic.',
      deliverables: [
        'Secure RESTful API endpoints with schema validation',
        'Postman collection with automated test assertions',
        'Modular error handling & structured logging',
        'Ready for deployment on AWS, Render, or DigitalOcean',
      ],
    },
    {
      id: 2,
      badge: 'Zero Drop-offs',
      icon: 'bi-credit-card-2-front-fill',
      title: 'Payment Gateway Integration (PhonePe / Stripe)',
      desc: 'Integrating enterprise payment flows with cryptographic signature verification, idempotent transaction state machines, and webhook listeners with 0% failure.',
      deliverables: [
        'PhonePe, Stripe, and Razorpay API integration',
        'Idempotent webhook listeners with automatic retry',
        'Subscription recurring billing & invoice handling',
        'Tamper-proof signature verification and audit log',
      ],
    },
    {
      id: 3,
      badge: '40% Speedup',
      icon: 'bi-database-fill-gear',
      title: 'MongoDB Query Tuning & Aggregation Optimization',
      desc: 'Slashing database query latencies on slow analytics, faceted search, and massive datasets using advanced compound indexing and multi-stage aggregation pipelines.',
      deliverables: [
        'Explain plan execution analysis & indexing strategy',
        'Multi-stage aggregation for faceted product search',
        'Schema redesign to eliminate N+1 query bottlenecks',
        'Up to 35%–40% measured reduction in API response times',
      ],
    },
    {
      id: 4,
      badge: 'Zero-Trust',
      icon: 'bi-shield-lock-fill',
      title: 'Enterprise Authentication & 5-Tier RBAC Systems',
      desc: 'Engineering bulletproof identity and authorization infrastructure with Mobile OTP verification, JWT session rotation, and granular Role-Based Access Control.',
      deliverables: [
        'Granular 5-tier RBAC (Admin, HR, PM, Lead, Employee)',
        'Mobile OTP verification via SMS and email links',
        'JWT access/refresh token rotation & bcrypt hashing',
        'CORS, Rate Limiting, and Helmet security middleware',
      ],
    },
    {
      id: 5,
      badge: 'Automation',
      icon: 'bi-geo-alt-fill',
      title: 'Geospatial (Google Maps) & Third-Party APIs',
      desc: 'Integrating Google Maps Platform (Places, Geocoding, Distance Matrix) for radius discovery and dispatch logistics, plus automated transactional email pipelines.',
      deliverables: [
        'Google Maps radius-based search & location lookup',
        'Nodemailer + EJS dynamic transactional email templates',
        'Twilio SMS automated verification notifications',
        'Resilient webhook orchestration with external APIs',
      ],
    },
    {
      id: 6,
      badge: 'End-to-End',
      icon: 'bi-window-stack',
      title: 'Full-Stack MERN MVPs & Corporate Dashboards',
      desc: 'Building end-to-end web applications and internal administrative tools from scratch for startups and businesses wanting to launch quickly without cutting corners.',
      deliverables: [
        'React.js UI with responsive state management (Redux)',
        'Complete Node/Express backend with MongoDB database',
        'Admin dashboard with real-time transactional KPIs',
        'Deployment on cloud infrastructure with CI/CD',
      ],
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <span className="section-tag">Freelance & Contract Offerings</span>
        <h1 className="section-heading">High-Impact Engineering Services</h1>
        <p className="section-desc">
          Leveraging 4 years of production backend experience across 16+ enterprise projects. I help founders, CTOs, and agencies ship resilient, high-speed backends without technical debt.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div>
              <span className="service-badge">{service.badge}</span>
              <div className="service-icon-box">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-deliverables">
                {service.deliverables.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="service-cta-btn"
              onClick={() => navigate('/Contact')}
            >
              Request Quote / Consult <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>

      {/* Engagement Models */}
      <div className="engagement-section">
        <h2 className="engagement-title">Flexible Freelance Engagement Models</h2>
        <p className="engagement-desc">
          Choose the partnership structure that best aligns with your team's budget, timeline, and scope.
        </p>

        <div className="models-grid">
          <div className="model-card">
            <div className="model-header">
              <span className="model-badge">Fixed Scope</span>
              <h4 className="model-name">Fixed-Price Milestone</h4>
            </div>
            <p className="model-detail">
              Perfect for well-defined tasks: PhonePe payment integration, MongoDB aggregation query tuning, or building specific API endpoints. Clear deliverables, milestones, and delivery timeline.
            </p>
            <div className="model-fit">
              <i className="bi bi-check2"></i> Best for: MVPs, Audits, Specific Features
            </div>
          </div>

          <div className="model-card">
            <div className="model-header">
              <span className="model-badge">Dedicated Sprints</span>
              <h4 className="model-name">Monthly / Weekly Retainer</h4>
            </div>
            <p className="model-detail">
              Dedicated 20 to 40 hours per week acting as your core backend developer. Ideal for fast-growing startups and agencies needing ongoing feature velocity and code maintenance.
            </p>
            <div className="model-fit">
              <i className="bi bi-check2"></i> Best for: Ongoing Startups & Agency Overflow
            </div>
          </div>

          <div className="model-card">
            <div className="model-header">
              <span className="model-badge">Consulting</span>
              <h4 className="model-name">Architecture & Code Audit</h4>
            </div>
            <p className="model-detail">
              In-depth code review, database index analysis, security vulnerability scan, and performance benchmarking for teams experiencing slow response times or security bottlenecks.
            </p>
            <div className="model-fit">
              <i className="bi bi-check2"></i> Best for: Performance Fixes & Refactoring
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
