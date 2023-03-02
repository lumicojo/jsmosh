//Abstraction
// is hide the details and show the essentials

function Circle(radius) {
  this.radius = radius;
// define another prop defaultLocation set to an obj {x: 0, y: 0}
  this.defaultLocation = {x: 0, y: 0}
// define another method computeOptimumLocation set to function
  this.computeOptimumLocation = function() {
    // ..
  }
  this.draw = function() {
    // we call this method inside of the draw method
    this.computeOptimumLocation();
    console.log('draw');
  };
}

const circle = new Circle(10);
