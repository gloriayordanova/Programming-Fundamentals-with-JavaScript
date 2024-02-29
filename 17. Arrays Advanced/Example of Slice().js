let arr = [10, 20, 30, 40, 50];
console.log(slice(arr, 1, 3));     // in that case it will print [20, 30], because we know slice works that way, e.g. it always deletes the last figure from the array, this is why it only copies [20, 30] as a result

function slice(inputArr, start, end){
    let result = [];

    for(let i = start; i < end; i++){      
        result.push(inputArr[i]);
    }

    return result;
}



let arr = [10, 20, 30, 40, 50];
console.log(slice(arr, 1, -1));   //now if we want to have negative values for the minus values, we should have if. when dealing with negative values, we add the length of the array, this is how it works  //here we basically say skip 1 in the beginning and skip 1 at the end (as we remember how slice works when with negatives, it starts countig from right to left (see 1.Sum Fist and Last for more info to remember how it works))
//it will print [20, 30, 40]
function slice(inputArr, start, end){
    let result = [];

    if(start < 0){
        start += inputArr.length;
    }
    if(end < 0){
        end += inputArr.legth;
    }

    for(let i = start; i < end; i++){      
        result.push(inputArr[i]);
    }

    return result;
}