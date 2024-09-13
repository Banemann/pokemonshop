import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="overlay">
          <h1>Anders' Tømrer & Maler Service</h1>
          <p>Building quality, hand-crafted furniture and homes.</p>
          <a href="/contact" className="cta-button">
            Get a Free Quote
          </a>
        </div>
      </header>
      <section className="content">
        <h2>Our Services</h2>
        <p>From furniture design to home renovations, Anders Carpenter Services brings your vision to life.</p>
      </section>
    </div>
  );
}

export default Home;
