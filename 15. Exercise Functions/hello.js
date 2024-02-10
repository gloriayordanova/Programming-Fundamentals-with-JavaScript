// · The length should be 6 - 10 characters (inclusive)
// · It should consist only of letters and digits
// · It should have at least 2 digits

//using ASCII table., see it online, 
//now we are taking numbers from ASCII table in the range [48; 57]
//now we are taking capital letters from ASCII table in the range [65; 90]
//now we are taking small letters from ASCII table in the range [97, 122]

// function passwordValidator(pass){
//     let isValidLength = checkValidPassLength(pass); //first we write all the functions below, then this is line the final stage    //this will return true or false
//     let isOnlyLettersDigits = checkOnlyLettersDigits(pass); //this will return true or false 
//     let isMin2Digits = checkMin2Digits(pass); //this will return true or false 

//     if(isValidLength && isOnlyLettersDigits && isMin2Digits){  
//         console.log("Password is valid");
//     }


//     function checkValidPassLength(pass){
//         if(pass.length >= 6 && pass.length <= 10){
//             return true;
//         } else {
//             console.log("Password must be between 6 and 10 characters");
//             return false;
//         }
//     }

//     function checkOnlyLettersDigits(pass){
//         for(let curChar of pass){
//             let code = curChar.charCodeAt(0);   // or charCodeAt(0) is the same

//             if(
//                 !((code >= 48 && code <= 57) || 
//                 (code >= 65 && code <= 90) ||
//                 (code >= 97 && code <= 122))
//             ) {
//                 console.log("Password must consist only of letters and digits");
//                 return false;
//             }
//         }

//         return true; 
//     }

//     function checkMin2Digits(pass){
//         let digits = 0; //this will count how many digits we have in the password

//         for(let curChar of pass){
//             let code = curChar.charCodeAt(0);

//             if(code >= 48 && code <= 57){
//                 digits++;
//             }
//         }

//         if(digits < 2){
//             console.log("Password must have at least 2 digits");
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');



// · The length should be 6 - 10 characters (inclusive)
// · It should consist only of letters and digits
// · It should have at least 2 digits

//using ASCII table., see it online, 
//now we are taking numbers from ASCII table in the range [48; 57]
//now we are taking capital letters from ASCII table in the range [65; 90]
//now we are taking small letters from ASCII table in the range [97, 122]

function passwordValidator(pass){

    function checkOnlyLettersDigits(pass){
        for(let curChar of pass){
            let code = curChar.charCodeAt(0);   // or charCodeAt(0) is the same

            if(
                !((code >= 48 && code <= 57) || 
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }

        return true; 
    }


    function checkOnlyLettersDigits(pass){
        
    }

}
// passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');