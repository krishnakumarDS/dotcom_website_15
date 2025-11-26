import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Dot Com Infoway</h3>
          <p>Dot Com Infoway is a leading IT company providing innovative solutions and services to businesses worldwide.</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="#">Web Development</Link></li>
            <li><Link to="#">Mobile App Development</Link></li>
            <li><Link to="#">Digital Marketing</Link></li>
            <li><Link to="#">SEO</Link></li>
            <li><Link to="#">Cloud Solutions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
             <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>123 Main Street, Cityville</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 555-123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dot Com Infoway. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;