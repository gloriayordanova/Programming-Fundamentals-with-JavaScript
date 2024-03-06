let arr = [3, 5, 1, 7, 0];

console.log(arr);
arr.sort();

console.log(arr);



let arr = [3, 5, 1, 7, 0, 11]; //if we add 11, we see now they are note sorted corectly [ 0, 1, 11, 3, 5, 7 ] because it sorts the using ASCII code

console.log(arr);
arr.sort(compare); //first write the function above, then later add here (compare)

console.log(arr);

function compare (a, b){  
    if(a > b) {
         return 1;//to understand what we do see Examples of sort() 3 and 4 and  5
    } else if (a < b)  {
        return - 1;
    } else {
        return 0;
    }
}
//at the end good to debug it to see how exactly it works



//based on the above, we can also do, and the printed result will be [ 0, 1, 3, 5, 7, 11 ]
let arr = [3, 5, 1, 7, 0, 11]; 

console.log(arr);
arr.sort(compare); 

console.log(arr);

function compare (a, b){ 
    return a - b;
}



//based on the above, we can also do, and the printed result will be [ 11, 7, 5, 3, 1, 0 ]
let arr = [3, 5, 1, 7, 0, 11]; 

console.log(arr);
arr.sort(compare); 

console.log(arr);

function compare (a, b){ 
    return b - a;
}


/*
let arr = [3, 5, 1, 7, 0, 11]; //here showing that we can also summarise it

console.log(arr);
arr.sort(compare); 

console.log(arr);

(a, b) => a - b;

// and we can even do it

let arr = [3, 5, 1, 7, 0, 11]; //here showing that we can also summarise it

console.log(arr);
arr.sort((a, b) => a - b); 

console.log(arr);