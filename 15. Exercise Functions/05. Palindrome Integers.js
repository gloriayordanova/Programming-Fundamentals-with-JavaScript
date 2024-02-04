function palindromeInts(arr){
    for(let curNum of arr){  // we do that with for at the end, so we first deal with the function below
        let isPalindrome = checkIsPalindrome(curNum);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num){
        let numStr = String(num);
        let reversedNumStr = '';

        for(let i = numStr.length - 1; i >= 0; i--){
            let curChar = numStr[i];
            reversedNumStr += curChar;
        }

        let isPalindrome = numStr == reversedNumStr;   //here is as if we say if that is true, and on the other line return true, if not return false
        return isPalindrome;
    }
}

// palindromeInts([123,323,421,121]);
// palindromeInts([32,2,232,1010]);



/* not as standard as above, but good to know
function palindromeInts(arr){
    for(let curNum of arr){
        checkIsPalindrome(curNum);
    }

    function checkIsPalindrome(num){
        let numStr = String(num);
        let reversedNumStr = '';

        for(let i = numStr.length - 1; i >= 0; i--){
            let curChar = numStr[i];
            reversedNumStr += curChar;
        }

        let isPalindrome = numStr == reversedNumStr;
        console.log(isPalindrome);
    }
}

palindromeInts([123,323,421,121]);
palindromeInts([32,2,232,1010]);
*/



/*
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
*/


/*
function palindromeInts(arr){
    for(let num of arr){
        let reversedNumStr = num.toString().split('').reverse().join('');   
        console.log(num == reversedNumStr);
    }
}

palindromeInts([123,323,421,121]);
palindromeInts([32,2,232,1010]);
*/