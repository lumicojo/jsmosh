
// A prototype is just a regular Object in memory


// multilevel inheritance

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(10);
