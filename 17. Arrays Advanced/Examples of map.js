let arr = [10, 20, 30, 40, 50];

console.log(arr.map(x => x + 1));



//here we are creating a functon of how it works for clarity
let arr = [10, 20, 30, 40, 50];
console.log(map(arr, x => x + 1));

function map(inputArr, operation){
    let result = [];

    for(let item of inputArr){
        let newItem = operation(item);
        result.push(newItem);
    }

    return result;
}



//same as above, what we can also do is
let arr = [10, 20, 30, 40, 50];
console.log(map(arr, icrement));

function map(inputArr, operation){
    let result = [];

    for(let item of inputArr){
        let newItem = operation(item);
        result.push(newItem);
    }

    return result;
}

function icrement(x){
    return x + 1;
}