const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];
const course = courses.find(function(course){
  return course.name ==='a'//  {id: 1, name: 'a'}
});

const course = courses.findIndex(function(course){
  return course.name ==='a'//  = 0
});

const course = courses.find(course => course.name ==='a');

console.log(course);



// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found); // 12

