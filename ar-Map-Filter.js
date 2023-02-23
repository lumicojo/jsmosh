
// we want to make an HTML in markup
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >=0);

const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items); // ['<li>1</li>', '<li>2</li>', '<li>3</li>']

// we can use join to create a string
const html = items.join('');
console.log(html); // <li>1</li><li>2</li><li>3</li>


//the only thing remind is ul (unorderList)
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);// here is html markup
// <ul><li>1</li><li>2</li><li>3</li></ul>
//to display all this numbers using bulet points


// use maping to an obj

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >=0);

const items = filtered.map(n => ({value: n }) );


console.log(items); // [{…}, {…}, {…}]



// this is chainible
const numbers = [1, -1, 2, 3];

const items = numbers
  .filter(n => n >=0)
  .map(n => ({value: n }));

  console.log(items); // [{…}, {…}, {…}]
