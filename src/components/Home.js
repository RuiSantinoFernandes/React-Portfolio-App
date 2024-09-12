import React from "react";
import "./Home.css"; // Importing CSS for styling
import Accordian from "./Accordian.js"; // Importing the Accordion component
import { SocialIcon } from 'react-social-icons'; // Social Icons for external social profiles

// Main component for the Home page
const Home = () => {
  return (
    <div className="Home">
      
      {/* Header section containing the name */}
      <header className="Home-header">
        <h1>RUI SANTINO FERNANDES</h1>
      </header>
      
      {/* Main section for the welcome message and introduction */}
      <main className="main">
        <h1>Welcome to my portfolio...</h1>
        <p>Explore and learn more about my passion for photography and engineering.</p>
        <h2>Preview some of my favorite photos below.</h2>
      </main>
      
      {/* Section for displaying the image accordion */}
      <view className="View">
        <Accordian />
      </view>
      
      {/* Footer section with social media links */}
      <footer className="Links">
        <h1>Social Links</h1>
        
        {/* LinkedIn Social Icon */}
        <SocialIcon
          network="linkedin" 
          url="https://www.linkedin.com/in/rui-fernandes-567409171/" 
          style={{ height: 75, width: 75 }} 
        />
        
        {/* Spacer to separate the social icons */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        {/* GitHub Social Icon */}
        <SocialIcon 
          network="github" 
          url="https://github.com/RuiSantinoFernandes" 
          style={{ height: 75, width: 75 }}
        />
      </footer>
      
    </div>
  );
};

export default Home;

