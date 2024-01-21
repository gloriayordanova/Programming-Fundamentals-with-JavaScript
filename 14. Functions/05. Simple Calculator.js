function solve(a, b, operator){
    if(operator == 'add'){
        console.log(a + b);
    } else if (operator == 'subtract') {
        console.log(a - b);
    } else if (operator == 'multiply') {
        console.log(a * b);
    } else if (operator == 'divide') {
        console.log(a / b);
    }
}

solve(5, 3, 'add');           
solve(7, 1, 'subtract');      
solve(5, 10, 'multiply');  
solve(21, 3, 'divide');     