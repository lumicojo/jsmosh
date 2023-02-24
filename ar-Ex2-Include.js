//create an array include that takes an array and searchElement
// if you array include seachElement it should return true;

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, seachElement) {
  //for (let element of array) or
  for (let i = 0; i < array.length; i++)
  if (i === seachElement)
    return true;
    return false;
}



// mine
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function include(array, seachElement) {
  if (array === seachElement)
  return true;
}
