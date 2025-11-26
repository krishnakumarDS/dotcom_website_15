import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Dot Com Infoway is a leading IT company providing innovative solutions and services to businesses worldwide. With a focus on quality and customer satisfaction, we strive to deliver excellence in every project.</p>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1544717305-27825999cb8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Integrity</li>
          <li>Excellence</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;