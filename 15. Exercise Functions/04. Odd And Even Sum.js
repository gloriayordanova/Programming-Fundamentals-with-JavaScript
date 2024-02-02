function oddAndEvenSum(num){
    let evenSum = 0;
    let oddSum = 0; 

    let numAsStr = num.toString();   //here we convert to string because in that example we can't find each of the elements e.g. 1 0 0 0 4 3 5, sowe need to convert it to string) //num.toString() will be the same as String(num);
    
    for (let char of numAsStr){
        // console.log(char);  if we console.log it we will see each of them on a different line as a string 
        //e.g. 1
        //e.g. (3)0
        //e.g. 4
        //e.g. 3
        //e.g. 5
        let digit = Number(char); //what we do here is we convert from string to num again

        if (digit % 2 == 0){
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);



/* another way of solving it, not that good but good to know
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
*/



/*//here showing what it is called array deconstruction
function oddAndEvenSum(num){   
    let numAsStr = num.toString();   

    let [evenSum, oddSum] = calcEvenOddSum(numAsStr);  // for example calcEvenOddSum will return evenSum and numAsStr will return oddSum, thus is why it is called array deconstruction //в този случай [evenSum, oddSum] синтаксиса е малко объркващ, но това са си напълно 2 отделни променливи
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`); 

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
*/



//*just a note of an useful thing discussed is that split cnoverts string into array, but join converts array into string