import React, { useState, useRef, useEffect } from "react";

export const Huw = () => {
  const ref = useRef();
  let [color, setColor] = useState("");
  const size = 25;
  const width = 32;
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

  useEffect(() => {
    const rgbList = getRGBList();
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");

    canvas.addEventListener("mousemove", (e) => {
      let i =
        Math.floor(e.offsetY / size) * width + Math.floor(e.offsetX / size);
      // There's a race condition where mousemove is called with coordinates outside the canvas
      if (i < 0 || i > 32767) {
        return;
      }
      const rgbValue = `rgb(${rgbList[i][0]},${rgbList[i][1]},${rgbList[i][2]})`;
      setColor(rgbValue);
    });

    for (let y = 0; y < 32768 / width; y++) {
      for (let x = 0; x < width; x++) {
        let i = y * width + x;
        ctx.fillStyle = `rgb(${rgbList[i][0]},${rgbList[i][1]},${rgbList[i][2]})`;
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  });
  return (
    <>
      {color && (
        <h2 style={{ position: "fixed", color: `${color}` }}>Color: {color}</h2>
      )}
      <canvas
        ref={ref}
        width={width * size}
        height={(size * 32768) / width}
      ></canvas>
    </>
  );
};
