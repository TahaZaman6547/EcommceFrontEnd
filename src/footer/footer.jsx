import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
          <Link to="/policies" className="footer-link">Policies</Link>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/" className="footer-social-icon">Facebook</a>
          <a href="https://twitter.com/" className="footer-social-icon">Twitter</a>
          <a href="https://www.instagram.com/" className="footer-social-icon">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="powered-by">Powered by My Ecommerce Store</div>
      </div>
    </footer>
  );
};

export default Footer;
