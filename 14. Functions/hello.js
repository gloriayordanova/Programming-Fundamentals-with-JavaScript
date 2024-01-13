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

countdown();




function printName(nameArr){
    console.log(nameArr[0] + ' ' + nameArr[1]);
}
printName(['John', 'Smith']);