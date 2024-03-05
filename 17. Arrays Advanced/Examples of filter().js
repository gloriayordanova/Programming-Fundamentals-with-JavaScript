let arr = [10, 20, 30, 40, 50, 60];

console.log(arr.filter(x => true)); // or it is the same result if we do console.log(arr.filter(() => true));
//just for info, if we have arr.filter((x, i) => sth) so x is the element where i is the index (FYI this is also relevant with the map. where (x, i) and x should be the element and i will be the index)



let arr = [10, 20, 30, 40, 50, 60];

console.log(arr.filter(x => x % 20 != 0)); 



//here we are creating a functon of how it works for clarity
let arr = [10, 20, 30, 40, 50, 60];
console.log(filter(arr, x => x % 20 != 0));

function filter(inputArr, predicate){
    let result = [];

    for(let item of inputArr){
        if(predicate(item)){
            result.push(item);
        }
    }

    return result;
}