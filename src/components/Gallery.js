import React from "react";
import {useState} from "react";
import "./Gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { SocialIcon } from 'react-social-icons';

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
    { src: "./Album/Apts2.jpg", alt: "Photo 26" },
    { src: "./Album/Autumn.jpg", alt: "Photo 27" },
    { src: "./Album/BrokklynLightHouse.jpg", alt: "Photo 28" },
    { src: "./Album/Chip.jpg", alt: "Photo 29" },
    { src: "./Album/Chip2.jpg", alt: "Photo 30" },
    { src: "./Album/ClockTowerBG.jpg", alt: "Photo 31" },
    { src: "./Album/Commute.jpg", alt: "Photo 32" },
    { src: "./Album/Helicopter.jpg", alt: "Photo 33" },
    { src: "./Album/ManhattanSkyline.jpg", alt: "Photo 38" },
    { src: "./Album/MRFantasy.jpg", alt: "Photo 39" },
    { src: "./Album/MRPond1.jpg", alt: "Photo 40" },
    { src: "./Album/MRPond2.jpg", alt: "Photo 41" },
    { src: "./Album/MRPurplePond.jpg", alt: "Photo 42" },
    { src: "./Album/MTR1.jpg", alt: "Photo 43" },
    { src: "./Album/MTR2.jpg", alt: "Photo 44" },
    { src: "./Album/MTR3.jpg", alt: "Photo 45" },
    { src: "./Album/MTR4.jpg", alt: "Photo 46" },
    { src: "./Album/MTR5.jpg", alt: "Photo 47" },
    { src: "./Album/OGSkyline.jpg", alt: "Photo 48" },
    { src: "./Album/OntheRoad.jpg", alt: "Photo 49" },
    { src: "./Album/OPSkyline.jpg", alt: "Photo 50" },
    { src: "./Album/PinkSkies.jpg", alt: "Photo 51" },
    { src: "./Album/PurpleProjects.jpg", alt: "Photo 52" },
    { src: "./Album/PurpleSkyline.jpg", alt: "Photo 53" },
    { src: "./Album/RunningOutofTime.jpg", alt: "Photo 55" },
    { src: "./Album/SteveWalking.jpg", alt: "Photo 56" },
    { src: "./Album/TwoBirds.jpg", alt: "Photo 57" },
    { src: "./Album/UndertheBridge.jpg", alt: "Photo 58" },
    { src: "./Album/VerticalOGApt.jpg", alt: "Photo 59" },
    { src: "./Album/VerticalSkyline.jpg", alt: "Photo 60" },
    { src: "./Album/Washingtopn.jpg", alt: "Photo 61" },
  ];

  const [Open, setOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState('')
  const showImage = (photo) => {
    setImageToShow(photo);
    setOpen(true);
  };
  return (
    <div>
      <header className="Gallery-header">
        <h1>GALLERY</h1>
      </header>
      <div className="Quote">
        <body>“A good photograph is knowing where to stand.”</body>
      </div>
      <header className="h2">
        - Ansel Adams 
      </header>
      <div className="Desc">
        <body>(American Photographer & Environmentalist
        )</body>
      </div>
      <div className="Body">
        <body>Click on an image to expand slideshow.</body>
      </div>
      
      <main>
      
      <div className="gallery">
          {photos.map((photo, index) => (
            <img
              onClick={() => showImage(photo)}
              key={index}
              src={photo.src}
              alt={photo.alt}
              className="gallery-photo"
            />
          ))}
        </div>

      <Lightbox
        open={Open}
        close={() => setOpen(false)}
        slides={photos}
        plugins={[Counter]}
      />
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
      </main>
    </div>
  );
}

export default Gallery;
