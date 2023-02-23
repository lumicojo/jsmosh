const first = [1, 2, 3];
const second = [4, 5, 6];

//to combine the array use .concat
//first.concat(second); will return new arr
const combined = first.concat(second);
console.log(combined); //[1, 2, 3, 4, 5, 6]

//to cut arr in 2 parts use .slice
//we start from 2 and extract 3 and 4
const slice = combined.slice(2, 4); // [3, 4]
console.log(slice);


//we can exclude end index and get all elem inthe original startin from giving index2
const slice = combined.slice(2); // = [3, 4, 5, 6]
console.log(slice);

//to get a copie of original arr
const slice = combined.slice();
console.log(slice); // [1, 2, 3, 4, 5, 6]



// if u have obj in arr they will not be copie jusr their reference will be copied
// and they will point to same obj
// const first = [{ id: 1}]; // we have reference
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;
// const slice = combined.slice();

// console.log(combined);//  [{…}, 4, 5, 6]
// console.log(slice); // [{…}, 4, 5, 6]
