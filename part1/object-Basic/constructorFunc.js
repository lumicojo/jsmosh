//constructor function   PascalNotation
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
//this is how we create a circle with constructorFunc
// define and we get new obj with (this)
const circle = new Circle(1);


//ConstructorProperty

function createCircle(radius) {
  return  {
    radius,
    draw() {
      console.log('draw');
    }
  };
}
const another = new Circle(1);



//factory-function  camelNotation

function createCircle(radius) {
  return  {
    radius,
    draw() {
      console.log('draw');
    }
  };
}
// this is how we create a circle factory-funct
const myCircle = createCircle(1);
