import React from "react";
import "./About.css";
import { SocialIcon } from 'react-social-icons';
import { Link } from "@react-email/components";

const Email = () => {
  return <Link href="https://example.com">Example</Link>;
};


const About = () => {
  return (
    <div className="About">
      <header className="About-header">
        <h1>ABOUT ME</h1>
      </header>
      <header className="Sub-header">
        <img className ="column" src= "./Album/SAPortrait.jpg"/>
        <h1 className ="column" >Stevens Institute of Technology <br />
        B.S. Computer Engineering</h1>
      </header>
      <main>
        <p>
          I am an artist and developer with a love for capturing unique
          perspectives. I pursue my passion by taking photographs, 
          often highlighting symbolic emotions or ideologies I find interesting.
        </p>
        <h3>Certifications</h3>
        <li>SQL for Data Analysis – Udemy</li>
        <h3>Personal Projects</h3>
        <li>Photography Portfolio Website (A fully-featured React website showcasing my photography.)</li>
        <li>Gaming Console (Raspberry Pi, 3D printed enclosure featuring games built with Python Pygame libraries.)</li>
        <li>Soccer Match Outcome Calculator (Predicting soccer match outcomes with competitive sports data)</li>
      </main>
      <contact className="Contact">
        <h1>Contact</h1>
        <p>
          +1 (732) 425-0897
          <br/>
          <Link href="mailto:ruifernandes155@gmail.com" className="Email">ruifernandes155@gmail.com</Link>
          <br/>
          Based in NJ / NY Area
        </p> 
      </contact>
      <footer className="Links">
      <h1>Social Links</h1>
        <SocialIcon
          network="linkedin" 
          url="https://www.linkedin.com/in/rui-fernandes-567409171/" 
          style={{ height: 75, width: 75 }} 
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon 
          network="github" 
          url="https://github.com/RuiSantinoFernandes" 
          style={{ height: 75, width: 75 }}
        />
      </footer>
    </div>
  );
};

export default About;
