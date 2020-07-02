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

// Borrowed from css tricks https://css-tricks.com/converting-color-spaces-in-javascript/
export function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) h = 0;
  // Red is max
  else if (cmax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
  //return "hsl(" + h + "," + s + "%," + l + "%)";
}

export function sortByL(rgbValues) {
  return rgbValues.sort((a, b) => {
    return RGBToHSL(b[0], b[1], b[2])[2] - RGBToHSL(a[0], a[1], a[2])[2];
  });
}
