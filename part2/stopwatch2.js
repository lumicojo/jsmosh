
// move (this.start and this.stop and reset) to the prototype Stopwatch
// you should put methods under prototype as optimization tehnic this
// will create an ishue you will not goint to be able to acces variable
// because are define in this scope of the function
// you able to acces public member of stopwatch
// need to difine this as a public read only prop and the ussing  this.running
function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running)
    throw  new Error('Stopwatch has already started.');

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running)
      throw  new Error('Stopwatch is not started');

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

  }
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {return duration;}
  })
}

Stopwatch()


