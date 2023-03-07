

/
// constr func
function HtmlEement() {
  this.click = function() {  // we have method click
    console.log('clicked');
  }
}
// we have focus method witch define in the prototype  htmlElem
HtmlEement.prototype.focus = function() {
  console.log('focused');
}
// another constructor  a initial parametru an empty array
function HtmlSelectEement(items = []) {
  this.items = items;// before ES6 we use (this.item  || [];)
  // we have 2 methods add andremove items
  this.addItem = function(item) {
    this.items.push(item);
  }
  this.removeItem = function(item) {
    this.items.splice(this.item.indexOf(item), 1);
  }
}
   // we set a prototype of this HtmlSelectElement to a instance of HtmlElem obj
HtmlSelectEement.prototype = new HtmlEement();
HtmlSelectEement.prototype.constructor = HtmlSelectEement;
// or
HtmlSelectEement.prototype.constructor()
new HtmlSelectEement()
// const s = new HtmlSelectEement()
// undefined
// s
// HtmlSelectEement {items: Array(0), addItem: ƒ, removeItem: ƒ}addItem: ƒ (item)arguments: nullcaller: nulllength: 1name: ""prototype: {constructor: ƒ}[[FunctionLocation]]: index.js:16[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]items: []removeItem: ƒ (item)[[Prototype]]: HtmlEement


// to test the code
//Note that you can also inspect the properties of the instances by typing their names in the console and pressing enter.
// like this
// new HtmlEement()
//> HtmlEement {click: ƒ}
