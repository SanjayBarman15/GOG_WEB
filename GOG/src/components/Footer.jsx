import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <img
            src="./assets/Images/gog.png"
            alt="gog"
        />
          <p>
            Unleash The Power Of Learning: Discover A World Of Possibilities
            With Our Cutting-Edge Learning Management System.
          </p>
        </div>
        <div class="footer-rightt">
        <div className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Programs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>FAQs</li>
            <li>Privacy&Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Get In Touch</h3>
          <div className="social-icons">
           <img src="./assets/Images/linkedin.png" 
           alt="linkedin"
            />
            <img src="./assets/Images/twitter.png" 
           alt="twitter"
            />
            <img src="./assets/Images/instagram.png" 
           alt="instagram"
            />
            <img src="./assets/Images/facebook.png" 
           alt="facebook"
            />
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p><span>📞</span>+91 9109976089</p>
            <p>✉ admin@geeksofgurukul.com</p>
          </div>
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