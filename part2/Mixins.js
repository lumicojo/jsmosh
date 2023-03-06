
// const canEat = {             // obj lit syntax
//   eat: function() {          // add 1 metho
//     this.hunger--;
//     console.log('eating')
//   }
// }  // we define one future of an obj
// // we can define another future

// const canWalk = {
//   walk: function() {
//     console.log('walking')
//   }
// };
// use Object.assign() == copie the property and moved method
// from one obj to another
//we create a comunation and callet person  Object.assign({}, canEat, canWalk);
// const person = Object.assign({}, canEat, canWalk);
//   console.log(person);  // eat walk


// we can use constructor func
// function Person() {
// }   // we just modify prototype person and add eat and walk
// Object.assign(Person.prototype, canEat, canWalk);
//   console.log(person);
//  function Person() {
//   }
//   Object.assign(Person.prototype, canEat, canWalk);
// // next we create a person obj that person will have this
// const person = new Person();
//  console.log(person);   // person {}

///////////////////////////////////////////////////////////
// ////   MIXINX
// to make more readible we can substract this logic
// this line;  Object.assign(Goldfish.prototype, canEat, canSwim);
// into a function called mixin
// use the restOperator ... and source
// ...source will collect
//all the arguments and turn it in the Array
function mixin(target, ...sources) {  // ... rest operator
  Object.assign(target, ...sources); // ... spred operator
}

 const canEat = {             // obj lit syntax
  eat: function() {          // add 1 metho
    this.hunger--;
    console.log('eating')
  }
}
const canWalk = {
  walk: function() {
    console.log('walking')
  }
};

// Swim
const canSwim = {
  swim: function() {
    console.log('swim');
  }
}
//const person = Object.assign({}, canEat, canWalk);
 // console.log(person);  // ear,walk

function Person() {
}
Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person
console.log(person);

// we define a new constructor goldfish
function Goldfish() {
}
// use Object.assign to modify the prototype goldfish and use mixt
//Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
// create a new goldfish obj
const goldfish = new Goldfish;
console.log(goldfish);  // == eat swim
