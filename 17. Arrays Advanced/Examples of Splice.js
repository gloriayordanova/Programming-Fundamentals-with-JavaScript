// if we have an array 10 20 30 40 50 (see example below), and we do splice (2, 2), what it will do it will delete from 2nd element and will count 2, which meansthe result will be [30, 40] so these two elements we deleted will be returned in a new array 

let arr = [10, 20, 30, 40, 50];

console.log(arr.splice(2, 2));  // if we do console.log(arr.splice(2, 30)) it will return [30, 40, 50]; // if we do console.log(arr.splice(2)) it will return [30, 40, 50]; if we do console.log(arr.splice(2, -1)) it will return an empty array []; if we do console.log(arr.splice(2, 0)) it will return an empty array []    
console.log(arr);



let arr = [10, 20, 30, 40, 50];  //here an example with adding elements

console.log(arr.splice(3, 0, 45));
console.log(arr);



let arr = [10, 20, 30, 40, 50];    //here an example with adding elements

console.log(arr.splice(2, 1, 45, 46, 47));
console.log(arr);