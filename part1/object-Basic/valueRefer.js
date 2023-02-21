// we define 2 primitiv
// let x = { value: 10};
// let y = x;

// x.value = 20;

// let number = 10;
// function increase(number) {
//   number++
// }
// increase(number);
// console.log(number);  // 10 they are 2 different object



let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj); // 11 only one obj with 2 veriabale
