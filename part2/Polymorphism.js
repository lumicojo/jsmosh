
// extend function
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  }

// Shape Constructor
function Shape() {
}
// this Shape has a duplicte method on its prototype
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}


/// /////////     We have a Shape and 2 child objects cirle and shape

// Circle Constructor
function Circle() {
}
// we have this Circle inheritance  from the Shape
extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log('duplicate circle'); // ==  we get 'duplicate circle'  messege
}


// define a new shape object (square)
// define constructor square
function Square() {
}
extend(Square, Shape)

Square.prototype.duplicate = function() {
  console.log('duplicate square'); // ==  we get 'duplicate circle'  messege
}
// we create a new Circle Object
//const c = new Circle();

//imagine we have an array shape obj
//define an array shapes =[]
const shapes = [
  // add 2 obj new Circle and new Square
  new Circle(),
  new Square
];
//iterate over this array using (for of loop)
for (let shape of shapes)
// and then call duplicate
  shape.duplicate();
// we get in console  duplicate circle ,duplicate square



//before OOP if you wanted to impliment this obj  we use to write  code like
//this.  the old way inpliplimentation
//This is a non object orientend programing

//////////////the old way

// for (let shape of shapes) {
//   if (shape.type === 'circle')
//     duplicateCircle();
//   else if (shape.type === 'square')
//     duplicateSquare();
//   else
//     duplicateShape();
// }
