function sortArr2Criteria(arr){
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));  // we use that || when sorting 2 values; localeCompare sorts in aplphabetical order
    console.log(sortedArr.join('\n'));
}

sortArr2Criteria(['alpha', 'beta', 'gamma']);
// sortArr2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);