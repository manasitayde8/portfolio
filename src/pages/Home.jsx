import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Manasi Tayde</h1>
        <p className="home-subtitle">
          Web Developer | React & Node.js 
        </p>
        <div className="mb-6">
          <Link to="/projects" className="home-button">
            View Projects
          </Link>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/manasi-tayde-00b437262"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/manasitayde8"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/ManasiTayde08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
