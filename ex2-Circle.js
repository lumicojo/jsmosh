// create a circle obj (literal syntax use)
// prop that can read or write need getter (get), and area prop that read only
// circle.radius = 2;
// circle.area = 20; (like console.log(circle.area);)


const circle = {
  radius: 1,
  get area() {  // method
    //formula  return Math.PI * this * this.radius;
    return Math.PI * this.radius * this.radius;
  }
}
console.log(circle.area);
