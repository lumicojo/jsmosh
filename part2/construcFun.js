

///////////////////////  3 WAYS TO CREATE AN OBJECT

//////         OBJECT LITERAL

//This circle has 3 members; radius, location, and draw. Draw is a method, radius and location are properties
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {  // draw is a method
    console.log('draw');
  }
}
circle.draw();



//////////////////   FACTORIES

// FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius,      //radius,  we can remove if value are the same
    draw: function() {
      console.log('draw');
    }
  };
}
// call this func to create a new circle  pss 1 as new radius
const circle = createCircle(1);


//////////////// CONSTRACTOR

//         FACTORY CONSTRUCTOR
// define a functin with constructor is diferent

function Circle(radius) {
  // we don't need it   console.log('this', this); this it show in console if interested to see is global
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
//create a new circle,pas1 as arg .The (new) create a new emty obj {}
const another = new Circle(1); {}
