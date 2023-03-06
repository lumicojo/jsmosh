
function Shape() {
}
  Shape.prototype.duplicate = function() {
    console.log('duplicate');
  }

function Circle(radius) {
  this.radius = radius;
}

///// resset
// Circle.prototype.constructor = Circle;
// new  Circle.prototype.constructor() => new Circle();
// this reset the protot of Circle is a problem
Circle.prototype = Object.create(Shape.prototype);
//when to reset the prototype of an obj you schold resset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1);


//new Circle.prototype.constructor(1)  == echivalent  new Circle(1)
