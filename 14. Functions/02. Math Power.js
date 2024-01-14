function power(n, exponent){
    let product = 1;    // here we start with 0 as for example 2 ** 0 = 1;

    for(let i = 0; i < exponent; i++){
        product *= n;    //e.g. 2 ** 1 = 1 x 2;   2 ** 2 = 1 x 2 x 2
    }

    console.log(product);
    
}
// power(2, 8);
// power(3, 4);



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