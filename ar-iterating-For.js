const numbers = [1, 2, 3];
// sol 1
for (let number of numbers);
console.log(numbers);
// sol 2
numbers.forEach(number => console.log(number));
//sol 3
// numbers.forEach(function(number) {
//   console.log(number);
// });

// 2 Parametry
numbers.forEach((number, index) => console.log(index,number));
