// method = obj
// function = global (window in browser and globa Node)

///  First rule    /Method Obj
const video = { //obj
  title: 'a',
  play() { // method
    console.log(this);
  }
};
// we can later :
video.stop = function() {    // stop is method in the video obj
  console.log(this);
};

video.play(); // when we call see video obj  in console
video.stop(); //



 sec rule   Function = global

const video = { //obj
  title: 'a',
  play() { // method
    console.log(this);
  }
};

function playVideo() {
  console.log(this); // will see global obj (window in browser and globa Node)
}
playVideo();


const video = { //obj
  title: 'a',
  play() { // method
    console.log(this);
  }
};
// this constructor function (video we pass the property title) an set this
function Video(title) {
  this.title = title;
  console.log(this); // will see global obj (window in browser and globa Node)

}
// the new operator create a new obj like this {} and sets (this) to point to the empty obj {}
const v = new Video('b');





const video = { //obj
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() { // method
    this.tags.forEach(function(tag) {
      //console.log(tag); // this showes only tag
      // to add the title next to the tag
      console.log(this.title, tag);
    },this);  //first solution
  }
};
video.showTags();
