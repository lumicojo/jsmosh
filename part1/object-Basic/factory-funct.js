//factory-function
function createCircle(radius) {
  return  {
    radius,
    draw() {
      console.log('draw');
    }
  };
}
//define
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);



// function createCircle(radius, location) {
//   return = {
//     radius: radius,
//     location: location
//     isVisible: true,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }
