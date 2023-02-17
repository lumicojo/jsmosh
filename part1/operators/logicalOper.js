// logical and &&
// return true if both oper are true
// console.log(true && true); // true
// console.log(false && true); // false

// //exemple
// //  is eligibileForLoan true or false
// let highIncome = true;
// let goodCreditScore = true;
// let eligibileForLoan = highIncome && goodCreditScore
// console.log(eligibileForLoan); // true


// // logical OR ||
// //return true if one is true
// //if both the same the condit is true
// let highIncome = false;
// let goodCreditScore = true;
// let eligibileForLoan = highIncome || goodCreditScore
// console.log(eligibileForLoan); // true

// Not ! oper

let highIncome = false;
let goodCreditScore = false;
let eligibileForLoan = highIncome || goodCreditScore
console.log('Eligibile',eligibileForLoan); // false

let applictionRefused = !eligibileForLoan;
console.log('Appliction Refused', applictionRefused); // true
