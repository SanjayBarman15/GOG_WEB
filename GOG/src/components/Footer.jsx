import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <img
            src="../../public/assets/Images/gog.png"
            alt="gog"
        />
          <p>
            Unleash The Power Of Learning: Discover A World Of Possibilities
            With Our Cutting-Edge Learning Management System.
          </p>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Programs</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Get In Touch</h3>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <div className="contact-info">
            <p>+91 9109976089</p>
            <p>Admin@GeeksofGurukul.Com</p>
          </div>
        </div>
      </div>
      <p className="copyright">
            © Copyright 2024 Skillscan Edtech India Private Ltd. All Rights
            Reserved
          </p>
    </footer>
  );
};

export default Footer;
