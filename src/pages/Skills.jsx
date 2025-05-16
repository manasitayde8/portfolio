import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import './Skills.css';

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" size={60} /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" size={60} /> },
  { name: "JavaScript", icon: <FaJsSquare className="skill-icon js" size={60} /> },
  { name: "React", icon: <FaReact className="skill-icon react" size={60} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="skill-icon tailwind" size={60} /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon node" size={60} /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
