// obj with 2 prop we want to display fullName we use getter get
// getters == access properties
// setter == change (mutate)
const person = {
  firstName: 'Lumi',
  lastName: 'Cojo',
  // use getter so can access the fullName
  get fullName () {
    return `${person.firstName} ${person.lastName}`;
  },
//}
//console.log(person.fullName); //this is read only

 // can't set person fullName from outside
// we add the setter

  set fullName(value) {  // this method need a param we give (value)
    //value.split(' '); will turn in a array
     //we give them a variable parts
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Carmen Cojo';
console.log(person);
