let arr = [10, 20, 30, 40];

for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    console.log(element);
}

for(let element of arr){   // here we get the same result as above, but using the For-Of loop
    console.log(element);
}