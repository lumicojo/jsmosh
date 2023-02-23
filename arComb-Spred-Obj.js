
const first = [1, 2, 3];

const second = [4, 5, 6];
// const combined = first.concat(second)
const combined = [...first, ...second]; //new array
// we can add elem
//const combined = [...first, 'a',...second, 'b']; //new array


const copy = [...combined];
console.log(combined);// =[1,223, 4, 5, 6]




// if u have obj in arr they will not be copie jusr their reference will be copied
// and they will point to same obj
// const first = [{ id: 1}]; // we have reference
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;

// const slice = combined.slice();

// console.log(combined);// =[{…}, 4, 5, 6]
// console.log(slice);// =[{…}, 4, 5, 6]
