//Adding or remove Properties
// 1.  we have Circle constructor func
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);
//to get the keys
for (let key in circle) {
  console.log(key);  // = radius  draw
}

     //for in loop to get the value []
const circle = new Circle(10);
for (let key in circle){
  console.log(key,circle[key]); // = radius 10 and draw is a funct
}

// get only property not the method
const circle = new Circle(10);
for (let key in circle){
  if (typeof circle[key] !== 'function')
  console.log(key,circle[key]); // = radius 10
}
// get all the keys
const keys = Object.keys(circle);
console.log(keys); // = radius ,draw
// (in) Operator  to check for existing property or a method use (in)
if ('radius' in circle)
  console.log('Circle has radius') // =Circle has radius
