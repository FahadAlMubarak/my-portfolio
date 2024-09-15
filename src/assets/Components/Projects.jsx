import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "Book Your Sport",
    description: "A booking application for sports facilities.",
    link: "https://book-your-sport-6901111cfa04.herokuapp.com/",
    image: "/public/bookyoursport.png"
  },
  {
    name: "Dog 4 a day",
    description: "An Airbnb clone for dogs.",
    link: "https://dog4aday-2ac3166ea487.herokuapp.com/",
    image: "/public/dog4aday.png"
  },

];

function Projects() {
  return (
    <div className="projects-section" id="Projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
            // style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <div className="project-title">{project.name}</div>
              <div className="project-description">{project.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
