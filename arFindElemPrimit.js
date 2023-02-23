const num = [1, 2, 3, 1, 4];
console.log(num.indexOf('a')); // -1 we don't have it in this array
console.log(num.indexOf(1));// = 0

console.log(num.indexOf('1')); // -1 because don't exist
console.log(num.lastIndexOf(1));// = 3

console.log(num.indexOf(1) !== -1);// true because is in array
// or
console.log(num.includes(1)); //true

console.log(num.indexOf(1, 2));// = 3
// two arguments first 1 and second argument 2 it call from index witch
// research will begin with second1 witch = 3
// so indexof 1 = 0
