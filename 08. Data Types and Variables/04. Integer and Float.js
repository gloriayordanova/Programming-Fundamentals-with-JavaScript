function integerOrFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;
    let sumAsString = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            isFloat = true;
        }
    }

    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);

}

integerOrFloat(9, 100, 1.1); 
integerOrFloat(100, 200, 303); 



/*
    function integerOrFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;
    
    if(Number.isInteger(sum)){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}

integerOrFloat(9, 100, 1.1); 
integerOrFloat(100, 200, 303); 
*/



/*
function integerOrFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let sumAsString = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            isFloat = true;
        }
    }

    if(isFloat){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }

}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303); 
*/



/*
function integerOrFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let sumAsString = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            isFloat = true;
        }
    }

    let outPut = '';

    if (isFloat) {
        outPut = ('Float');
    } else {
        outPut = ('Integer');
    }

    console.log(`${sum} - ${outPut}`);
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);
*/


/*
function integerOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let isFloat = sum % 1 != 0;

    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303); 
*/


/*
function integerOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let isFloat = Math.round(sum) != sum;  // if it is different from the origional sum, then it is float e.g. Math.round(2.49) will be rounded down to 2 and Math.round(2.5) will be rounded to 3

    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303); 
*/


/*
function integerOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let isFloat = Math.round(sum) - sum != 0;

    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303); 
*/