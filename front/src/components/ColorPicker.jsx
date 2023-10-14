import React from "react";
import { SketchPicker } from "react-color";
import { useColor } from "../hooks";

const ColorPicker = () => {
  const { color, setColor } = useColor();
  return (
    <div className="absolute top-0 left-full ml-3">
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(color) => setColor(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
