//Encapsulation
// Abstraction
// Inheritande
// Polymorphism


//Encapsulation  =   reduce complexity + increase reusability
//_________
//|f()   x | x -is property
//|________| f() -is method

//this old
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + (overtime * rate);
// }
// look of obj oriented array to solve this problem
//we have empl obj with 3 prop and method getWage

//Encapsulation   =   reduce complexity + increase reusability
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
}
employee.getWage();
// the best functions are those with no parameters



// ABSTRACTION   == reduce complexity + isolate  impact of changes in the code
// f()
// simpler interface
// reduce the Impact of Change


// INHERITANCE   Eliminate redundant code


//  Polymorphism  Refactor  ugly switch /case statements
// poly = many  morphism = form
