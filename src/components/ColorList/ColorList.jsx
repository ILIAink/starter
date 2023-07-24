import React from "react";
import SingleColor from "../SingleColor/";

const ColorList = ({ colors }) => {
  return (
    <div className="color-list">
      {colors.map((color, index) => {
        let brightness = color.getBrightness();
        return (
          <SingleColor key={index} color={color} brightness={brightness} />
        );
      })}
    </div>
  );
};

export default ColorList;
