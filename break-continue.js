// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//if u want to get out the loop
// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   console.log(i);
//   i++;
// }

let i = 0;
while (i <= 10) {
  //if want to find odd numbers
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
    i++;
}
