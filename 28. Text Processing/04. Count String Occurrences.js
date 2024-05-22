function solve(input, str) {
    let words = input.split(' ');
    //console.log(words);  //Expected Putput: ['This', 'is', 'a', 'word', 'and', 'it', 'also', 'is', 'a', 'sentence']

    let count = 0;

    for (let word of words) {
        if(word == str) {
            count++;
        }
    }

    console.log(count);
}

// solve('This is a word and it also is a sentence', 'is');
// solve('softuni is great place for learning new programming languages', 'softuni');



/*
function solve(input, str) {
    let words = input.split(' ');
    //console.log(words);  //Expected Output: ['This', 'is', 'a', 'word', 'and', 'it', 'also', 'is', 'a', 'sentence']

    let matches = words.filter(word => word == str);

    //console.log(matches); //E.g. with 1st example Expected output is [ 'is', 'is' ]
    console.log(matches.length);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');




function solve(input, str) { //this solution won't work for this task, see why
    // console.log(input.split(str).length - 1);  //here is as we did it before, but won't work here
    
    //another task, but the example to remember how it works
//     //как може да преброим колко пъти се среща дума в един текст?
// let str = 'hello world hello';
// //console.log(str.split('ll').length); it will be printed 3 (because it splits tbat and leaves ll only in that case it is seen twice)
// console.log(str.split('ll').length - 1);  //when we add -1 it will work that way

}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');
*/