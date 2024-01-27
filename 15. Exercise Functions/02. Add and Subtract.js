function addAndSubtract(num1, num2, num3){  
    let result1 = sum(num1, num2);    //and these 2 lines are the final ones to do
    let result2 = subtract(result1, num3);

    console.log(result2);

    function sum(num1, num2){  // start from here (FYI it will also work if it is a, b)
        return num1 + num2;    //(FYI it will also work if it is a + b)
    }

    function subtract(num1, num2){   // then continue here
        return num1 - num2;
    }
}

// addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);
// addAndSubtract(42, 58, 100);




/*
function addAndSubtract(num1, num2, num3){      //GY: this solution is also right, but I did it with 1 function only (not as what the task asks us for, but still useful to se), but not 2 functions

    function subtract(a, b, c){
        return a + b - c; 
    }

    let subtractNumbers = subtract(num1, num2, num3);

    return subtractNumbers;

}

console.log(addAndSubtract(23, 6, 10));
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
*/