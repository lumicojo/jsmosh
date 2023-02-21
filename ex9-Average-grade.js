
const marks = [80, 80, 50];

//80+80+50=210%3=  aver 70
//if 0-59 f
//   60-69 d
//   70-79 c
//   80-89 b
//   90-100 a
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks)
    sum += mark;
  let average = sum / marks.length;

  if (average < 60 )return 'f';
  if (average < 70) return 'd';
  if (average < 80) return 'c';
  if (average < 90) return 'b';
  if (average < 100) return 'a';
  return 'A';
}


/////////////////  or

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);

//   if (average < 60 )return 'f';
//   if (average < 70) return 'd';
//   if (average < 80) return 'c';
//   if (average < 90) return 'b';
//   if (average < 100) return 'a';
//   return 'A';
// }
// function calculateAverage(array) {
//   let sum = 0;
//   for (let mark of array)
//     sum += mark;
//   return sum / array.length;
//   }
