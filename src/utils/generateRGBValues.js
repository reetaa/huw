export function generateRGBValues() {
  const rgbCollection = [];
  for (let r = 0; r < 32; r++) {
    for (let g = 0; g < 32; g++) {
      for (let b = 0; b < 32; b++) {
        rgbCollection.push([r * 8, g * 8, b * 8]);
      }
    }
  }
  return rgbCollection;
}
