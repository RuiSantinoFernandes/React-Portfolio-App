// src/App.js

// Import necessary libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router, Route, and Routes for routing
import Home from "./components/Home"; // Import Home component
import About from "./components/About"; // Import About component
import Gallery from "./components/Gallery"; // Import Gallery component
import Nav from "./components/Nav"; // Import Nav component

// Main App component
export default function App() {
  return (
    <div className="App"> {/* Container div for the App */}
      <Router basename={process.env.PUBLIC_URL}> {/* Router setup with base URL from environment variables */}
        <Nav /> {/* Navigation component */}
        
        <Routes> {/* Define routes for the application */}
          {/* Route for the Home page */}
          <Route exact path="/" element={<Home />} />
          
          {/* Route for the Gallery page */}
          <Route exact path="/gallery" element={<Gallery />} />
          
          {/* Route for the About page */}
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
