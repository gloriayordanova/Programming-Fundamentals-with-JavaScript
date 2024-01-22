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

// solve(5, 3, 'add');           
// solve(7, 1, 'subtract');      
// solve(5, 10, 'multiply');  
// solve(21, 3, 'divide');     


/*
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
*/



/*
function solve(a, b, operator){
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let result;

    switch(operator){
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
    }
    console.log(result);
}
solve(5, 3, 'add');           
solve(7, 1, 'subtract');      
solve(5, 10, 'multiply');  
solve(21, 3, 'divide');  
*/



/*
function solve(a, b, operator){
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let operations = [
        add,
        subtract,
        multiply,
        divide
    ];

    let operation;

    switch (operator){
        case 'add':
            operation = operations[0];
            break;
        case 'subtract':
            operation = operations[1];
            break;
        case 'multiply':
            operation = operations[2];
            break;
        case 'divide':
            operation = operations[3];
            break;
    }

    console.log(operation(a, b));
}

solve(5, 3, 'add');           
solve(7, 1, 'subtract');      
solve(5, 10, 'multiply');  
solve(21, 3, 'divide');
*/



/*
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
*/



/*
function solve(a, b, operator){     //the example below is called Associate Array (we will learn that later in the course)
    let operations = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b
    };

    let operation = operations[operator];
    console.log(operation(a, b));
}

solve(5, 3, 'add');           
solve(7, 1, 'subtract');      
solve(5, 10, 'multiply');  
solve(21, 3, 'divide'); 
*/