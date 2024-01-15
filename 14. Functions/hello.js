function printStar(count){
    console.log("*".repeat(count));
}
printStar(5);

/* GY: I took that from ChatGPR just to see another way of doing it
const numberOfStars = 5;

let starsOnSameLine = '';

for (let i = 0; i < numberOfStars; i++) {
    starsOnSameLine += '*';
}

console.log(starsOnSameLine);
*/




let x = 10;   // and this here is another way of solving the task and we will get the same result
function countdown(){
    console.log(x);

    if(x > 0){
        x--;
        countdown();
    }
}
countdown(10);



let x = 10;  
function countdown(){
    console.log(x);

    if(x > 0){
        x--;
        countdown();
    }
}
let result = countdown(10);
console.log(result); // the result will be that we will see the same output as the above example but with underfined at the end (GY: print to see what will happen)



function printName(nameArr){
    console.log(nameArr[0] + ' ' + nameArr[1]);
}
printName(['John', 'Smith']);




function readFullName(firstName, lastName){
    return firstName + " " + lastName; //important: return keyword it stops function's execution and returns whatever it after the word "return"
}
let fullName = readFullName("John", "Smith");
console.log(fullName); //JohnSmith



function printName(nameArr){   //this is another example with return
    return nameArr[0] + ' ' + nameArr[1];
}
printName(['John', 'Smith']); //in that example if we don't do console.log here we will not see anything printed



function printName(nameArr){   //this is another example with return
    return nameArr[0] + ' ' + nameArr[1];
}
console.log(printName(['John', 'Smith'])); //in that example if we do do console.log like thathere we will see "John Smith" printed