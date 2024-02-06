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

palindromeInts([123,323,421,121]);
// palindromeInts([32,2,232,1010]);


function palindromeInts(arr){
   
}

palindromeInts([123,323,421,121]);
// palindromeInts([32,2,232,1010]);