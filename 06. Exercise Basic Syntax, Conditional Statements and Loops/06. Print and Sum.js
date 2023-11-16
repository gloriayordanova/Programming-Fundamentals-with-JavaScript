function printSum(num1, num2) {
    let total = 0;
    let numsStr = '';

    for (num1; num1 <= num2; num1++) {
        total += num1;
        numsStr += num1 + ' ';
    }

    console.log(numsStr);
    console.log(`Sum: ${total}`);

}

printSum(5, 10);
printSum(0, 26);
printSum(50, 60);