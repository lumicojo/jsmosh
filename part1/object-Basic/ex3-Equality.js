// create 2 address obj
// create 2 functions: to check if they are equal if they are same reference and all prop are different
//function areEqual(address1,address2) if equal true or false
// function areSame(address1, address2) are they pointed to same obj


// use the new operat
let address1 = new Address('a','b', 'c'); //true
let address2 = new Address('a','b', 'c'); // false
// we add  add3; address1 and addres3  veriables they will be same poin in the memory
let address3 = address1;
//Constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}



function areEqual(address1,address2){
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
  return address1 === address2;
}

console.log(areEqual(address1, address2)); // true
console.log(areSame(address1, address2)); // false
console.log(areSame(address1, address3)); // true
