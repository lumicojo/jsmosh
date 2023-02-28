// method -> obj
// function -> global (window, global)

///////////  don't recomand this

//change (this keyword) in value a function  whith (self)
// .bind
const video = { //obj
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() { // method
       // const self = this;  no need this one
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    });   // .bind(this));   no need this
  }
};
video.showTags();

////         or with Arrow => FUNCTION   ES6

const video = { //obj
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() { // method
    this.tags.forEach(tag => {
      console.log(self.title, tag);
    });
  }
};
video.showTags();



////////////          Exemplu
function playVideo() {
  console.log(this);
}  // call method
playVideo.call({name: 'Lumi'}); // new obj
// apply method need to use arry
playVideo.apply({name: 'Lumi'}); // apply need to use arry
playVideo(); // this ref window obj


// difference between call and apply is passing argum
function playVideo(a, b) { // multiple arg
  console.log(this);
}  // call method
playVideo.call({name: 'Lumi'},1,2); // we can supplay multiple arg 1, 2
// apply method need to use arry
playVideo.apply({name: 'Lumi'},[1, 2]); // apply need to pass them array
// method bind  this method is not call playVideo function
// it return new function and set to point to this obj we pass here
playVideo.bind({name: 'Lumi'})();


playVideo(); // this ref window obj
