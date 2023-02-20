for (let i = 0; i <= 5; i++) {
  if (i % 2 != 0) console.log(i);
}

let i = 0;  // this it evaluate in the begining if we have the value higher then stament will not run
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// DO-While
let i = 0;
do {
  if (i % 2 !== 0) console.log(i); //here it check to see if is odd nr
   i++;
} while (i <= 5); // this evaluate at the end so the loop will execute at list one time
