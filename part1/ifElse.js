// Hour //
// if hour is between 6am and 12pm = good morning
// if is between 12pm and 6pm good afternoon
// otherwise good evning

let hour = 18;
// if(condition) {
//   statemnt
// }
if (hour >= 6 && hour < 12)
console.log('good morning');

else if (hour >= 12 && hour < 18)
  console.log('good afternoon');

else
    console.log('good evening');
