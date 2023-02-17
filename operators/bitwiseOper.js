// 1 = 00000001 this is 1baite of info in the compiuter
// 2 = 00000010
// 3 = 00000011
// R = 00000000


//imagine u want inpliment  an access control sys
// User can have this permision read , write, execute
// we can use 5 zeros and 1 for read and for write and execute we use zero zero  00000100

// Read, Write, Execute
// 00000100
// 00000110  = read and write permision
// 00000111  = if user has all this permision
//console.log(1 | 2); //Bitwise OR  = 3
//console.log(1 & 2); //Bitwise And  = 0


// Read, Write, Execute
// 00000100
// 00000110  = read and write permision
// 00000111  = if user has all this permision
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
// know i can give me more permission
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);  // = 6 we dont care about this decimal numb
// we can use betwise to see  if i have permision
// Example
let message =
(myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // yes
