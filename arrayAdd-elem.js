const numbers = [3 , 4];
// end
numbers.push(5,6);
// Begining
numbers.unshift(1,2);
// Middle
numbers.splice(2, 0, 'a', 'b');
          //= [1, 2, 'a', 'b', 3, 4, 5, 6]
console.log(numbers);



