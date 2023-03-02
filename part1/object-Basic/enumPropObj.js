const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};
//         for  in loop

//to get the keys
for (let key in circle)
console.log(key);

//      for in loop to get the value []
for (let key in circle)
console.log(key,circle[key]);

//        for of loop

//use Object to get all the keys and will return an array
for (let key of Object.keys(circle))
  console.log(key);

/////          method Entries
//it return each key value pair as an array
for (let entry of Object.entries(circle))
  console.log(entry);

// in operator
//you can see if property exist in obj use the in oper
if ('radius' in circle) console.log('yes');
