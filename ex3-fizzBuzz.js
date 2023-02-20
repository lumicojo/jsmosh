//we have a function fizzbuzz we give an input wchi it will return a String
//we declare a constant output = fizzBuzz(3)
// then log output in console
// if numb divisible by 3 = Fizz
// if numb divisible by 5 = Buzz
// if numb divisible by 3 and 5 = 15 = fizzBuzz
// if numb not divisible by 3 and 5 = same input
// if input not a numb = NaN
// first check to see if is a number with typeOf

const output = fizzBuzz(1);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
   return 'NaN';
   if (input % 3 === 0 && input % 5 === 0)
   return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 === 0)
    return 'Buzz';
    return input;
}


