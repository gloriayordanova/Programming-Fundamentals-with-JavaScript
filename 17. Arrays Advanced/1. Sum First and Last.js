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
includes() - look for value (and will give us True or False)
indexOf() - find index of value (and will give us the number of the Index like what index of the array it is e.g. 0,1,2,3 etc)
slice() - creates new array from part of another (this is like copying a part of an array); e.g. slice(0, 2) e.g. if we have let arr = [10, 20, 30, 40, 50] and we do console.log(arr.slice(0,2)) then we will see only [10, 20] (please note no matter it says (0, 2), it only counts index 0 and index 1
Also, we have fro example again let arr = [10, 20, 30, 40, 50]; and when we console.log(arr.slice(1)); it will print [20, 30, 40, 50] (so everything after index 1 will be printed); 
if I console.log(arr.slice()) then it will make a copy of the whole array e.g. [10, 20, 30, 40, 50];
Also, we have fro example again let arr = [10, 20, 30, 40, 50] if we do console.log(arr.slice(1, - 1) it will show [20, 30, 40] (when we have minus values it counts from right to left, but not left to right direction)
if we do console.log(arr.slice(-3, - 2) we will get as a result only [30];
if we do console.log(arr.slice(-2, -3) we will get as a resullt [];
*/