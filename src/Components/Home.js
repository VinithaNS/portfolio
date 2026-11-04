import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="badge-available">
              <span className="badge-pulse"></span>
              Available for Freelance & Remote Contracts
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-title-highlight">Vinitha G</span>
          </h1>

          <h2 className="hero-subtitle">
            Node.js Backend Developer & MERN Stack Architect
          </h2>

          <p className="hero-bio">
            Nearly <strong>4 years</strong> of production engineering experience architecting, scaling, and maintaining mission-critical RESTful APIs and distributed full-stack systems. Proven track record across <strong>16+ production projects</strong> in FinTech, E-Commerce, AgriTech, and Corporate HRMS. Specialized in zero-trust RBAC auth, PhonePe payment gateway integrations, and complex MongoDB aggregations delivering up to <strong>40% query latency reduction</strong>.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary-glow"
              onClick={() => navigate('/Services')}
            >
              <i className="bi bi-briefcase-fill"></i>
              Freelance Services
            </button>
            <button
              className="btn-secondary-outline"
              onClick={() => navigate('/Projects')}
            >
              <i className="bi bi-code-slash"></i>
              View Enterprise Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1h8_OTnPFfQOp9BtNpET9UCVTqKkR0xXK/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-outline"
            >
              <i className="bi bi-file-earmark-pdf-fill"></i>
              Resume
            </a>
          </div>

          <div className="hero-social-links">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginRight: '8px' }}>
              Connect with me:
            </span>
            <a
              href="https://github.com/VinithaNS"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/vinitha-neyashree"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="mailto:vinithaneyashree2901@gmail.com"
              className="social-icon-btn"
              title="Email Vinitha"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a
              href="tel:+919626597049"
              className="social-icon-btn"
              title="Call Vinitha"
            >
              <i className="bi bi-telephone-fill"></i>
            </a>
          </div>
        </div>

        {/* Right side architectural highlight card */}
        <div className="hero-card">
          <div className="card-header-badge">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="tech-tag-pill">production_ready.js</span>
          </div>

          <div className="hero-stack-list">
            <div className="stack-item">
              <i className="bi bi-shield-lock-fill stack-icon"></i>
              <div>
                <div className="stack-title">Zero-Trust Auth & RBAC</div>
                <p className="stack-desc">
                  Granular 5-tier role-based access control, mobile OTP verification & JWT sessions with zero privilege escalation.
                </p>
              </div>
            </div>

            <div className="stack-item">
              <i className="bi bi-credit-card-2-front-fill stack-icon"></i>
              <div>
                <div className="stack-title">PhonePe Payment Pipelines</div>
                <p className="stack-desc">
                  Idempotent state machines, secure webhook listeners, and subscription checkout with 0% transaction drop-offs.
                </p>
              </div>
            </div>

            <div className="stack-item">
              <i className="bi bi-speedometer2 stack-icon"></i>
              <div>
                <div className="stack-title">MongoDB Indexing & Aggregations</div>
                <p className="stack-desc">
                  Multi-stage pipeline optimization and compound indexing driving 35%–40% database latency reductions.
                </p>
              </div>
            </div>

            <div className="stack-item">
              <i className="bi bi-geo-alt-fill stack-icon"></i>
              <div>
                <div className="stack-title">Geospatial & Third-Party APIs</div>
                <p className="stack-desc">
                  Google Maps Platform (Places, Geocoding, Distance Matrix), Twilio SMS & Nodemailer automated alert pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Impact Metrics Banner */}
      <div className="stats-banner">
        <div className="stat-box">
          <div className="stat-number">Nearly 4 yrs</div>
          <div className="stat-label">Hands-On Experience</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">16+</div>
          <div className="stat-label">Production Deployments</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">40%</div>
          <div className="stat-label">Query Latency Reduction</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">25+</div>
          <div className="stat-label">Enterprise API Endpoints</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
