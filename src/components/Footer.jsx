import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/manasi-tayde-00b437262"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/manasitayde8"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://x.com/ManasiTayde08"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Twitter
          </a>
        </div>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Manasi Tayde. All rights reserved.
        </p>

        <div className="footer-text mt-4">
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="footer-link">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
