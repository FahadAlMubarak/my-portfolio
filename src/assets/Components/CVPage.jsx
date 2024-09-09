import React from 'react';
import './CVPage.css'; // Styling for the animations

const CVPage = () => {
  return (
    <div className="cv-container">
      <div className="photo-section">
        <img src="/public/PictureOfMe.jpeg" alt="Fahad Al-Mubarak" className="profile-photo" />
      </div>
      <div className="cv-sections">
        <div className="cv-section" id="summary">
          <h3>Summary</h3>
          <p>Experienced Full Stack Developer ...</p>
        </div>
        <div className="cv-section" id="experience">
          <h3>Experience</h3>
          <p>Elys Department Store ...</p>
        </div>
        <div className="cv-section" id="education">
          <h3>Education</h3>
          <p>BSc in Biomedical Science ...</p>
        </div>
        <div className="cv-section" id="skills">
          <h3>Skills</h3>
          <p>React, JavaScript, CSS ...</p>
        </div>
        {/* Add other sections as needed */}
      </div>
    </div>
  );
}

export default CVPage;
