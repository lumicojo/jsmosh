const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

//////// The best  Spred operator to clone
//the best way to clone is spred operator
const another = {...circle };
console.log(another);



// tis is old way to clone
// const another = {};
// for (let key in circle)
//   another[key] = circle[key];
// set prop to another obj
//another['radius'] = circle['radius']

//this is new way to clone
const another = Object.assign({}, circle);
console.log(another);

//     example we add color
const another = Object.assign({
  color: 'yellow'
}, circle);
console.log(another);

