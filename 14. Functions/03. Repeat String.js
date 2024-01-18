function repeat(str, n){
    let result = '';

    for(let i = 0; i < n; i++){
        result += str;
    }

    return result;
}

console.log(repeat("abc", 5));
console.log(repeat("String", 2));



/*
function repeat(str, n){;
    let result = '';

    for(let i = 0; i < n; i++){
        result += str;
    }

    console.log(result);
}
repeat("abc", 5);
repeat("String", 2);
/*



/*
let result = "abc".repeat(5);
let result2 = "String".repeat(2);
console.log(result);
console.log(result2);
*/