import React from 'react';
import './Home.css';
import 'animate.css'; // Import Animate.css

const Home = () => {
  return (
    <div>
      {/* Animation Section */}
      <div className="animated-banner animate__animated animate__fadeInDown">
        <p>Welcome to Densir Tech Kenya . Your online presence partner |</p>
      </div>

      {/* Hero Section */}
      <header className="hero animate__animated animate__fadeIn animate__delay-1s">
        <div className="hero-content animate__animated animate__fadeInUp">
          <h1>Welcome to Densir Tech</h1>
          <p>Building solutions to empower your digital journey.</p>
          <a href="#services" className="cta-button">Get Started</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section animate__animated animate__fadeInUp">
        <h2>About Us</h2>
        <p>We provide innovative solutions to businesses and individuals, focusing on technology, creativity, and efficiency to help you succeed in the digital world.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Densir Tech Kenya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
