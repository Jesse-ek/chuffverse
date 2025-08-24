import React, { useEffect, useMemo, useState } from "react";
import CHARACTERS from "./data/characters";
import ProfileSwitcher from "./components/ProfileSwitcher";
import AccessoryGrid from "./components/AccessoryGrid";
import CharacterStage from "./components/CharacterStage";
import CharacterBio from "./components/CharacterBio";
import "./App.css"; // your CSS
import "./styles.css"; // additional CSS

const buildDefault = () =>
  CHARACTERS.reduce((acc, c) => {
    acc[c.name] = { rowIndex: null, shirt: false, cap: false };
    return acc;
  }, {});

export default function App() {
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState(buildDefault);

  const character = CHARACTERS[index];
  const active = selection[character.name] ?? {
    rowIndex: null,
    shirt: false,
    cap: false,
  };

  const shownImage = useMemo(() => {
    if (active.rowIndex == null) return character.base;

    const row = character.rows[active.rowIndex];
    if (active.shirt && active.cap) return row.compositeBoth;
    if (active.shirt) return row.compositeShirt;

    return character.base;
  }, [character, active]);

  useEffect(() => {
    const imgs = [
      character.base,
      ...character.rows.flatMap((r) => [r.compositeShirt, r.compositeBoth]),
    ];
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [character]);

  const goPrev = () =>
    setIndex((i) => (i - 1 + CHARACTERS.length) % CHARACTERS.length);
  const goNext = () => setIndex((i) => (i + 1) % CHARACTERS.length);

  const onToggleShirt = (rowIndex) => {
    setSelection((prev) => {
      const curr = prev[character.name] ?? {
        rowIndex: null,
        shirt: false,
        cap: false,
      };

      let next = { ...curr };

      if (curr.rowIndex === rowIndex) {
        next.shirt = !curr.shirt;
        if (!next.shirt && !next.cap) {
          next.rowIndex = null;
        }
      } else {
        next = { rowIndex: rowIndex, shirt: true, cap: false };
      }

      return { ...prev, [character.name]: next };
    });
  };

  const onToggleCap = (rowIndex) => {
    setSelection((prev) => {
      const curr = prev[character.name] ?? {
        rowIndex: null,
        shirt: false,
        cap: false,
      };

      let next = { ...curr };

      if (curr.rowIndex === rowIndex) {
        next.cap = !curr.cap;
        if (!next.shirt && !next.cap) {
          next.rowIndex = null;
        }
      } else {
        next = { rowIndex: rowIndex, shirt: false, cap: true };
      }

      return { ...prev, [character.name]: next };
    });
  };

  const clearCurrent = () =>
    setSelection((prev) => ({
      ...prev,
      [character.name]: { rowIndex: null, shirt: false, cap: false },
    }));

  return (
    <div
      className="page"
      style={{
        backgroundColor: character.bg,
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Desktop Layout */}
      <aside className="left-pane desktop-only">
        <div className="profile-switcher">
          <ProfileSwitcher
            character={character}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <AccessoryGrid
          rows={character.rows}
          active={{
            rowIndex: active.rowIndex,
            shirt: active.shirt,
            cap: active.cap,
          }}
          onToggleShirt={onToggleShirt}
          onToggleCap={onToggleCap}
          gridColor={character.bg}
        />
      </aside>

      <main className="right-pane desktop-only">
        <CharacterStage
          imageSrc={shownImage}
          name={character.name}
          character={character}
        />
        <CharacterBio character={character} />
      </main>

      {/* Mobile Layout */}
      <div className="mobile-only mobile-layout">
        <div className="mobile-profile">
          <ProfileSwitcher
            character={character}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <div className="mobile-stage character-row">
          <CharacterStage
            imageSrc={shownImage}
            name={character.name}
            character={character}
          />
          <CharacterBio character={character} />
        </div>
{/* Accessories Title */}
  <h2 className="accessories-title">Accessories</h2>
        <div className="accessory-section scrollable-grid">
          {character.rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div
                className={`tile shirt-tile ${
                  active.rowIndex === rowIndex && active.shirt ? "active" : ""
                }`}
                onClick={() => onToggleShirt(rowIndex)}
              >
                <img src={row.shirt} alt={`Shirt ${rowIndex}`} />
              </div>

              <div
                className={`tile cap-tile ${
                  active.rowIndex === rowIndex && active.cap ? "active" : ""
                }`}
                onClick={() => onToggleCap(rowIndex)}
              >
                <img src={row.cap} alt={`Cap ${rowIndex}`} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
