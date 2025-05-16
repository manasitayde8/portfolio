import React from "react";
import './Projects.css';

const projects = [
  {
    title: "Art Gallery",
    link: "#", // Replace with actual project link
    image: "/Art Gallery.png", // image must be in the 'public' folder
  },
  {
    title: "Forts Of Maharashtra",
    link: "#",
    image: "/Fort Of Maharashtra.png",
  },
  {
    title: "Book Store",
    link: "#",
    image: "/Book Store.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title || "Project Image"}
                className="project-image"
              />
              <div className="card-content">
                <h3>{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
