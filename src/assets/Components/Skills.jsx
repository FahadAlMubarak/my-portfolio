// src/components/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';


const skills = [
  { name: 'HTML', logo: '/html5.svg' },
  { name: 'CSS', logo: '/css3.svg' },
  { name: 'JavaScript', logo: '/javascript.svg' },
  { name: 'React', logo: '/react.svg' },
  { name: 'Sass', logo: '/sass.svg' },
  { name: 'Ruby', logo: '/ruby.svg' },
  { name: 'Ruby on Rails', logo: '/rubyonrails.svg' },
  { name: 'Python', logo: '/python.svg' },
  { name: 'postgreSQL', logo: '/postgresql.svg' },
  { name: 'Github', logo: '/github.svg' },

  // Add more skills as needed
];



const Skills = () => {

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

  return (

    <div
      ref={skillsRef}
      className={`skills-section ${isActive ? 'active' : ''}`}
    >

    <div className="skills-section" id='Skills'>
      <div className="skills-box">
          <h2>My Skills</h2>
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
