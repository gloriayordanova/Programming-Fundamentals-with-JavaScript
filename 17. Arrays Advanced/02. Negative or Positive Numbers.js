function solve(arr){
    let result = [];

    for(let numAsString of arr){
        let num = Number(numAsString);

        if(num < 0){
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for(let num of result){   // or alternative of that is I can just do console.log(result.join('\n'));   and that\n will make each element to a new line
        console.log(num);
    }
}

// solve(['7', '-2', '8', '9']);
// solve(['3', '-2', '0', '-1']);


// useful we always do:
//standard for loop is used when we need the index
//for(let sth of arr) is used when we are not interested in the index