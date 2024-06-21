// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact d-flex align-items-center animate__animated animate__slideInUp">
      <div className="container text-center">
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:philiphayase@gmail.com">philiphayase@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/philip-hayase-1636a0314" target="_blank" rel="noopener noreferrer">Philip Hayase</a></p>
      </div>
    </section>
  );
};

export default Contact;
