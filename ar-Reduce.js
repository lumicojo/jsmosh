// calculate all the num in array
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers)
  sum += n;
  console.log(sum);// 5


// reduce we can reduce all elem in this arr i a single numb value

const sum = numbers.reduce((acumulator, currentValue) => {
  return acumulator + currentValue;
},0);
console.log(sum); //5

// // short way
const sum = numbers.reduce(
  (acumulator, currentValue) => acumulator + currentValue);
  console.log(sum); // 5
