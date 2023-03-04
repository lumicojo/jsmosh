
// A prototype is just a regular Object in memory


// multilevel inheritance

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }
// const circle = new Circle(10);


//Constructor Prototype
//Object.getPrototypeOf(myObf);    // myObj.__proto__ (parent of myObj)
// Constructor.prototypr ()  is the same (parent of myObj) answer
// every func has prop and methods

// constructor circle
// function Circle(radius) {
//   this.radius = radius;
// }
// // here is the prototype property
//this is the obj that be use for the parent objects created by the Circle Constructor
// this are the same from consoler
//obj.__proto__
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//Object.prototype
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Circle.prototype
// const circle = new Circle(1)


// exmplu
// array.__proto__
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]  this the obj that
//include all the methods that can call in array. We call this (baseArray)
//the same obj
//Array.prototype
//[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
 // one mor exampl circle obj


//  circle
//  Circle {radius: 1} has a prototype
// radius: 1
//__proto__:
// Circle we called circleBase it only has the constructor property
//constructor: f Circle(radius)
//__proto__: Object

// we created the circle obj using Circle constructor this constr has
// property witch return circleBase circlebase is the name i giveit its the rooth
// Circle.prototype
// {constructor: f}
// so the two obj are the same
