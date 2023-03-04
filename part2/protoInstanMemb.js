//we have circle constructor wit 2 members
// the radius property and the draw method
// and we only two circle obj const c1 = new Circle(1);  const c2 = new Circle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
}

// two circle obj const c1 = new Circle(1);  const c2 = new Circle(1);
// have same method (draw)
Circle.prototype === c1__proto__
Circle.prototype.draw = function() {
  console.log('draw');
}
const c1 = new Circle(1);
const c2 = new Circle(1);

//single instance of the draw method

// this obj only has radius property and draw is under prototype  the base obj
// c1
// Circle {radius: 1}
// radius: 1
// [[Prototype]]: Object
// draw: draw: ƒ ()
// constructor: ƒ Circle(radius)
// [[Prototype]]: Object

// c2 is the same
// because the inheritance we can still access it
// c1.draw   draw

//we have tow proerty and tow methods in javascript
// instance members, // prototype members


function Circle(radius) {
  // instance members
  this.radius = radius;
}

// prototype members
Circle.prototype.draw = function() {
  console.log('draw');
}
const c1 = new Circle(1);
const c2 = new Circle(1);


// //Every obj has .toString() method
// // c1.toString()   by defult retutn this string
// // '[object Object]'

// we can overwrite and set it to new function
// this is the new inplementation
Circle.prototype.toString = function() {
  //and return 'Circle with radius' + this.radius;
  return 'Circle with radius' + this.radius;
}
this is the new inplementation
== c1.toString()
  ==='Circle with radius1'


  function Circle(radius) {
    // instance members
    this.radius = radius;
    // we add new method this.move
    this.move = function() {
      console.log('move');
       //we can reference this  method more aqurlly in
    }
  }  // in prototype method

  // prototype members
  Circle.prototype.draw = function() {
    this.move();
    console.log('draw');
  }
  const c1 = new Circle(1);
  const c2 = new Circle(1);

  Circle.prototype.toString = function() {
    return 'Circle with radius' + this.radius;
  }
  // this are the 2 mes
  // c1.draw()
  //  move
  //  draw


  //Reverse
// before moving the Circle we draw
  function Circle(radius) {
    this.radius = radius;

    this.move = function() {
      this.draw();
      console.log('move');

    }
  }
  Circle.prototype.draw = function() {
    // this.move();   delete this for know
    console.log('draw');   // == c1.move() draw move
  }
  const c1 = new Circle(1);
  const c2 = new Circle(1);

Circle.prototype.toString = function() {
  return 'Circle with radius' + this.radius;
 }
}
