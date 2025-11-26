import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Dot Com Infoway</h1>
        <p>Your trusted partner for innovative IT solutions.</p>
        <a href="/contact-us" className="cta-button">Contact Us</a>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1518770660439-46aaf50699b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Web Development" />
            <h3>Web Development</h3>
            <p>We offer cutting-edge web development services to create stunning and responsive websites.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Mobile App Development" />
            <h3>Mobile App Development</h3>
            <p>We build high-quality mobile applications for iOS and Android platforms.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1611249453024-3d6b549ffc11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Digital Marketing" />
            <h3>Digital Marketing</h3>
            <p>We provide comprehensive digital marketing solutions to boost your online presence.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>Dot Com Infoway is a globally recognized IT company with years of experience in delivering top-notch solutions.</p>
        <a href="/about-us" className="cta-button">Learn More</a>
      </section>
    </div>
  );
}

export default Home;