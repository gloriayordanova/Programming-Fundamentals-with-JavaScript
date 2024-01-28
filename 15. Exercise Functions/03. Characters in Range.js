//this sentence "Keep in mind that the second character code might be before the first one inside the ASCII table", here it is meant instsead of 'a'    'd', sometimes it might be between 'd'       'a
function charactersInRange(char1, char2){
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);  // we add thhis at the end because of that which is required in the 3rd example charactersInRange('C', '#');
    let maxCode = Math.max(code1, code2);  // we add thhis at the end because of that which is required in the 3rd example charactersInRange('C', '#');

    let result = '';

    for(let curCode = minCode + 1; curCode < maxCode; curCode++){  // before we added minCode and maxCode, it was looking like for(let curCode = code1 + 1; curCode < code2; curCode++){
        let curChar = String.fromCharCode(curCode);
        result += curChar + ' ';
    }

    console.log(result);
}

// charactersInRange('a', 'd');
// charactersInRange('#', ':');
// charactersInRange('C', '#');



/*
//here we can use function, not needed but to show how it might work; here she shows with 2 functions and loop
function charactersInRange(char1, char2){
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);  
    let maxCode = Math.max(code1, code2);  

    printResult(minCode, maxCode)

    function printResult(startCode, endCode){

        let result = '';

        for(let curCode = startCode + 1; curCode < endCode; curCode++){  // before we added minCode and maxCode, it was looking like for(let curCode = code1 + 1; curCode < code2; curCode++){
            let curChar = String.fromCharCode(curCode);
            result += curChar + ' ';
        }

        console.log(result);
    }
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#'); 
*/



/*
//here we can use function, not needed but to show how it might work; same here, but here she shows with 2 functions each as individual one, but not loop which might be more used in practice
function charactersInRange(char1, char2){
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);  
    let maxCode = Math.max(code1, code2);  

    printResult(minCode, maxCode)
}

function printResult(startCode, endCode){

    let result = '';

    for(let curCode = startCode + 1; curCode < endCode; curCode++){  // before we added minCode and maxCode, it was looking like for(let curCode = code1 + 1; curCode < code2; curCode++){
        let curChar = String.fromCharCode(curCode);
        result += curChar + ' ';
    }

    console.log(result);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
*/



/*
//here shows a final version 
function charactersInRange(char1, char2){
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);  
    let maxCode = Math.max(code1, code2);  

    printResult(minCode, maxCode)
}

function printResult(startCode, endCode){

    let result = [];

    for(let curCode = startCode + 1; curCode < endCode; curCode++){  // before we added minCode and maxCode, it was looking like for(let curCode = code1 + 1; curCode < code2; curCode++){
        let curChar = String.fromCharCode(curCode);
        result.push(curChar);
    }

    console.log(result.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
*/