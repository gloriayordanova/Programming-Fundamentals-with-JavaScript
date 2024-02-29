let arr = [10, 20, 30, 40, 50];
console.log(indexOf(arr, 20));   //in that case it will print 1 (because 20 is located in element 1 of the array)

function indexOf(inputArr, element){
    for(let i = 0; i < inputArr.length; i++){  //here we can't use for let sth of loop, because here we are working with the index, so a standard for loop should be used
        if(inputArr[i] === element){
            return i;
        }
    }

    return -1;    // here because with indexOf we know if we can't find the index, (e.g. if it is arr, 24 instead of e.g. arr, 20)it will always return -1, so this is why we did it return -1 in case it doesn't find the index
}
