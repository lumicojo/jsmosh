// useObject to define property to define getter and or setters

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = {x: 0, y: 0};

  this.getDefaultLocation = function() {
    return defaultLocation;
  };
  this.draw = function() {
   console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {      // we can do validation
      if (!value.x || !value.y)
        throw new Error('Invalid location.');

      defaultLocation = value;
    }
  });
}


const circle = new Circle(10);
//circle.getDefaultLocation();
circle.defaultLocation = 1;
circle.draw();
