// we can use filter() method to remove elem from the input array thet are included array

const numbers = [1, 2, 3, 4];
const output = except(numbers, [1, 2])
console.log(output); // [3, 4]

function except(array, excluded) {
  return array.filter(item => !excluded.includes(item));
}


//function except(array, excluded) {
// const output = [];
//   for (let element of array) // to iterate over each elem in origin arr
//     if (excluded.includes(element))
//       output.push(element);
//    return output;
//}
