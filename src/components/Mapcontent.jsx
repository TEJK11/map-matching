import React from 'react';
import './MapContent.css';

const MapContent = () => {
  // Dummy data for demonstration
  const currentRoad = "Service Road";
  const currentSpeed = "45 km/h";

  return (
    <div>
      <div className="map-content-container">
        {/* Put map here pls */}
        <p>This is the map content.</p>
      </div>
      <div className="info-box">
        <h2>Road Detected: <p>{currentRoad}</p></h2>
        <h2>Current Speed: <p>{currentSpeed}</p></h2>
      </div>
    </div>
  );
};

export default MapContent;