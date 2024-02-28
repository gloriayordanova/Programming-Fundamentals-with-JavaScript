//example of includes()
let arr = [10, 20, 30, 40, 50];
console.log(includes(arr, 20));  // we write inclides(arr, 20) and at the end we add that console log in front of it. 

function includes(inputArr, element){   //we first start with this function
    for(let item of inputArr){
        if (item === element){
            return true;     // return not only gives the result true when it is true, but also when true it stops the function
        }
    }
}



let arr = [10, 20, 30, 40, 50]; //example similar to above
console.log(includes(arr, 23));   // If we do console.log(includes(arr, 23)) it will return undefined

function includes(inputArr, element){   
    for(let item of inputArr){
        if (item === element){
            return true;     
        }
    }
}



let arr = [10, 20, 30, 40, 50];   //example similar to above
console.log(includes(arr, 23));   // If we do console.log(includes(arr, 23)) it will not return undefined, but it will return false because you see we have added that return false after the for loop

function includes(inputArr, element){   
    for(let item of inputArr){
        if (item === element){
            return true;     
        }
    }

    return false;
}