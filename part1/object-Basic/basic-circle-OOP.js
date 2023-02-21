
//Object oriented programing (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};

// we can access with .notation
circle.draw(); // draw Method



// we dont need them anymore
// put this variable inside of a obj (circle)
// let radius = 1;
// let x = 1;
// let y =  1;

// function draw() {}
// function move() {}
