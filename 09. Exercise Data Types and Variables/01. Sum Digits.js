function sumDigits(number){

    let numAsString = String(number);
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }

    console.log(sum);

}

// sumDigits(245678);
// sumDigits(97561);
// sumDigits(543);



/*
function sumDigits(number){
    let sum = 0;
    while(number != 0){
        let units = number % 10;  // 3  4  5
        number -= units;   // 540  50  0
        number /= 10;   //54  5  0
        sum += units;   //3 + 4 + 5
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
*/