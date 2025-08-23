import React from "react";
import "../styles.css"; // ✅ use the shared stylesheet

export default function CharacterBio({ character }) {
  if (!character?.description) return null;

  return (
    <div className="character-bio">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
}
