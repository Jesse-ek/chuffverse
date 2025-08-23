import React from "react";
import "./App.css"; // ✅ includes landing page CSS

export default function LandingPage({ onExplore }) {
  return (
    <div className="landing-page">
      <img
        src="/Landing page.png"
        alt="Landing"
        className="landing-image"
      />
      <button className="explore-btn" onClick={onExplore}>
        Explore
      </button>
    </div>
  );
}
