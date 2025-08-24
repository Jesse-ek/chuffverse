import React from "react";
import "../styles.css";

export default function LandingPage({ onExplore }) {
  return (
    <div className="landing-page">
      <img
        src="/Landingpage.png" // make sure the name matches exactly
        alt="Landing"
        className="landing-image"
      />
      <button className="explore-btn" onClick={onExplore}>
        Explore
      </button>
    </div>
  );
}
