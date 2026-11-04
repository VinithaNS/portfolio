import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/NavBar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/About' },
    { label: 'Services (Freelance)', path: '/Services' },
    { label: 'Experience', path: '/Experience' },
    { label: 'Projects', path: '/Projects' },
    { label: 'Skills', path: '/Skill' },
    { label: 'Contact', path: '/Contact' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <header className="custom-navbar">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => handleNavClick('/')}>
          <div className="brand-symbol">V</div>
          <div className="brand-text-wrap">
            <span className="brand-name">Vinitha G</span>
            <span className="brand-title">Node.js & MERN Specialist</span>
          </div>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <i className={mobileOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
        </button>

        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`nav-item-btn ${
                location.pathname === item.path ? 'active' : ''
              }`}
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-cta">
          <button
            className="hire-btn"
            onClick={() => handleNavClick('/Contact')}
          >
            <span className="badge-pulse" style={{ backgroundColor: '#ffffff' }}></span>
            Hire / Consult
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
