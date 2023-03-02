//Adding or remove Properties
// 1.  we have Circle constructor func
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
// 2.  and we create circle obj.
const circle = new Circle(10);
// we add a new propert
circle.location = { x: 1};
 //or like this the braket notation we can write
circle['location'] = {x: 1};

const propertyName = 'location';
circle[propertyName] = {x: 1};

//we can delete a property from an obj
delete circle.location;
// or use [] brakets
delete circle['location'];
