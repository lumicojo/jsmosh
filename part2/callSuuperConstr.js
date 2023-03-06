//Calling the Super Constructor
function Shape(color) {
  // i want every shape to have a color
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius, color) {
  // call it
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');


//new Circle.prototype.constructor(1)  == echivalent  new Circle(1)
