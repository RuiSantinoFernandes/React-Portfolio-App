import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Nav;