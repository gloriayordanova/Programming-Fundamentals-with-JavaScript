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