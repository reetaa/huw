export function generateLinearValues() {
  const rgbValues = [];
  for (let r = 0; r < 32; r++) {
    for (let g = 0; g < 32; g++) {
      for (let b = 0; b < 32; b++) {
        rgbValues.push([r * 8, g * 8, b * 8]);
      }
    }
  }
  return rgbValues;
}

export function generateRandomValues() {
  const rgbValues = [];
  let linearValues = generateLinearValues();
  while (linearValues.length > 0) {
    let i = Math.floor(Math.random() * linearValues.length);
    rgbValues.push(linearValues.splice(i, 1)[0]);
  }
  return rgbValues;
}
