import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/About.css';
import about from '../images/about_developer.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <div className="about-image-card">
            <img className="about-img" src={about} alt="Vinitha G - Backend Developer" />
          </div>
          <div className="experience-floating-pill">
            <span className="exp-years">4</span>
            <span className="exp-text">
              Years of<br />Production Exp.
            </span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">About Vinitha</span>
          <h1 className="section-heading">Engineering Resilient Backends & Distributed Systems</h1>

          <p className="about-lead">
            I am a performance-driven <strong>Node.js Backend Developer & MERN Stack Engineer</strong> with nearly 4 years of hands-on industry experience building scalable digital infrastructure.
          </p>

          <p className="about-text">
            Throughout my career across 4 organizations—including Mounttown Technologies, Selorg Tech, Agania Technologies, and M8 IT Solutions—I have architected backends for over <strong>16+ production applications</strong> spanning FinTech & Chit Funds, E-Commerce, AgriTech logistics, Real Estate, and Corporate HRMS.
          </p>

          <p className="about-text">
            My engineering philosophy centers on reliability and measurable efficiency: writing clean, modular RESTful APIs, implementing zero-trust authentication (5-tier RBAC + Mobile OTP), engineering idempotent payment transactions (PhonePe), and optimizing complex MongoDB aggregation pipelines for up to <strong>40% query latency reduction</strong>.
          </p>

          <div className="about-info-grid">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-val">Vinitha G</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-val">Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="info-item">
              <span className="info-label">Availability</span>
              <span className="info-val" style={{ color: '#34d399' }}>Freelance & Remote Full-Time</span>
            </div>
            <div className="info-item">
              <span className="info-label">Education</span>
              <span className="info-val">B.E. (ECE) — PPG Institute of Tech</span>
            </div>
          </div>

          <div className="about-actions">
            <button
              className="btn-primary-glow"
              onClick={() => navigate('/Contact')}
            >
              <i className="bi bi-chat-dots-fill"></i>
              Hire Me / Let's Talk
            </button>
            <a
              href="https://drive.google.com/file/d/1h8_OTnPFfQOp9BtNpET9UCVTqKkR0xXK/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-outline"
            >
              <i className="bi bi-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Why Clients & Teams Hire Me */}
      <div className="values-section">
        <span className="section-tag">Value Proposition</span>
        <h2 className="section-heading" style={{ fontSize: '1.85rem' }}>
          Why Clients & Engineering Teams Partner With Me
        </h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            <h3 className="value-title">High-Performance APIs</h3>
            <p className="value-desc">
              Tuned MongoDB schemas with compound indexing and aggregation pipelines, slashing database latency by 35%–40% on heavy analytics and faceted search.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3 className="value-title">Zero-Trust Security</h3>
            <p className="value-desc">
              Hardened backends featuring 5-tier Role-Based Access Control, JWT session rotation, mobile OTP verification, input sanitization, and Helmet/CORS protection.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <h3 className="value-title">Flawless Payment Flows</h3>
            <p className="value-desc">
              Engineered PhonePe payment integrations with signature verification, idempotent transaction listeners, and zero transaction drops across high-traffic orders.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-diagram-3-fill"></i>
            </div>
            <h3 className="value-title">Microservices & Integration</h3>
            <p className="value-desc">
              Seamlessly orchestrating third-party services: Google Maps Platform (Geocoding/Places/Distance Matrix), Nodemailer + EJS pipelines, and Twilio SMS.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-check2-circle"></i>
            </div>
            <h3 className="value-title">Quality & Postman Automation</h3>
            <p className="value-desc">
              Comprehensive Postman test suites with automated script assertions, preventing regressions by 25% before any code touches staging or production.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-handshake-fill"></i>
            </div>
            <h3 className="value-title">Reliable Freelance Partner</h3>
            <p className="value-desc">
              Transparent sprint delivery, clear documentation, regular async updates, and clean Git commits that your internal engineering team can immediately adopt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
