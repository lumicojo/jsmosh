
let numbers = [1, 2, 3, 4];
let another = numbers;

//solution 1
// numbers = [];
// console.log(numbers);  // = []

// //solution 2 will truncate remove all elem
numbers.length = 0;
console.log(numbers);  // = []
console.log(another); //=[]

//solution 3 remove one all elem
numbers.splice = (0, numbers.length);
console.log(numbers);  // = []
console.log(another);  // =[]

