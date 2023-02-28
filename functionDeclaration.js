//Hoisting
//function Declaration
// we can call it befor it is defined
walk();        //= walk
function walk() {
  console.log('walk');
}

// Function Expression
// we can not call it before is defined
let run = function(){
  console.log('run');
};

