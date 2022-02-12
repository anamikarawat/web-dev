//Get the movie Names from this Array of Objects
//only get the movie name which has rating higher than or equal to 8
// use Filter and map  chaining to achaive the objective


var newReleases = [
    {
        "id": 1,
        "title": "Die Hard",
        "rating": 9

    },
    {
        "id": 2,
        "title": "Bad Boys",
        "rating": 7

    },
    {
        "id": 3,
        "title": "The Chamber",
        "rating": 10

    },

];

// let movieName = newReleases.map(function(movie){
//     return movie.rating
// }).filter(function(rating){
//     return rating >= 8
// })
// console.log(movieName)

//=========================================================
let movieNameGreaterThan8 = newReleases
.filter(function (movie) {
    return movie.rating >= 8;

})
.map(function (movie) {
    return movie.title;
});

console.log(movieNameGreaterThan8)
