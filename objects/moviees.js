var moviesDB = [
  {
    title: "Harry Poter",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Nemo",
    rating: 3,
    hasWatched: false
  },
  {
    title: "Star Wars",
    rating: 5,
    hasWatched: true
  }
];

moviesDB.forEach(function(movie){
  var msg = "";
  if(movie.hasWatched === true) {
    msg += "You have watched ";
  }
  else {
    msg += "You have not seen "; 
  }
  msg += '"' + movie.title + '"';
  msg += " - " + movie.rating + " stars";
  console.log(msg);
});
