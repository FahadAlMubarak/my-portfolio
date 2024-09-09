import Navbar from "./assets/Components/Navbar";
import Banner from "./assets/Components/Banner";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Connect from "./assets/Components/Connect";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CVPage from './assets/Components/CVPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Skills />
            <Projects />
            <Connect />
          </>
        } />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App
