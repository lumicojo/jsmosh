// show all the prime numbers up to this limit
showPrimes(20);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
  }
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false;

  return true;
}


// function showPrimes(limit) {
//   //first number is start with 2
//   for (let number = 2; number <= limit; number++) {
//     //for each numb we need to check if is prime or not
//     // we need another loop that starts from 2 all the way to current numb is i
//     // declare a variable
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }



