import React from "react";

export default function CharacterStage({ imageSrc, name }) {
  return (
    <div className="stage">
      <img src={imageSrc} alt={`${name} full`} draggable="false" />
    </div>
  );
}
