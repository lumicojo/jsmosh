const circle = {  // we can not reassign veriable
  //const circle we can only delete or add property
 radius: 1
}; // single prop
// we can add another property
circle.color = 'yellow';
// we add a new method draw
circle.draw = function() {}
 //console.log(circle);
// we can delete a member from circleObj it can be proper or method
delete circle.color;
delete circle.draw
 console.log(circle);
