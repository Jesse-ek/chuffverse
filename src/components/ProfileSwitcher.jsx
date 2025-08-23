import React, { useEffect } from "react";

export default function ProfileSwitcher({ character, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext]);

  return (
    <div className="profile-card">
      <div className="profile-top">
        <button className="arrow" aria-label="Previous" onClick={onPrev}>❮</button>

        <div className="profile-image-wrap">
          <img src={character.profile} alt={`${character.name} profile`} />
        </div>

        <button className="arrow" aria-label="Next" onClick={onNext}>❯</button>
      </div>

      <div className="profile-name">{character.name}</div>
    </div>
  );
}
