// get :
//All the movie in 2018 with rating > 4
// Sort them by their rating
// Pick their title


const movies = [
  { title: 'a', year: 2018, rating: 4.5},
  { title: 'b', year: 2018, rating: 4.7},
  { title: 'c', year: 2018, rating: 3},
  { title: 'd', year: 2017, rating: 4.5},
]


// create a veriable
// const filteredMovies = movies
//   // use the filter method to create a new arr of movies
//   // that match the cond 1028 and > 4
//   .filter(movie => movie.year === 2018 &&
//     movie.rating > 4)
//    // use sort method to sort the filtered arr in descsending order by rating prop
//   .sort((a, b) => b.rating - a.rating)
//   //use .map to create a new array just for title prop
//   .map(movie => movie.title)

// console.log(filteredMovies);



// or
const titles = movies
.filter(movie => movie.year === 2018 && movie.rating > 4)

.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)
console.log(titles);  //['b', 'a']

s
