import React, { useState, useRef, useEffect, useCallback } from "react";
import { Scale } from "./Scale";
import { Width } from "./Width";

export const Huw = () => {
  const ref = useRef();
  let [color, setColor] = useState("");
  let [pixel, setPixel] = useState(1);
  let [width, setWidth] = useState(256);
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

  const mouseMoved = useCallback(
    (e) => {
      let i =
        Math.floor(e.offsetY / pixel) * width + Math.floor(e.offsetX / pixel);
      // There's a race condition where mousemove is called with coordinates outside the canvas
      if (i < 0 || i > colorLength - 1) return;
      if (!ref.current) return;
      const ctx = ref.current.getContext("2d");
      let sample = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
      const rgbValue = `rgb(${sample[0]},${sample[1]},${sample[2]})`;
      setColor(rgbValue);
    },
    [pixel, width]
  );

  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    const rgbList = getRGBList();
    for (let y = 0; y < colorLength / width; y++) {
      for (let x = 0; x < width; x++) {
        // let i = y * width + x;
        let i = Math.floor(Math.random() * rgbList.length);
        let sample = rgbList.splice(i, 1)[0];
        ctx.fillStyle = `rgb(${sample[0]},${sample[1]},${sample[2]})`;
        ctx.fillRect(x * pixel, y * pixel, pixel, pixel);
      }
    }
    canvas.addEventListener("mousemove", mouseMoved);
    return () => {
      canvas.removeEventListener("mousemove", mouseMoved);
    };
  }, [pixel, width, mouseMoved]);
  return (
    <>
      <div style={{ position: "fixed" }}>
        <Scale setPixel={setPixel} pixel={pixel} />
        <Width setWidth={setWidth} width={width} />
        {color && <h3 style={{ color: `${color}` }}>Color: {color}</h3>}
      </div>
      <canvas
        ref={ref}
        width={width * pixel}
        height={(pixel * colorLength) / width}
      ></canvas>
    </>
  );
};
