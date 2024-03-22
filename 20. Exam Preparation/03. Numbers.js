function numbers(str) {
    let nums = str.split(' ').map(Number);
    let avg = nums.reduce((acc, val) => acc + val) / nums.length;  //we want to sum the sum of each nuumbers in the array //this .reduce e.g. in reduce((acc, val) => acc + val) is a method which we will study in advance, but basically it is how it works - we have accumulator and a value this means we will individually take each value like 10, 20, 30, 40, 50 and will add it to our accumulator
    let topNums = nums
        .filter(num => num > avg)   // here what we do is we filter the numbers that are greater than the average
        .sort((a, b) => b - a)   // note that sort always takes it in a couple and sorts them like a, b (fyi a - b if from lower to higher number and b - a if vice versa);
        .slice(0, 5);   // meaning from index 0 to index 5 and note that 5 is exclusive, meaning that 5 won't be included (fyi in our task we want to find the top 5 numbers); also slice is a smart method and in case the array doesn't have 5 numbers, it works for whatever numbers are available even if less than 5 in that case

    if(topNums.length == 0){
        console.log('No');
    } else {
        console.log(topNums.join(' '));
    }
}

// numbers('10 20 30 40 50');
// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// numbers('1');
// numbers('-1 -2 -3 -4 -5 -6');



/*
//FYI another way for dealing with the task radther that using the .reduce method is
function numbers(str) {
    let nums = str.split(' ').map(Number);
    // let avg = nums.reduce((acc, val) => acc + val) / nums.length;  

    let sum = 0;

    for(let num of nums){
        sum += num;
    }

    let avg = sum / nums.length;

    let topNums = nums
        .filter(num => num > avg)   
        .sort((a, b) => b - a)   
        .slice(0, 5);   

    if(topNums.length == 0){
        console.log('No');
    } else {
        console.log(topNums.join(' '));
    }
}

// numbers('10 20 30 40 50');
// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// numbers('1');
// numbers('-1 -2 -3 -4 -5 -6');
*/