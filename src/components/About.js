import React from "react";
import "./About.css";
import { SocialIcon } from 'react-social-icons'

const About = () => {
  return (
    <div className="About">
      <header className="About-header">
        <h1>ABOUT ME</h1>
      </header>
      <header className="Sub-header">
        <h1>Stevens Institute of Technology</h1>
        <h2>B.S. Computer Engineering</h2>
      </header>
      <main>
        <p>
          I am an artist and developer with a love for capturing unique
          perspectives. I pursue my passion by taking photographs, 
          often highlighting symbolic emotions or ideologies I find interesting.
        </p>
      </main>
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
