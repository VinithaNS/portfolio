import React from 'react';
import '../Styles/Skills.css';

function Skills() {
  const categories = [
    {
      title: 'Backend & Runtime',
      icon: 'bi-server',
      skills: [
        'Node.js',
        'Express.js',
        'JavaScript (ES6+)',
        'RESTful APIs',
        'Microservices Architecture',
        'MVC Design Pattern',
        'EJS Templating',
        'Event-Driven Architecture',
      ],
    },
    {
      title: 'Databases & Performance',
      icon: 'bi-database-check',
      skills: [
        'MongoDB',
        'Mongoose ODM',
        'Aggregation Pipelines',
        'Compound Indexing',
        'Query Latency Optimization',
        'MySQL',
        'Redis (Basics)',
        'ACID Transactions',
      ],
    },
    {
      title: 'Security & Auth',
      icon: 'bi-shield-lock',
      skills: [
        'JWT (JSON Web Tokens)',
        'Mobile OTP Verification',
        'Role-Based Access Control (RBAC)',
        'bcrypt Password Hashing',
        'CORS Configuration',
        'Rate Limiting',
        'Helmet Security Headers',
        'Input Sanitization',
      ],
    },
    {
      title: 'Integrations & APIs',
      icon: 'bi-plug-fill',
      skills: [
        'PhonePe Payment Gateway',
        'Google Maps Platform APIs',
        'Places & Geocoding APIs',
        'Distance Matrix API',
        'Twilio SMS API',
        'Nodemailer Pipelines',
        'Webhook Listeners',
        'Stripe Checkout',
      ],
    },
    {
      title: 'Frontend & UI',
      icon: 'bi-window-sidebar',
      skills: [
        'React.js',
        'Redux & State Management',
        'HTML5 & Modern CSS3',
        'Bootstrap 5',
        'Responsive Design',
        'Material UI (MUI)',
        'REST API Client Wiring',
      ],
    },
    {
      title: 'Cloud, DevOps & Tools',
      icon: 'bi-tools',
      skills: [
        'AWS (EC2, S3 Fundamentals)',
        'Postman API Automation',
        'Git & GitHub / GitLab',
        'Jira Project Tracking',
        'Agile / Scrum Sprints',
        'CI/CD Workflows',
        'Netlify & Render Deployments',
      ],
    },
  ];

  return (
    <div className="skills-wrapper">
      <div className="skills-header">
        <span className="section-tag">Technical Competencies</span>
        <h1 className="section-heading">Skills & Technology Stack</h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Deep technical expertise forged through nearly 4 years of architecting scalable backend APIs, database optimization, and full-stack systems.
        </p>
      </div>

      <div className="skills-categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-card-head">
              <div className="skill-icon-bubble">
                <i className={`bi ${category.icon}`}></i>
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>

            <div className="skill-tags-flex">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge-item">
                  <i className="bi bi-chevron-right"></i>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
