function palindromeInts(arr){
    for(let num of arr){
        let numStr = String(num);
        let reversedNumStr = numStr.split('').reverse().join('');   //see examples below also //we will use a method reverse later, but this reverse works with array only, so we will split our string into array; then reverse that array (this is why we use reverse()); and then again join it back to string (this is why we use join('')) 
        console.log(numStr == reversedNumStr);
    }
}

palindromeInts([123,323,421,121]);
palindromeInts([32,2,232,1010]);

// e.g. first we have '123'
// e.g with split we will get ['1', '2', '3'];
// e.g. with reverse we will reverse the array ['3', '2', '1'];
// e.g. with join we will join it back to string
// e.g. so it will become '321'



