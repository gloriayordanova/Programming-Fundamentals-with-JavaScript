function solve(arr){
    let first = arr.shift();
    let last = arr.pop();

    console.log(Number(first) + Number(last));    
}

// solve(['5', '10']);
// solve(['20', '30', '40']);

/* 
!!!!!!!!!!!!! In Arrays:
push() - add to the end
pop() - remove from the end
unshift() - add to the beginning
shift() - remove from the beginning
includes() - look for value
indexOf() - find index of value
*/