// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return directorsArray = moviesArray.map(elem => elem.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const director = `Steven Spielberg`;
    const ourGenre = `Drama`;
    const moviesSteven = moviesArray.filter((elem) => elem.director === director).filter((elem) => elem.genre.includes(ourGenre));
  
    return moviesSteven.length;;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    const average=moviesArray.reduce((function(acl,curr){
        if(typeof curr.score === "number"){
            return acl+(curr.score/moviesArray.length)
        }else{
            return acl
        }        
    
    }),0)
    const averageRounded= Math.round(average *100)/100
    return averageRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes(`Drama`) )
    return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
