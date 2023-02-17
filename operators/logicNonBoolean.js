// This are the falsy in javascripy
// falsy  false
// undefined
// null
// 0
// false
// ''
// NaN

false || true //== true
false || 'Mosh' //== Mosh'
false || 1 //== 1

// Anything that is not falsy is truthy

// short-circuit  it stap after the first true
false || 1 || 2 // == 1

// exemple
// user select the color red
// is user didnot select color is default  wich is blue
let userColor = 'red'; // red
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
