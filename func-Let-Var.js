
// let,const creates block-scope  ES6
function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
start();


// var creates function-scope

//  ishus wt var  scope is not limited to defind
function start() {
  for (var i = 0; i < 5; i++)
    console.log(i);
  console.log(i);
}
start();



 // first prob wit var keywrod
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = 'red'; // this will work
      // let color = 'red' // this will not work error because this is the way it should work
    }
  }
  console.log(color);
}
start();


// global
var collor = 'red'
let age = 30;

function sayHi() {
  console.log('hi');
}
