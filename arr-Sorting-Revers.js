const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);
// or revers

numbers.reverse();
console.log(numbers);


// sort with obj
const courses = [
  { id: 1, name: 'Node.js'},
  { id: 1, name: 'Javascript'}
];
// need to pass a func for comparison
courses.sort(function(a, b) {
  // if a < b it should return -1
  // if a > b it should return 1
  // if equl a === b should return 0
  // change to uperCase
  const nameA = a.name.toUpperCase(); // javascrip came first
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  //if (a.name === a.name) return 0;
  return 0;
});

console.log(courses);
