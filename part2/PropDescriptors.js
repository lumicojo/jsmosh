// Javascript has no classes only objects

// Javascript has 2 inheritance
// inheritance : Clssical
//               Prototypicl


                           Base/super/parent
                                 ^
                      /  --> | Shape  | <-----\
            is-A   /            -------          \
                /          computeOptimumLocation   \
                __________                  ________
                |        |                 | Squere |
                |  Circle|                 |        |
                ----------                 ----------

              Derived/sub/child

let person = {name: 'Carmen'}
//console.log(person);obj
//for (let key in person)
  //console.log(key); ==name
console.log(Object.keys(person)); // only see ["name"] property


/////  lets get prototype per person witch will be calling (objectBase) variable
let person = {name: 'Carmen'}
let objectBase = Object.getPrototypeOf(person);
//Object.getOwnPropertyDescriptor(objectBase, 'toString');
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);


let person = {name: 'Carmen'}
Object.defineProperty(person, 'name', {
  writable: false, // writable is the write atribute this will become read only
  enumerable : false // another atribute
});
person.name = 'John';//this will become read only
console.log(person);//this will become read only  == {name: 'Carmen'}
if we log console.log(Object.keys(person)) for enumerable we get empty arry[]

let person = {name: 'Carmen'}
Object.defineProperty(person, 'name', {
  writable: false, // writable is the write atribute this will become read only
  enumerable : false // another atribute  if enumerate was true ie will show in cosole ["name"]
});
person.name = 'John';
console.log(Object.keys(person)); // = []
by default all this atributs (writable and enumerable) are true


// if  cofigurable to false:
let person = {name: 'Carmen'}
Object.defineProperty(person, 'name', {
  writable: false, // writable is the write atribute this will become read only
  enumerable : true, // another atribute  if enumerate was true ie will show in cosole ["name"]
  configurable: false // we can not delete this prop
});
person.name = 'John';
console.log(Object.keys(person));
