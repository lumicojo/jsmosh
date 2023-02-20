const numbers = [1, 2, 3, 4];
const max = getMax(numbers);

console.log(max);

function getMax(numbers) {
  if (numbers.length === 0) {
    return null; // return null if the array is empty
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
    return max;
}
