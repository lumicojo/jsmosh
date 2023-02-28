
// function interest(principal, rate, years) {
// // formula to calculate interst principal * rate / 100 * years
//   return principal * rate / 100 * years;
// }
// console.log(interest(10000, 3.5, 5));  // 1750

// What if have Default for interst rate and numbers of years
// function interest(principal, rate, years) {
//   // formula to calculate interst principal * rate / 100 * years
//   // tehnic rate = rate || 3.5
//   rate = rate || 3.5;
//   years = years || 5;
//   return principal * rate / 100 * years;
// }
//   console.log(interest(10000));


// DEFAULT    this is short way
function interest(principal, rate = 3.5, years = 5) {
  return principal * rate / 100 * years;
}
console.log(interest(10000));
