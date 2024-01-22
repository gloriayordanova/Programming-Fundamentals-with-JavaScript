function solve(a, b, operator){
    let result;

    switch(operator){
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
    }

    console.log(result);
    
}
solve(5, 3, 'add');           
solve(7, 1, 'subtract');      
solve(5, 10, 'multiply');  
solve(21, 3, 'divide'); 