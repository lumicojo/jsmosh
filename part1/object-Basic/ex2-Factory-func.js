// To initiliaze an obj address
// First use Factory function then Constructor function

// Factory function
let address =createAddress('a','b', 'c');
console.log(address);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}


//Constructor function
// use the new operat
let address = new Address('a','b', 'c');
console.log(address);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}



