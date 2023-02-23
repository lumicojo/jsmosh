// check number if they are positive
//const numbers = [1, 2, 3]; true
/////////   every
const numbers = [1, 2, -1, 3]; //false
const allPositive = numbers.every(function(value) {
  return value >= 0;
});

console.log(allPositive); // fase

//////   sum  some
const numb = [1, 2, -1, 3]; //false
const atListOnePositive = numb.some(function(value) {
  return value >= 0;
});

console.log(atListOnePositive); // true
