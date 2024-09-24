import React from 'react';
import './Projects.css';

const projects = [
  {
    name: {
      en: "Book Your Sport",
      ar: "احجز رياضتك",
    },
    description: {
      en: "A booking application for sports facilities.",
      ar: ".تطبيق لحجز المرافق الرياضية",
    },
    link: "https://book-your-sport-6901111cfa04.herokuapp.com/",
    image: "./Images/BookYourSport.png"
  },
  {
    name: {
      en: "Dog 4 a day",
      ar: ".كلب ليوم",
    },
    description: {
      en: "An Airbnb clone for dogs.",
      ar: ".حجز الكلاب ليوم واحد",
    },
    link: "https://dog4aday-2ac3166ea487.herokuapp.com/",
    image: "./Images/Dog4aDay.png"
  },

  {
    name:{
      en: "Comming Soon",
      ar: ".قريباً",
  },
    description:{
      en: "More projects coming soon!",
      ar: ".المزيد من المشاريع قريباً",
    },
    link: "#",
    image: "./Images/coming-soon.png"
  }
];

const Projects = ({ language }) => {


  const translation = {
    en: {
      title: 'My Projects',
    },
    ar: {
      title: 'مشاريعي',
    }

  };


  return (
    <div className="projects-section" id="Projects">
      <h2 className="projects-title">{translation[language].title}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.name[language]} className="project-image" />
            <div className="project-content">
              <div className="project-title">{project.name[language]}</div>
              <div className="project-description">{project.description[language]}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
