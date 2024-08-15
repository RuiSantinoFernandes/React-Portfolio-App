// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/about" element={<About />} />{" "}
        </Routes>
      </Router>
    </div>
  );
}