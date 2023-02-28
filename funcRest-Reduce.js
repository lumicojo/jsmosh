
//  Rest Operator   (...args)

// function sum(...args) {
//   console.log(args);
// }

// console.log(sum(1, 2, 3, 4, 5, 10));//= 15
//  // we can add another argument 10  we get 25

 // We can use the reduce array

 function sum(...args){
  // args is an array
  return args.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4, 5, 10)); // 25



// shoping cart
//passing prices inthe shopping cart
function sum(discount,...prices){
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));  //45
