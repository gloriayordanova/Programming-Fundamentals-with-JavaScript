function solve(arr){
    let oddIndexes = arr.filter((x, i) => i % 2 != 0); //so x is the element where i is the index  (FYI this is also relevant with the map. where (x, i) and x should be the element and i will be the index)

    let doubled = oddIndexes.map(x => x * 2);

    let reversed = doubled.reverse();

    let result = reversed.join(' ');

    console.log(result);
}

// solve([10, 20, 30, 40, 50, 60]);



/*
//here showing summarised version, we do that because we have used some of the variables just once
function solve(arr){ 
    console.log(arr.filter((x, i) => i % 2 != 0).map(x => x * 2).reverse().join(' '));
}

solve([10, 20, 30, 40, 50, 60]);
*/



/*
//same as above, the the practice is to be recorded like that
function solve(arr){ 
    console.log(
        arr
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(' ')
    );
}

solve([10, 20, 30, 40, 50, 60]);
*/



/*
//similar to above, but written in another way
function solve(arr){ 
    console.log(
        arr
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(' ')
    );
}

solve([10, 20, 30, 40, 50, 60]);
*/



/* here steps by steps changing function above to see how we can modify it
function solve(arr){ 
    return arr
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(' ');
}

solve([10, 20, 30, 40, 50, 60]);

     //then

(arr) => arr  // the word function that was here, we relace it with => and we delete {} that were here, beacuse we have just 1 row with return
            .filter((x, i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(' ');

solve([10, 20, 30, 40, 50, 60]);

    //and we received that

arr => arr.filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');

solve([10, 20, 30, 40, 50, 60]);

    //fyi if we want to see a printed result in the console.log, we do

let solve = arr => arr.filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');

console.log(solve([10, 20, 30, 40, 50, 60]));
*/  