function solve(city) {
    let keys = Object.keys(city);

    for(let key of keys) {
        console.log(key, '->', city[key]);
    }
}



/*
//another way of summarising it
function solve(city) {
    for(let key of Object.keys(city)) {
        console.log(key, '->', city[key]);
    }
}



//another way of doing it using the for in
function solve(city) {
    for(let key in city) {
        console.log(key, '->', city[key]);
    }
}



//another way of doing it, not the best solution
function solve(city) {
    for(let entry of Object.entries(city)) {
        // if we do console.log(entry) we will get e.g. 
        // [ 'name', 'Sofia' ]   
        // [ 'area', 492 ] etc
        console.log(entry[0], '->', entry[1]);
    };

}



//another way of doing it, not the best solution
function solve(city) {
    for(let [key, value] of Object.entries(city)) {  //this [key, value] example is called deconstruction and in that case object.entries will give us an array. And we are basically saying e.g. 1st key put it under key, 2nd value put it under value e.g. name put it under key, Sofia put it under value
        // if we do console.log(entry) we will get e.g. 
        // [ 'name', 'Sofia' ]   
        // [ 'area', 492 ] etc
        console.log(key, '->', value);
    };

}
/*


// city ({
//     name: "Sofia",
//     area: 492,
//     population: 1238438, 
//     country: "Bulgaria", 
//     postCode: "1000"  // e.g. FYI here if I rename it code instead of postCode it will continue working the same way
//     });

// city ({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
//     });