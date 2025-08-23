import React from "react";

export default function AccessoryGrid({ rows, active, onToggleShirt, onToggleCap }) {
  return (
    <div className="grid">
      <div className="grid-header">
        <span>SHIRTS</span>
        <span>CAPS</span>
      </div>

      {rows.map((row, i) => {
        const isActiveRow = active?.rowIndex === i;
        const shirtActive = isActiveRow && active?.shirt;
        const capActive = isActiveRow && active?.cap;

        return (
          <div key={i} className={`grid-row ${isActiveRow ? "active" : ""}`}>
            {/* Shirt tile */}
            <button
              className={`tile shirt-tile ${shirtActive ? "active" : ""}`}
              onClick={() => onToggleShirt(i)}
              aria-pressed={shirtActive}
            >
              <img src={row.shirt} alt={`Shirt ${i + 1}`} />
            </button>

            {/* Cap tile */}
            <button
              className={`tile cap-tile ${capActive ? "active" : ""}`}
              onClick={() => onToggleCap(i)}
              aria-pressed={capActive}
            >
              <img src={row.cap} alt={`Cap ${i + 1}`} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
