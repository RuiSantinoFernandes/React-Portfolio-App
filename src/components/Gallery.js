import React from "react";
import "./Gallery.css";
// import {SlideshowLightbox} from 'lightbox.js-react'
// import 'lightbox.js-react/dist/index.css'


function Gallery() {

  const photos = [
    { src: "./Album/Airplane.jpg", alt: "Photo 1" },
    { src: "./Album/BlackDoor.jpg", alt: "Photo 2" },
    { src: "./Album/BrooklynTowerHD.jpg", alt: "Photo 3" },
    { src: "./Album/CoverPhoto.jpg", alt: "Photo 4" },
    { src: "./Album/DowntheStreet.jpg", alt: "Photo 5" },
    { src: "./Album/DreamyBT.jpg", alt: "Photo 6" },
    { src: "./Album/GraffitiMailbox.jpg", alt: "Photo 7" },
    { src: "./Album/Icarus.jpg", alt: "Photo 8" },
    { src: "./Album/NavyYardPlant.jpg", alt: "Photo 9" },
    { src: "./Album/TheWindows.jpg", alt: "Photo 10" },
    { src: "./Album/WilliamsburgBridge.jpg", alt: "Photo 11" },
    { src: "./Album/Apocalypse.jpg", alt: "Photo 12" },
    { src: "./Album/Apts.jpg", alt: "Photo 13" },
    { src: "./Album/BillboardPink.jpg", alt: "Photo 14" },
    { src: "./Album/Brooklyn.jpg", alt: "Photo 15" },
    { src: "./Album/Communication.jpg", alt: "Photo 16" },
    { src: "./Album/Creep.jpg", alt: "Photo 17" },
    { src: "./Album/Firetruck.jpg", alt: "Photo 18" },
    { src: "./Album/HeadHi.jpg", alt: "Photo 19" },
    { src: "./Album/Ledge.jpg", alt: "Photo 20" },
    { src: "./Album/Levels.jpg", alt: "Photo 21" },
    { src: "./Album/NightCommuter.jpg", alt: "Photo 22" },
    { src: "./Album/Projects.jpg", alt: "Photo 23" },
    { src: "./Album/Warehouse.jpg", alt: "Photo 24" },
    { src: "./Album/WaterTower.jpg", alt: "Photo 25" },
  ];

  // let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="Gallery-header">
        <h1>GALLERY</h1>
      </header>
      {/* <button onClick={() => {setIsOpen(true)}}>
        Open Lightbox
      </button>
      <SlideshowLightbox 
        theme="lightbox"
        images={photos} 
        showThumbnails={true} 
        open={isOpen} 
        lightboxIdentifier="lbox1"
        onClose={() =>{setIsOpen(false)}}>     
      </SlideshowLightbox> */}
      <main>
        <div className="gallery">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              className="gallery-photo"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gallery;
