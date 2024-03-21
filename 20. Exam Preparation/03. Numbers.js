function numbers(str) {
    let nums = str.split(' ').map(Number);
    let avg = nums.reduce((acc, val) => acc + val) / nums.length;  //we want to sum the sum of each nuumbers in the array //this .reduce e.g. in reduce((acc, val) => acc + val) is a method which we will study in advance, but basically it is how it works - we have accumulator and a value this means we will individually take each value like 10, 20, 30, 40, 50 and will add it to our accumulator
    let topNums = nums.filter(num => num > avg);   // here what we do is we filter the numbers that are greater than the average
}

numbers('10 20 30 40 50');
// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// numbers('1');
// numbers('-1 -2 -3 -4 -5 -6');