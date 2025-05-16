import React from "react";
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm <span className="strong-text">Manasi Tayde</span>, "A passionate Web Developer with a
          knack for building dynamic and responsive web applications. With a strong foundation 
          in JavaScript and a love for clean, scalable code, I enjoy creating interactive user 
          experiences and robust backend systems."
        </p>
        <p className="about-text">
          I have hands-on experience with modern tools and frameworks such as React,
          Node.js. I enjoy collaborating with teams, learning new
          technologies, and continuously improving my craft.
        </p>
        <p className="about-text">
          Outside of coding, I enjoy contributing to open-source projects, exploring new
          technologies, and mentoring junior developers.
        </p>
      </div>
    </section>
  );
};

export default About;
