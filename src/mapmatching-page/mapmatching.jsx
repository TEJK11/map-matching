import React from 'react';
import "./mapmatching.css";
import MapContent from "../components/Mapcontent";

const MapMatching = () => {
  return (
    <div className="map-matching-container">
      <section className="map-matching">
        <h1 className="map-h1"><span className="highlight">MAP </span>MATCHING</h1>
        <p><span className="highlight">Track vehicular movement with precision</span>, even when GNSS signals are intermittent or biased. Our advanced algorithm uses AI and ML techniques to map and distinguish vehicle movement on <span className="highlight">highways versus service roads</span>, ensuring accurate positioning and enhanced performance for applications like GNSS-based tolling.</p>

        <MapContent />
      </section>
    </div>
  );
};

export default MapMatching;