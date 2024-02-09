// · The length should be 6 - 10 characters (inclusive)
// · It should consist only of letters and digits
// · It should have at least 2 digits

//using ASCII table., see it online, 
//now we are taking numbers from ASCII table in the range [48; 57]
//now we are taking capital letters from ASCII table in the range [65; 90]
//now we are taking small letters from ASCII table in the range [97, 122]

function passwordValidator(pass){

    function checkValidPassLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyLettersDigits(pass){
        for(let curChar of pass){
            if
        }
    }
    

}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');