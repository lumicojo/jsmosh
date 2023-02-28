// let x = 1;
// x = 'a';

//defined a fun with 2 param
// function sum(a, b) {
//   return a + b;   // 1=a b=2
//   // 1 + undefined = NaN
// }
// console.log(sum(1, 2)); // 3
// //console.log(sum(1)); // = NaN
// console.log(sum()); //= NaN
// console.log(sum(1, 2, 3, 4, 5)); //  this got 5 arguments  = 3


// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }


function sum(a, b) {
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));//= 15
//console.log(sum(1, 2, 3, 4, 5, 10)); = 25
 // we can add another argument 10  we get 25
