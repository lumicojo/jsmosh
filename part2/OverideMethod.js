


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
// Circle Constructor
function Circle() {

}
// we have this Circle inheritance  from the Shape
extend(Circle, Shape);
// we create a new Circle Object
const c = new Circle();

// on console write:
// c.duplicate()  == duplicate
// need to overrite
// to redifie this method in the circle object
// and is very inprtant to put it after extend beacuse you reseat the prototype
// Circle.prototype.duplicate = function() {
//   console.log('duplicate');
// }



function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  }

function Shape() {

}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle() {

}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log('duplicate circle'); // ==  we get 'duplicate circle'  messege
}

// imagine we call the duplicate in parent or on shape obj
Circle.prototype.duplicate = function() {
  // if not useing this in this inpnplemetation
   // Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }
  //we can call that like a regular function
  //Shape.prototype.duplicate();
  // using  call this  for current obj
  Shape.prototype.duplicate.call(this);

  console.log('duplicate circle'); // == first (duplicate ) then second (dupicte cirle)
}
const c = new Circle();
