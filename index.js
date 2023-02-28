
// function start() {
//   const message = 'hi';

//   if (true) {
//     const another = 'bye';
//   }
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// start();



// Global Scope
const color = 'red';

function start() {
  const message = 'hi';
  const color = 'blue'; // blue
  console.log(color);
}

function stop() {
  const message = 'bye';
}

start();
