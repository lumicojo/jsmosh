//inpliment function it takes 2 parameter width inner Height
//of a image and returns true if landscape width > height else return false

function isLandscape(width, height) {
  if (width > height) return true;
  else false;
}
console.log(isLandscape(800, 600));


          //or
console.log(isLandscape(500, 400));

function isLandscape(width, height) {
  //width > height ? true : false;
  return (width > height);
}

