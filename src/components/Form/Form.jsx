import React, { useRef, useState } from "react";
import { CgColorPicker } from "react-icons/cg";

const Form = ({
  inputColor,
  setInputColor,
  colors,
  showModal,
  setShowModal,
  setExportTitle,
}) => {
  const optionSelectRef = useRef();
  setExportTitle((optionSelectRef.current?.value)?.toLowerCase());

  let lightGradient = `#${colors[2].hex}`;
  let darkGradient = `#${colors[9].hex}`;
  const style = {
    background: `linear-gradient(
    156deg,
    ${lightGradient} 0%,
    ${darkGradient} 50%
  )`,

    filter: colors[9].getBrightness() >= 50 && "inverted(100%)",
  };

  const colorPickerRef = useRef(null);
  //  console.log(`${colorPickerRef.current?.value.replace("#", "")}`);
  return (
    <div style={style} className="header-container">
      <div className="header-imp-container">
        <div className="color-select-container">
          <div className="color-picker-box">
            <CgColorPicker
              onClick={() => {
                colorPickerRef.current.click();
              }}
              className="color-picker-icon"
            />
            <input
              ref={colorPickerRef}
              onChange={() => setInputColor(colorPickerRef.current.value)}
              type="color"
              value={inputColor}
            />
          </div>
          <input
            type="text"
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
          />
        </div>
        <div className="export-form">
          <select ref={optionSelectRef}>
            <option>Primary</option>
            <option>Secondary</option>
            <option>Accent</option>
            <option>Text</option>
          </select>
          <button onClick={() => setShowModal(!showModal)} className="btn">
            Export
          </button>
        </div>
      </div>
      <h4
        style={{
          color: colors[9].getBrightness() <= 50 ? "white" : "black",
        }}
        className="header-title"
      >
        CSS Shades Generator
      </h4>
    </div>
  );
};

export default Form;
