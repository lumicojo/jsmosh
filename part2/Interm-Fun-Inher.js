// Intermediate Function Inheritance
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}


// this is intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  }

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('draw');
}
// Create a constructor square take (size)
function Square(size) {
  this.size = size;
}
extend(Square, Shape);



// we want the square to inharitance from the Shape
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;


// in console we can create a new square to size 10
// const sq = new Square(10)
// then inspect inconsole
//sq
//Square {size: 10} we have size prop
//  we prototype we don't have any methos in proto

const s = new Shape();
const c = new Circle(1, 'red');



