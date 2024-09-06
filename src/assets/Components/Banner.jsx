import React, {useEffect, useState} from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';


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
        <h3>Welcome to My Portfolio</h3>
        <h1>My name is Fahad Al-Mubarak and I am a <span>{typeEffect}</span><span><Cursor/></span> </h1>
          <div>
            <a href="#Projects" className="btn">LinkedIn</a>
            <a href="#Connect" className="btn">github</a>
          </div>
      </div>
      <div className="image-div">
        <img src="/picture.jpg" alt="description" />
      </div>
    </div>

  );
}

export default Banner;
