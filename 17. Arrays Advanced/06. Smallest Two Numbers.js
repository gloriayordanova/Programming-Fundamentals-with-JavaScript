let arr = [3, 5, 1, 7, 0, 11];

arr => arr.sort((a, b) => a - b).slice(0, 2).join(' ');




/*here below is the same as above, but more described
let arr = [3, 5, 1, 7, 0, 11];

arr.sort((a, b) => a - b); 

console.log(arr.slice(0, 2).join(' '));
*/