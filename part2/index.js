//Stopwatch

function Stopwatch() {
  let startTime, endTime, running, duration = 0  // define private variable

  this.start = function() { // if running
    if (running)
    throw new Error('Stopwatch has already started.'); // otherwise
    running = true; //and start time with the current  date time
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) // if is not running throw new error
      throw new Error('Stopwatch is not started.') //otherwise set running to false
      running = false; //next set current time to the date time
      endTime = new Date(); // and then we calculate the seconds with in the endtime is starting
      // we called endtime.getTime and substracted from startTime.gettime .
      // we divided by 1000 to gey the seconds and add that to duration veriable
      const seconds = (endTime.getTime() - startTime.getTime()) /1000;
      duration += seconds;
  };

  this.reset = function() { // we set this variable to intail value
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
// define only read propertu duration witch use get: return duration witch is local variable
  Object.defineProperties(this, 'duration', {
    get: function() {return duration;}
  })
}
jj
