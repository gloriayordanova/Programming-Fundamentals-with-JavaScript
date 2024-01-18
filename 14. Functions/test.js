function repeat(str, n){
    let result = '';

    for(let i = 0; i < n; i++){
        result += str;
    }

    return result;
}

console.log(repeat("abc", 5));
console.log(repeat("String", 2));