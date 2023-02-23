

const numbers = [1, -1, 2, 3]; //false
// only positive numb
const filtered = numbers.filter(function(value) {
  return value >= 0;
});
console.log(filtered); //[1, 2, 3]
// or arrow function

const filtered = num.filter(num => num >=0);
console.log(filtered); //[1, 2, 3]
