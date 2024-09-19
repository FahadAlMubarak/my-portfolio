const Navbar = ({ onToggleLanguage, language }) => {

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

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="logo">
          {translation[language].logo}
        </a>
      </div>
      <ul>
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

        <li><a href="#Banner">{translation[language].home}</a></li>
        <li><a href="#Projects">{translation[language].projects}</a></li>
        <li><a href="#Skills">{translation[language].skills}</a></li>
        <li><a href="#Connect">{translation[language].connect}</a></li>

      </ul>

    </nav>
  )
};

export default Navbar
