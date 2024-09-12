import React from "react"; 
import "./Home.css";  // Importing the CSS for styling the 'Accordian' component

// 'Accordian' component to display an image-based accordion section
const Accordian = () => {
  return (
    <div className="img-accordion">
      {/* First image with description */}
      <div className="img DreamyBT">
        <p>BT Dreams</p>  {/* Caption for the image */}
      </div>

      {/* Second image with description */}
      <div className="img WilliamsburgBridge">
        <p>Williamsburg Bridge</p>  {/* Caption for the image */}
      </div>

      {/* Third image with description */}
      <div className="img NavyYardPlant">
        <p>Navy Yard</p>  {/* Caption for the image */}
      </div>

      {/* Fourth image with description */}
      <div className="img BrooklynTowerHD">
        <p>Brooklyn Tower</p>  {/* Caption for the image */}
      </div>
    </div>
  );
};

// Exporting the 'Accordian' component as the default export
export default Accordian;
