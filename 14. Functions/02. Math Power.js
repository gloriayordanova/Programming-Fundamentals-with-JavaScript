function power(n, exponent){   //Also, when I debug good to look at the "Call Stack" about what it is hapening
    let product = 1;    // here we start with 0 as for example 2 ** 0 = 1;

    for(let i = 0; i < exponent; i++){
        product *= n;    //e.g. 2 ** 1 = 1 x 2;   2 ** 2 = 1 x 2 x 2
    }

    console.log(product);
    
}
// power(2, 8);
// power(3, 4);



/*   showing us about recursion (watch video from 1:25:53), this is more advanced, so no need to remember, but just to see how it is happening. Also, when I debug good to look at the "Call Stack" about what it is hapening
function recursivePower(n, exponent){
    if(exponent == 0){
        return 1;
    } else {
        return n * recursivePower(n, exponent - 1);
    }
}
console.log(recursivePower(2, 8));
console.log(recursivePower(3, 4));
console.log(recursivePower(4, 5));
*/



// function power(n, exponent){

//     console.log(Math.pow(n, exponent));
// }
// power(2, 8);
// power(3, 4);



// function power(n, exponent){

//     console.log(n ** exponent);
// }
// power(2, 8);
// power(3, 4);