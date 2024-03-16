function solve(input) {
    // parse input (meaning we should work on the input)
    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;
    let coverConsumtion = weight / 3;

    for(let i = 1; i <= 30; i++){
        // every day do the following:
        // - consume food
        // - consume hay every other day
        // - consume cover every third day
        // - check if we ran out of anything
        // -- if yes, terminate program with wrror message

        food -= 300;

        if(i % 2 == 0) {  //here if we are on day 2 //i % 2 == 0 meaning that the day is an even day, but not odd day
            hay -= food * 0.05;
        }

        if(i % 3 == 0) { //here if we are on day 3 
            cover -= coverConsumtion;
        }

        if(food <= 0 || hay <= 0 || cover <= 0){
            console.log("Merry must go to the pet store!");
            return; // we do that because if any of the food, hay, or cover ends, we want to stop the loop and the code below if we have any won't be done by js; (FYI better here to put return instead of break, as return stops everything, but break just stops the loop and with break if we have something below the loop it will be done by js which would be wrong in our case)
        }
    }

    // print success and remaining supplies
    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);

}

// solve(["10", 
// "5", 
// "5.2", 
// "1"]);
// solve(["1", 
// "1.5", 
// "3", 
// "1.5"]);
// solve(["9", 
// "5", 
// "5.2", 
// "1"]);