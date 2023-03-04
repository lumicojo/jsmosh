//Modifing prototype
//      FOR LOOP Return All members (instance + prototype)
//  Object the keys return only the instance members
 // instance is same as OwnProperty
 function Circle(radius) {
  this.radius = radius;

 this.move = function() {
   console.log('move');

 }
}
const c1 = new Circle(1);
Circle.prototype.draw = function() {
 console.log('draw');
}
c1.draw();

console.log(Object.keys(c1));// keys return only instance members  ["radius, move"]
// draw is not return because is a prototype member

////////      FOR LOOP Return All members (instance + prototype)

for (let key in c1) console.log(key); // we got all memb radius, move, draw
//instance == Own
// c1.hasOwnProperty('radius') = true (boolion)

