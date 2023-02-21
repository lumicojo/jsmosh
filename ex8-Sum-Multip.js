// create a function we git a limit and this sum
// will return all the multiple 3 and 5 from 0 up to this limit
// multiples of 3 are 3,6,9
// multiples of 5 are 5,10   it shoud give you 33
console.log(sum(10));

function sum(limit) {
  let result = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}
console.log(sum(10));
