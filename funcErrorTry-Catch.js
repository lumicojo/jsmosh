
const person = {
  firstName: 'Lumi',
  lastName: 'Cojo',
  set fullName(value) {
    if (typeof value !== 'string') return;
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// person.fullName = null
// console.log(person);

///    Throw an Error
const person = {
  firstName: 'Lumi',
  lastName: 'Cojo',
  set fullName(value) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string.');
    // const e = new Error(); // this is on obj
    // throw e; //this refer to an exception
    // when throw an error the lines after that will not execute.
    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter a first and last name.')
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// use try block statement
try {
  person.fullName = '';
}
catch (e){
  alert(e)
}

console.log(person);
