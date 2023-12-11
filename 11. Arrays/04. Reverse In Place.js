// more complex way
function solve(arr){
    // ***
    // for(let i = 0; j = 4; i <= 2 && j >= 2; i++; j--){
    //     console.log(i, j);
    // }
    // once we console log the above we see
        //   4      0 4      5-1     // or i + j = length - 1   so we will do i + j = length - 1, so when we know i and we have length (as we start from i) we can get j, so j = length - 1 - i
        //   4      1 3      5-1     // or i + j = length - 1   same as above
        //   4      2 2      5-1     // or i + j = length - 1   same as above

    //***
    // for(let i = 0; i < arr.length / 2; i++){   // here we do arr.length / 2 because we are interested in the half of the array, but not the whole array
    //     let j = arr.length - 1 - i // as per explanation above

    //     console.log(i, j); // ***and we get:
        //           0 4
        //           1 3
        //           2 2   
        //***
        for(let i = 0; i < arr.length / 2; i++){   
            let j = arr.length - 1 - i 
    
            let temp = arr[i];   //променлива, с която само съхраняваме стойността
            arr[i] = arr[j];  //here we copy the value from j above which js arr.length - 1 - i
            arr[j] = temp;
    }

    console.log(arr.join(' '));   //notice here we console log arr
}

// solve(['a', 'b', 'c', 'd', 'e']);
// solve(['abc', 'def', 'hig', 'klm', 'nop']);
// solve(['33', '123', '0', 'dd']);



/*
function solve(arr){
    let n = arr.length;

    let reversed = [];
    for(let i = n - 1; i >= 0; i--){ 
        reversed.push(arr[i]);
    }

    console.log(reversed.join(' '));
    }

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);
*/