// src/components/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';


const skills = [
  { name: 'HTML', logo: './Images/html5.svg' },
  { name: 'CSS', logo: './Images/css3.svg' },
  { name: 'JavaScript', logo: './Images/javascript.svg' },
  { name: 'React', logo: './Images/react.svg' },
  { name: 'Sass', logo: './Images/sass.svg' },
  { name: 'Ruby', logo: './Images/ruby.svg' },
  { name: 'Ruby on RaIls', logo: './Images/rubyonrails.svg' },
  { name: 'Python', logo: './Images/python.svg' },
  { name: 'postgreSQL', logo: './Images/postgresql.svg' },
  { name: 'Github', logo: './Images/github.svg' },

  // Add more skills as needed
];



const Skills = ({language}) => {

  const [isActive, setIsActive] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      const section = skillsRef.current;
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const translation = {
      en: {
        title: 'My Skills',
      },
      ar: {
        title: 'مهاراتي',
      },
    };
  return (

    <div
      ref={skillsRef}
      className={`skills-section ${isActive ? 'active' : ''}`}
    >
    <div className="skills-section" id='Skills' >
      <div className="skills-box">
          <h2>{translation[language].title}</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="bubble">
              <img src={skill.logo} alt={`${skill.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
