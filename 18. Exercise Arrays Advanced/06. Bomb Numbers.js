function bombNumbers(nums, bombInfo){
    let [bombNum, power] = bombInfo; //this way is with deconstructing an array; also, the other way to write it can be // let bombNum = bombInfo[0]; let power = bombInfo[1];

    while(nums.includes(bombNum)){
        let idx = nums.indexOf(bombNum);  // that indexOf returns the index of bombNum, in the first example bombNum is in index 3 for example
        nums.splice(Math.max(0, idx - power), power * 2 + 1, 0)// this 0 at the end is not compulsory to be added but it shows us that everywhere we have detonaterd we will see 0;  //power * 2 because from the 2 sides left and right we will take elements; + 1 meaning this at the middle which has detonated the bomb; we add element by adding 0 at the end because in that way we retain the indexation of the array and at the end and in that way I will not add numbers that I don't want the array to have
        //that above(Math.max(0, idx-power) means for whatever reason that idx - power becomes negative (like the example if we don't have any more numbers to the left of the bomb), there is no way we can start from 0 index but we can't start from -1, -2  index etc); so this is why we say if it becomes negative, use the 0; or e.g. max of - 1 or 0 is 0; max of - 2 or 0 is 0 etc
    }

    let sum = 0;

    for(let num of nums){
        sum += num;
    }

    console.log(sum);
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);