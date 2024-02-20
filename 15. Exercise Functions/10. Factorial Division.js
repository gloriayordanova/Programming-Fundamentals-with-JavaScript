function factorialDivision(num1, num2){      //then at the end we add these lines below
    let factorial1 = calcFactorial(num1);
    let factorial2 = calcFactorial(num2);
    let result = factorial1 / factorial2;

    console.log(result.toFixed(2));

    function calcFactorial(num){    // we first write that
        let factorial = 1;

        while(num > 1){
            factorial *= num;
            num--;
        }

        return factorial;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);