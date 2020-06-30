import React, { useRef, useEffect } from "react";

export const Huw = () => {
  const size = 3;
  const width = 128;
  const ref = useRef();
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
    let ctx = ref.current.getContext("2d");
    for (let y = 0; y < 32768 / width; y++) {
      for (let x = 0; x < width; x++) {
        let i = y * width + x;
        ctx.fillStyle = `rgb(${rgbList[i][0]},${rgbList[i][1]},${rgbList[i][2]})`;
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  });
  return (
    <canvas
      ref={ref}
      width={width * size}
      height={(size * 32768) / width}
    ></canvas>
  );
};
