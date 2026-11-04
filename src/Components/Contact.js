import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'RESTful API & Backend Architecture',
    budget: '$500 - $1,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-fill mailto link with details as backup
    const subject = encodeURIComponent(`Freelance Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Vinitha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget/Timeline: ${formData.budget}\n\nProject Details:\n${formData.message}\n`
    );
    window.location.href = `mailto:vinithaneyashree2901@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <span className="section-tag">Get in Touch</span>
        <h1 className="section-heading">Let's Build Something Resilient Together</h1>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Have a freelance project, API architecture requirement, or need database optimization? Reach out directly or fill out the form for a fast proposal.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Information Panel */}
        <div className="contact-info-panel">
          <div>
            <div className="badge-available" style={{ marginBottom: '16px' }}>
              <span className="badge-pulse"></span>
              Replies within 2–4 Hours
            </div>
            <h2 className="panel-title">Direct Contact Information</h2>
            <p className="panel-desc">
              Based in Coimbatore, Tamil Nadu, India. Actively collaborating with clients and engineering teams worldwide across all timezones.
            </p>
          </div>

          <div className="contact-methods-list">
            <a href="tel:+919626597049" className="method-card">
              <div className="method-icon-circle">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="method-texts">
                <span className="method-type">Phone / WhatsApp</span>
                <span className="method-value">+91 9626597049</span>
              </div>
            </a>

            <a href="mailto:vinithaneyashree2901@gmail.com" className="method-card">
              <div className="method-icon-circle">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="method-texts">
                <span className="method-type">Direct Email</span>
                <span className="method-value">vinithaneyashree2901@gmail.com</span>
              </div>
            </a>

            <div className="method-card" style={{ cursor: 'default' }}>
              <div className="method-icon-circle">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="method-texts">
                <span className="method-type">Location & Availability</span>
                <span className="method-value">Coimbatore, India (Open to Remote)</span>
              </div>
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '10px', display: 'block' }}>
              PROFESSIONAL PROFILES:
            </span>
            <div className="contact-social-row">
              <a
                href="https://linkedin.com/in/vinitha-neyashree"
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn"
              >
                <i className="bi bi-linkedin" style={{ color: '#0a66c2' }}></i> LinkedIn
              </a>
              <a
                href="https://github.com/VinithaNS"
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn"
              >
                <i className="bi bi-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-form-panel">
          <h2 className="panel-title" style={{ marginBottom: '18px' }}>
            Book a Freelance Project or Consultation
          </h2>

          {submitted && (
            <div className="form-success-banner">
              <i className="bi bi-check-circle-fill"></i>
              Thank you! Your email client has been prepared. You can also message me directly at +91 9626597049.
            </div>
          )}

          <form onSubmit={handleSubmit} className="form-group-wrap">
            <div className="form-row-2">
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Sharma"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-field">
                <label className="form-label">Service Needed</label>
                <select
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option>RESTful API & Backend Architecture</option>
                  <option>Payment Gateway Integration (PhonePe / Stripe)</option>
                  <option>MongoDB Latency & Aggregation Tuning</option>
                  <option>5-Tier RBAC & Zero-Trust Auth</option>
                  <option>Full-Stack MERN MVP Development</option>
                  <option>Code / Performance Audit</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">Estimated Budget / Scope</label>
                <select
                  name="budget"
                  className="form-select"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option>&lt; ₹25,000 / &lt; $300 (Small Task/Fix)</option>
                  <option>₹25,000 - ₹60,000 / $300 - $800 (Feature/API)</option>
                  <option>₹60,000 - ₹1.5L / $800 - $2,000 (Complete Module)</option>
                  <option>&gt; ₹1.5L / &gt; $2,000 (Full MVP / Monthly Retainer)</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Project Details & Requirements</label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project, current tech stack, deadlines, and what bottleneck you're looking to solve..."
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="bi bi-send-fill"></i> Send Project Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
