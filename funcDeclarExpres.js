//function Declaration
function walk() {
  console.log('walk');
}

// Function Expression
// let run = function(){
//   console.log('run');
// };

//Anonymous Expression Function
let run = function(){
    console.log('run');
};
let move = run;
run();


// Named Function Expression
// let run = function walk(){
//   console.log('run');
// };
