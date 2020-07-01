import React, { useState, useRef, useEffect } from "react";
import { Scale } from "./Scale";
import { Width } from "./Width";

export const Huw = () => {
  const ref = useRef();
  let [color, setColor] = useState("");
  let [size, setSize] = useState(1);
  let [width, setWidth] = useState(32);
  const colorLength = 32768;

  const getRGBList = () => {
    const rgbCollection = [];
    for (let r = 0; r < 32; r++) {
      for (let g = 0; g < 32; g++) {
        for (let b = 0; b < 32; b++) {
          rgbCollection.push([r * 8, g * 8, b * 8]);
        }
      }
    }
    return rgbCollection;
  };

  const handleColor = (e) => {
    const rgbList = getRGBList();
    let i = Math.floor(e.offsetY / size) * width + Math.floor(e.offsetX / size);
    // There's a race condition where mousemove is called with coordinates outside the canvas
    if (i < 0 || i > colorLength - 1) return;
    const rgbValue = `rgb(${rgbList[i][0]},${rgbList[i][1]},${rgbList[i][2]})`;
    setColor(rgbValue);
  };

  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    const rgbList = getRGBList();

    for (let y = 0; y < colorLength / width; y++) {
      for (let x = 0; x < width; x++) {
        let i = y * width + x;
        ctx.fillStyle = `rgb(${rgbList[i][0]},${rgbList[i][1]},${rgbList[i][2]})`;
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
    canvas.addEventListener("mousemove", handleColor);

    return () => {
      canvas.removeEventListener("mousemove", handleColor);
    };
  });
  return (
    <>
      <div style={{ position: "fixed" }}>
        <Scale setSize={setSize} size={size} />
        <Width setWidth={setWidth} width={width} />
        {color && <h2 style={{ color: `${color}` }}>Color: {color}</h2>}
      </div>
      <canvas
        ref={ref}
        width={width * size}
        height={(size * colorLength) / width}
      ></canvas>
    </>
  );
};
