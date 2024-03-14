function sorting(arr){
    let sortedArr = arr.sort((a, b) => a - b); // and here it will be printed from lowest to largets number
    let finalArr = [];

    while(sortedArr.length > 0){ //we will create a while loop from what we printed above, so we can remove the smallest number and move it to finalArr[], then remove the biggest number and move it to the finalArr[] etc
        let maxNum = sortedArr.pop();  // this pop() takes out the last element of the printed array (in our case the biggest number) and returns it
        let minNum = sortedArr.shift(); // this shift() takes out the first element of the printed array aarray (in our case the smallest number) and returns it
    
        finalArr.push(maxNum);  // we can also summarise it if we do finalArr.push(maxNum, minNum); and delete the below final.push(minNum);
        finalArr.push(minNum);
    }

    console.log(finalArr.join(' '));  
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);  // FYI if we are given odd number of elements instead of even as it is here, the solution will change. But because we use the join function above, it will not show the undefined we get, which in that case is good and working
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);