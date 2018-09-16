import React from "react";

const ColorSquare = ({color, size}) => {
  let backgroundColor;
  switch(color) {
    case "green":
    case "yellow":
    case "red":
    case "papayawhip":
      backgroundColor = color;
      break;
    default:
      backgroundColor = "papayawhip";
  };
  const style = {
    backgroundColor,
    height: size,
    width: size,
  };
  
  return <div style={style}></div>;
};

export default ColorSquare;
