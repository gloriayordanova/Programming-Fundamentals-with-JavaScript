function manageMovies(arr) {
    let movies = [];

    for (let command of arr){
        // console.log(command); we will see that it is printed addMovie Fast and Furious addMovie Godfather etc.
        if(command.includes('addMovie')) {  //includes can be used in an array as well as in a string
            let movieName = command.split('addMovie ')[1]; //if we console.log(movieName); here we will print Fast and Furious
            let movieObj = { name: movieName};
            movies.push(movieObj);

        } else if (command.includes('directedBy')) {
            let [movieName, directorName] = command.split(' directedBy '); 
            //console.log(movieName); and here it will print e.g. Inception
            //console.log(directorName); // and here it will print e.g. Christopher Nolan

            let movie = movies.find(movie => movie.name == movieName); //.find is used in arrays //we do it that way, becase movies is an Array which includes Objects in it // казваме влез в масива с movies (този масив съдържа различни обекти) и намери този филм, чието име е равно на това име което аз търся  e.e Inception

            if (movie) { //meaning if movie exists and it is not undefined
                movie.director = directorName; //we say to the current Object for a mover, add director which name is directorName e.g. Christopher Nolan
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate '); 
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = date; 
            }
        }
    }

    for(let movie of movies) {
        // console.log(movie); it will print e.g {name: 'Fast and Furious', date: '30.07.2018', director: 'Robe Cohen'}
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie)); //because they want us to print it in JSON format
        }
    }
}

manageMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

// manageMovies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);