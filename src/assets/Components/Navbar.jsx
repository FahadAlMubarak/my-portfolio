import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onToggleLanguage, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const translation = {
    en: {
      logo: 'FA',
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      connect: 'Let\'s Connect',
    },
    ar: {
      logo: 'ف.ا',
      home: 'الرئيسية',
      projects: 'المشاريع',
      skills: 'المهارات',
      connect: 'تواصل معي',
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <a href="/" className="logo">
          {translation[language].logo}
        </a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#Banner" onClick={toggleMenu}>{translation[language].home}</a></li>
        <li><a href="#Skills" onClick={toggleMenu}>{translation[language].skills}</a></li>
        <li><a href="#Projects" onClick={toggleMenu}>{translation[language].projects}</a></li>
        <li><a href="#Connect" onClick={toggleMenu}>{translation[language].connect}</a></li>

        <div className="toggle-switch">
          <input
            type="checkbox"
            id="language-toggle"
            onChange={onToggleLanguage}
            checked={language === 'ar'}
          />
          <label htmlFor="language-toggle" className="switch">
            <span className="slider"></span>
            <span className="labels">
              <span className="label-en">EN</span>
              <span className="label-ar">AR</span>
            </span>
          </label>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
