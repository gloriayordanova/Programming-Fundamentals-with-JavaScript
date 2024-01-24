function solve(a, b, operator){
    let operations = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b
    ];

    let operationNames = [
        'add',
        'subtract',
        'multiply',
        'divide'
    ];

    let index; 

    for(let i = 0; i < operationNames.length; i++){
        if(operationNames[i] == operator) {
            index = i;
        }
    }

    let operation = operations[index];
    console.log(operation(a, b));
}

solve(5, 3, 'add');           
solve(7, 1, 'subtract');      
solve(5, 10, 'multiply');  
solve(21, 3, 'divide');


    
