import React, { useState } from 'react';


const Connect = ({language}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const translation = {
    en: {
      title: 'Contact Me',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      submit: 'Send Message',
    },
    ar: {
      title: 'تواصل معي',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      submit: 'إرسال الرسالة',

    },
  };

  return (
    <div className="contact-form-container">
      <h2 id="Connect">{translation[language].title}</h2>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={translation[language].name}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translation[language].email}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={translation[language].message}
            required
          />
        </div>
        <button type="submit" className="submit-button">{translation[language].submit}</button>
      </form>
    </div>
  );
}

export default Connect;
