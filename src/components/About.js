import React from "react"; 
import "./About.css";  // Importing the CSS for styling the 'About' component
import { SocialIcon } from 'react-social-icons';  // Importing the SocialIcon component for social media icons
import { Link } from "@react-email/components";  // Importing the Link component for email links

// Email component to create an external link
const Email = () => {
  return <Link href="https://example.com">Example</Link>;
};

// Main 'About' component
const About = () => {
  return (
    <div className="About">
      {/* Header section for the "About Me" title */}
      <header className="About-header">
        <h1>ABOUT ME</h1>
      </header>

      {/* Sub-header with a portrait image and educational background */}
      <header className="Sub-header">
        <img className="column" src="./Album/SAPortrait.jpg" alt="Portrait" />
        <h1 className="column">
          Stevens Institute of Technology <br />
          B.S. Computer Engineering
        </h1>
      </header>

      {/* Main content with bio, certifications, and personal projects */}
      <main>
        <p>
          I am an artist and developer with a love for capturing unique
          perspectives. I pursue my passion by taking photographs, 
          often highlighting symbolic emotions or ideologies I find interesting.
        </p>

        {/* Section for certifications */}
        <h3>Certifications</h3>
        <li>SQL for Data Analysis – Udemy</li>

        {/* Section for personal projects */}
        <h3>Personal Projects</h3>
        <li>Photography Portfolio Website (A fully-featured React website showcasing my photography.)</li>
        <li>Gaming Console (Raspberry Pi, 3D printed enclosure featuring games built with Python Pygame libraries.)</li>
        <li>Soccer Match Outcome Calculator (Predicting soccer match outcomes with competitive sports data)</li>
      </main>

      {/* Contact information section */}
      <contact className="Contact">
        <h1>Contact</h1>
        <p>
          +1 (732) 425-0897
          <br />
          {/* Email link */}
          <Link href="mailto:ruifernandes155@gmail.com" className="Email">ruifernandes155@gmail.com</Link>
          <br />
          Based in NJ / NY Area
        </p>
      </contact>

      {/* Footer with social media links */}
      <footer className="Links">
        <h1>Social Links</h1>

        {/* LinkedIn profile icon */}
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/rui-fernandes-567409171/"
          style={{ height: 75, width: 75 }}
        />
        {/* Adding space between the icons */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        {/* GitHub profile icon */}
        <SocialIcon
          network="github"
          url="https://github.com/RuiSantinoFernandes"
          style={{ height: 75, width: 75 }}
        />
      </footer>
    </div>
  );
};

// Exporting the 'About' component as the default export
export default About;

