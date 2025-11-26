import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="https://www.dotcominfoway.com/wp-content/themes/dci/images/dcilogo.svg" alt="Dot Com Infoway" className="logo"/>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
          </li>
           <li className="nav-item">
            <Link to="/terms-of-service" className="nav-link">Terms of Service</Link>
          </li>
           <li className="nav-item">
            <Link to="/disclaimer" className="nav-link">Disclaimer</Link>
          </li>
           <li className="nav-item">
            <Link to="/faq" className="nav-link">FAQ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;