//1. def shape constructor
function Shape() {
  //2. move the duplicate method and put it under prototype of the shape
  // change the name shape instead circle
    Shape.prototype.duplicate = function() {
      console.log('duplicate');
    }

  }

  function Circle(radius) {
    this.radius = radius;
  }

  //Circle.prototype = Object.create(Object.prototype);// before was objectBase
  Circle.prototype = Object.create(Shape.prototype);// know we chane the new obj that inherit from ShapeBase

  Circle.prototype.draw = function() {
    console.log('draw');
  }
  //2.  move the duplicate method and put it under prototype of the shape
  // Circle.prototype.duplicate = function() {
  //   console.log('duplicate');
  // }
  //3 to make shore is write define 2 obj s Shape and c Circle with radius (1)
  // const s = new Shape();
  // const c = new Circle();
  const s = new Shape();
  const c = new Circle(1);


  //Shape {}
  //[[Prototype]]: Object  == the proto is the base
  //duplicate: ƒ ()
  //constructor: ƒ Shape()
  //Shape base inheritance from this obj witch is the rooth
  //[[Prototype]]: Object
  //constructor: ƒ Object()hasOwnProperty:

  //we have same thing with circle
