// Importing necessary libraries and modules
import { React, useState } from "react"; // Importing React and useState hook
import { Link } from "react-router-dom"; // Importing Link for navigation between pages
import "./Nav.css"; // Importing the CSS for styling the navigation

// Functional component for the navigation bar
const Nav = () => (
  <nav className="nav"> {/* Defining the navigation container */}
    {/* Navigation links using 'Link' component from react-router-dom */}
    <Link to="/">Home</Link> {/* Link to the Home page */}
    <Link to="/gallery">Gallery</Link> {/* Link to the Gallery page */}
    <Link to="/about">About</Link> {/* Link to the About page */}
  </nav>
);

// Exporting the Nav component to be used in other parts of the application
export default Nav;
