import React, {useEffect, useState} from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Banner.css';


function Banner() {

    const [typeEffect] = useTypewriter({
    words: ['Software Engineer.', 'Full Stack Web Developer.'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

    });


  return (
    <div className='container' id='Banner'>
      <div className='banner'>
        <h2>Welcome to My Portfolio</h2>
        <h1>My name is Fahad Al-Mubarak and I am a <span>{typeEffect}</span><span><Cursor/></span> </h1>
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
          <a href="/public/FahadAlMubarakCV.pdf" download="FahadAlMubarakCV.pdf">
            <button className="download-btn">Download My CV</button>
          </a>
        </div>
        {/* <div className="cv-link">
          <a href="/cv" className="cv-button">
            View My CV
          </a>
        </div> */}
      </div>
      <div className="image-div">
        <img src="/profile-image.jpg" alt="description" />
      </div>
    </div>

  );
}

export default Banner;
