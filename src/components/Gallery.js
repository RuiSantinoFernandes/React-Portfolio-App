import React from "react";
import { useState } from "react";
import "./Gallery.css"; // Import CSS styles for the gallery
import Lightbox from "yet-another-react-lightbox"; // Lightbox for slideshow capabilities of portfolio photos
import "yet-another-react-lightbox/styles.css"; // Lightbox styles
import Counter from "yet-another-react-lightbox/plugins/counter"; // Counter plugin for showing photo positions in Lightbox
import "yet-another-react-lightbox/plugins/counter.css"; // Counter plugin styles
import { SocialIcon } from 'react-social-icons'; // Social icons for external profile links
import { photos } from './photos';  // Import array of photos for the gallery

function Gallery() {
  
  // State to control the lightbox's open/close state and track the currently displayed image
  const [Open, setOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  // Function to show an image in the lightbox when clicked
  const showImage = (photo) => {
    setImageToShow(photo);
    setOpen(true); // Opens the lightbox when an image is clicked
  };

  return (
    <div>
      {/* Header section with the title */}
      <header className="Gallery-header">
        <h1>GALLERY</h1>
      </header>

      {/* Quote section */}
      <div className="Quote">
        <body>“A good photograph is knowing where to stand.”</body>
      </div>

      {/* Author of the quote */}
      <header className="h2">
        - Ansel Adams 
      </header>

      {/* Description of the author */}
      <div className="Desc">
        <body>(American Photographer & Environmentalist)</body>
      </div>

      {/* Instructions for the user */}
      <div className="Body">
        <body>Click on an image to expand slideshow.</body>
      </div>
      
      <main>
        {/* Gallery grid displaying all photos */}
        <div className="gallery">
          {photos.map((photo, index) => (
            <img
              onClick={() => showImage(photo)}   // Set image on click to open lightbox
              key={index}                        // Unique key for each photo
              src={photo.src}                    // Photo source
              alt={photo.alt}                    // Alt text for accessibility
              className="gallery-photo"          // CSS class for styling gallery photos
            />
          ))}
        </div>

        {/* Lightbox component with the Counter plugin */}
        <Lightbox
          open={Open}               // Lightbox open state
          close={() => setOpen(false)}  // Close lightbox
          slides={photos}           // Slides array (photos)
          plugins={[Counter]}       // Counter plugin for slide numbers
        />
      
        {/* Footer section with social media links */}
        <footer className="Links">
          <h1>Social Links</h1>
          
          {/* LinkedIn social icon */}
          <SocialIcon
            network="linkedin" 
            url="https://www.linkedin.com/in/rui-fernandes-567409171/" 
            style={{ height: 75, width: 75 }}  // Icon size
          />
          
          {/* Spacing between social icons */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          {/* GitHub social icon */}
          <SocialIcon 
            network="github" 
            url="https://github.com/RuiSantinoFernandes" 
            style={{ height: 75, width: 75 }}  // Icon size
          />
        </footer>
      </main>
    </div>
  );
}

export default Gallery;

