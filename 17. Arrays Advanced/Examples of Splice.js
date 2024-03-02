// if we have an array 10 20 30 40 50 (see example below), and we do splice (2, 2), what it will do it will delete from 2nd element and will count 2, which meansthe result will be [30, 40] so these two elements we deleted will be returned in a new array 

let arr = [10, 20, 30, 40, 50];

console.log(arr.splice(2, 2));