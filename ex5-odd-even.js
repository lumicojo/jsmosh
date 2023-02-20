//make a function showNumbers that take a parametr limit
// to return all the num from 0 to 10
// if should display even if is even  or odd  = odd

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, 'even')
    else console.log(i, 'odd');
  }

}

//console.log(showNumbers(limit));


//Use % the modulo sign to check if i divided by 2 leaves a remainder of 0.
// If i is even, it logs the message "i is even" to the console.
// Otherwise, it logs the message "i is odd" to the console.
function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

