function oddAndEvenSum(num){
    let numAsStr = num.toString();   

    let evenOddSums = calcEvenOddSum(numAsStr);

    console.log(`Odd sum = ${evenOddSums[1]}, Even sum = ${evenOddSums[0]}`); 

    function calcEvenOddSum(str){
        let evenSum = 0;
        let oddSum = 0; 

        for (let char of str){
            let digit = Number(char); 
    
            if (digit % 2 == 0){
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        return [evenSum, oddSum];  //here showing we can return array in a function
    }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);



