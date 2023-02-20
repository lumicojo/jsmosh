const person = {
  name: 'Mosh',
  age : 30
};

for (let key in person)
  console.log(key,person[key]);

  // for in loop
// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//   console.log(index, colors[index]);

// for of loop
const colors = ['red', 'green', 'blue'];
for (let color of colors)
  console.log(color);
