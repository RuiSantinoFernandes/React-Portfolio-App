import React from "react";
import "./Home.css";
import Accordian from "./Accordian.js";
import { SocialIcon } from 'react-social-icons'

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>RUI SANTINO FERNANDES</h1>
      </header>
      <main className="main">
        <h1>Welcome to my portfolio...</h1>
        <p>Explore and learn more about my passion for photography and engineering.</p>
        <h2>Preview some of my favorite photos below.</h2>
      </main>
      <view className="View">
        <Accordian />
      </view>
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

export default Home;
