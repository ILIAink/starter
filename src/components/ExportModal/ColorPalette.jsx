import React from "react";

const ColorPalette = ({ shadeColors, tintColors }) => {
  return (
    <div className="color-palette">
      <div className="tinted-colors-list">
        {tintColors.map((color) => {
          return (
            <div
              style={{ background: `#${color.hex}` }}
              className="tinted-color"
              key={color.hex}
            ></div>
          );
        })}
      </div>
      {/* Shaded Colors */}
      <div className="tinted-colors-list">
        {shadeColors.map((color) => {
          return (
            <div
              style={{ background: `#${color.hex}` }}
              className="tinted-color"
              key={color.hex}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPalette;
