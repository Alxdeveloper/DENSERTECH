import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Densir Tech Kenya, Mama Ngina Street, Embu, Kenya. All rights reserved.</p>
      
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/cpa-dennis-murangiri-20195a102/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
