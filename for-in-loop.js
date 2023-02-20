// for in loop
const person = {
  name: 'Mosh',
  age : 30
};

// for (let key in person)
//   console.log(key);

//dot notation
//person.name

for (let key in person)
  console.log(key,person[key]);

// bracket notation
//person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
  //console.log(index);
// if you want the element  too use [] brakets
console.log(index, colors[index]);
