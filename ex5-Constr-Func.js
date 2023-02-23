// create a post object using constructor function
// title, body, autor, views,
// coments with 2 property (author, body)
// isLive true or false
// use obj literal syntax to create and initialize block post
//
let post = new Post('a', 'b', 'c');


function Post(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0,
  this.coments = [];
  this.isLive = false;

}
console.log(post);
