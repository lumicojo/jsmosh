// catch the exception and log it in the console

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
}
catch (e) {
  console.log(e.message);
}
// this is the try block
// const numbers = [1, 2, 3, 4];
// const count = countOccurrences(null, 1);
// console.log(count);
//// this is the try block
// and then catch add the adentifier for exception (catch (e))
function countOccurrences(array, searchElement) {
  // need to validate the first arg(array)
  // if is not a valid array
  if (!Array.isArray(array))
  //you want to trow an exception
    throw new Error('Invalid array.')
// know wrap the code in try pak block
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    //console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
