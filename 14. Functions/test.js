function recursivePower(n, exponent){
    if(exponent == 0){
        return 1;     //here we have covered the case, e.g 2 ** 1 = 2
    } else {
        return n * recursivePower(n, exponent - 1);
    }
}
console.log(recursivePower(2, 8));
// console.log(recursivePower(3, 4));
// console.log(recursivePower(4, 5));