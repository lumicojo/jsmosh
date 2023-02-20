//This is the list of js list of falsy
//undefined,null,'',false, 0,Nan

// create a func wch takes an array
// return the number of thruty elements in this array
// return thruty values
//example
// const array = [ 0, null, 1, 2, 3];
// console.log(countTruthy)(array)); =3
// const array = [ 0, null, 2, 3];if remove 1
// console.log(countTruthy)(array)); you get  =2

const array = [0, null, '', 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
  //declare a varib assign to 0
  let count = 0;
  // for loop to iterate array  to check each elem if is thruty or not
  for (let value of array)
    // if value is thruty
    if  (value)
    // increment count
      count++;
  return count;
}

