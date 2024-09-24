import { useState } from 'react';
import Navbar from "./assets/Components/Navbar";
import Banner from "./assets/Components/Banner";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Connect from "./assets/Components/Connect";


function App() {

  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
  };
  return (

      // <div dir={language === 'ar' ? 'rtl' : 'ltr'}></div>
      <>
        <Navbar  onToggleLanguage={toggleLanguage} language={language} />
        <Banner language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Connect language={language} />
      </>

  );
}

export default App
