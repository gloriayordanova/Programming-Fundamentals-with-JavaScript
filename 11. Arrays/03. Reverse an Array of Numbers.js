function solve(n, nums){

    let result = [];

    for(let i = 0; i < n; i++){
        result[i] = nums[i];
    }
    
    let reversed = [];
    for(let i = n - 1; i >= 0; i--){
        reversed[reversed.length] = result[i];
    }

    console.log(reversed.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
// solve(4, [-1, 20, 99, 5]);
// solve(3, [66, 43, 75, 89, 47]);



/*
function solve(n, nums){

    let result = [];

    for(let i = 0; i < n; i++){
        result.push(nums[i]);
    }

    let reversed = [];
    for(let i = n - 1; i >= 0; i--){   //here initially it was i = 2, but we did it with n in order to be dynamic
        reversed.push(result[i]);
    }

    console.log(reversed.join(' '));
    }

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(3, [66, 43, 75, 89, 47]);
    */



/*
function solve(n, nums){

    let reversed = [];
    for(let i = n - 1; i >= 0; i--){   //her initially it was i = 2, but we did it with n in order to be dynamic
        reversed.push(nums[i]);
    }

    console.log(reversed.join(' '));
    }

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(3, [66, 43, 75, 89, 47]);
*/



/*
function solve(n, nums){
    let result = nums.slice(0, n);
    let reversed = result.reverse();

    console.log(reversed.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(3, [66, 43, 75, 89, 47]);
*/