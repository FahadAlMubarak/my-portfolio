import React, {useEffect, useState} from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Banner.css';


const Banner = ({language}) => {

    const translation = {

        en: {
            title: 'Welcome to My Portfolio',
            name: 'My name is Fahad Al-Mubarak and I am a ',
            job: 'Software Engineer.',
            job2: 'Full Stack Web Developer.',
            download: 'Download My CV',
        },

        ar: {
            title: 'مرحبًا بك في ملفي الشخصي',
            name: ' اسمي فهد المبارك وأنا',
            job: 'مهندس برمجيات.',
            job2: 'مطور ويب Full Stack.',
            download: 'تحميل سيرتي الذاتية',
        }

    };

    const typewriterWords = {
        en: ['Software Engineer', 'Full Stack Web Developer'],
        ar: [' مهندس برمجيات', ' مطور ويب']
    }

    const [typeEffect] = useTypewriter({
    words: typewriterWords[language],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

    });


  return (
    <div className='container' id='Banner'>
      <div className='banner'>
        <h2>{translation[language].title}</h2>
        <h1>{translation[language].name}<span>{typeEffect}</span></h1>
        <div>
          <a
            href="https://www.linkedin.com/in/fahad-almubarak"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/FahadAlMubarak"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
        </div>
        <div>
          <a href="./Images/FahadAlMubarakCV.pdf" download="FahadAlMubarakCV.pdf">
            <button className="download-btn">{translation[language].download}</button>
          </a>
        </div>
      </div>
      <div className="image-div">
        <img src="./Images/profile-image.jpg" alt="description" />
      </div>
    </div>

  );
}

export default Banner;
