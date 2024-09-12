// Import necessary libraries and components
import React from "react"; // Import React library
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client to manage the root element
import App from "./App"; // Import the main App component

// Get the root element from the DOM
const container = document.getElementById("root"); // Select the root element where the React app will be rendered

// Create a root for React to manage the app
const root = createRoot(container); // Create a root container for the React app

// Render the React application
root.render(
  <React.StrictMode> {/* Enables additional checks and warnings for the app */}
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
