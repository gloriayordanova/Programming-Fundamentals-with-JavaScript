function arrManipulator(nums, commands){
    for(let command of commands){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'add'){
            let idx = Number(tokens[1]);
            let num = Number(tokens[2]);

            nums.splice(idx, 0, num);  //here we add, I don't want to remove anything, but this index should be added to num; 0 means that you will not delete anything, but you will add an element at the end which is called num;
        } else if (action == 'addMany'){
            let idx = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,).map(Number);  //because we know at index 1 we have an index, so from index 2 until the end take all the elements. So, we have elements to add and this wil be easiest with a for loop we will create below

            for(let num of numsToAdd){
                nums.splice(idx, 0, num);
                idx++; //here because if we have already added the 9 (see printed input), then I willl want the 8 (from input) to come to 2nd index, then 7 to 3rd index etc
            }
        } else if (action == 'contains'){
            let num = Number(tokens[1]);
            let idx = nums.indexOf(num);  //if it finds the index it returns the index, but if it doesn't doesn#t find it, it returns - 1 anyway (this is how indexOf it works)
            console.log(idx);
        } else if (action == 'remove') {
            let idx = Number(tokens[1]);
            nums.splice(idx, 1);
        } else if (action == 'shift') {
            let rotations = Number(tokens[1]);

            for(let rotation = 1; rotation <= rotations; rotation++){
                let firstNum = nums.shift();
                nums.push(firstNum);
            }
        } else if (action == 'sumPairs'){
            let pairedArr = [];

            for(let i = 0; i < nums.length; i += 2) {
                
                if(i + 1 < nums.length){
                    pairedArr.push(nums[i] + nums[i + 1]);
                } else {
                    pairedArr.push(nums[i]);
                }
                
            }

            nums = pairedArr;
        } else if (action == 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}

// arrManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );

// arrManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// );