// return sum
// sum(1, 2, 3, 4) => 10
// modify sum  in the array and get the same sum 10
// sum ([1, 2, 3, 4]) => 10
// see if the argument  is an array to that //Array.isArray() method


// the ... = spred operator change it to an array
function sum(...args){  // ... is an array  ... = spred operator
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10



// flating Mosh

console.log(sum([1, 2, 3, 4]));  // 01,2,3,4
function sum(...args) {   // in this args is an array of array and the first elem in the arraye is an array of numbers
  if(args.length === 1 && Array.isArray(args[0])) //need to flat use the spred oper ...
  // we reset the arr and use ...
  args = [...args[0]];
  return args.reduce((a, b) => a + b);
}





// GPT way

function sum() {
  let numbers;
  if (Array.isArray(arguments[0])) {
    // If the first argument is an array, use it as the list of numbers
    numbers = arguments[0];
  } else {
    // Otherwise, create an array from the arguments
    numbers = Array.from(arguments);
  }
  // Calculate the sum using Array.reduce
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return total;
}
console.log(sum(1, 2, 3, 4)); // returns 10
console.log(sum([1, 2, 3, 4])); // 01,2,3,4






function sum(a, b) {
  let total = 0;
  for (let value of  arguments)
    total += value;
    return total;
}
console.log(sum(1, 2, 3, 4));   // 10
