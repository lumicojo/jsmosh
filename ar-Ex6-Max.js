
// return the largest number in array
const numbers = [1, 2, 3, 4];
const max = getMax(numbers)

console.log(max);

function getMax(array) {
  // check if the array is empty
  if (array.length === 0) return null;
  // create a verib and set to first elem in the array
  let max = array[0];
  // for loop start with the second 1 elem and run the loop
  // as long i is less then length arr, incremment i
  for (let i = 1; i < array.length; i++) {
    // check if current number is larger then max
    if(array[i] > max) {
      // return max
      max = array[i];
    }
  }
   return max;
}

//console.log(max); // 4






const max = getMax([1, 2, 2, 1, 3]);
console.log(max);

function getMax(array) {
  if (array.length === 0) return null;

  let max = array[0];

  for (let i = 1; i < array.length; i++)
    if(array[i] > max)
      max = array[i];
   return max;
}
