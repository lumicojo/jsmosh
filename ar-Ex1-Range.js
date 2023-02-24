
const numbers = arrayFromRange(1, 7);


function arrayFromRange(min, max ) {
  // create an empty array
  const array = []
  //use for loop to generate from min to max
  for (let i = min; i <= max; i++ )
  array.push(i);
  return array;

}
console.log(numbers);
