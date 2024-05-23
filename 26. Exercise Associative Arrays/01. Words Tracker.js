function wordTracker(arr) {
    let searchedWords = arr.shift().split(' ');
    // console.log(searchedWords);  //it will print ['this', 'sentence'] //looking like [] because we used split
    let occurrences = {};

    for(let word of searchedWords){
        occurrences[word] = 0; // we do = 0 because we don't know yet what's the number of the occurences (съвпаденията)
    }

    for(let word of arr) { //this is a separate loop, and nothing in common with the 1st one (word is something different); //in this instance we will start not from this sentece (as we already used it) but from In
        if(word in occurrences) {
            occurrences[word]++;
        }
    }

    //because we can't sort or itterate when we have object - we can do so by doing that using array

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);  // if we do .sort((a, b) => b - a); we do b - a because they want it sorted in descending order. //but on that case it won't work because a and b in this case are whole arrays (see console log below). In that case we just need the number of occurences e.g. 2 and 3 which are located in index 1
        //if we do => {  
        //console.log(a); // [ 'sentence', 2 ] 
        //console.log(b);  // [ 'this', 3 ]
    // });
    //ignore the sorint bit for a moment as we added that later console.log(entries);  //it will print [ [ 'this', 3 ], [ 'sentence', 2] ] //to print, we need to use the terminal and type e.g. node 01.Word Tracker.js

    for(let [word, repeats] of entries) {
        //console.log(word);  //3
        //console.log(repeats);  //2
        console.log(`${word} - ${repeats}`); 
    }

}

// wordTracker([
//     'this sentence',
//     'In', 
//     'this', 
//     'sentence', 
//     'you', 
//     'have',
//     'to', 
//     'count', 
//     'the', 
//     'occurrences', 
//     'of',
//     'the', 
//     'words', 
//     'this', 
//     'and', 
//     'sentence',
//     'because', 
//     'this', 
//     'is', 
//     'your', 
//     'task'
// ]);

// wordTracker([
//     'is the',
//     'first',
//     'sentence', 
//     'Here', 
//     'is', 
//     'another', 
//     'the', 
//     'And', 
//     'finally', 
//     'the', 
//     'the', 
//     'sentence'
// ]);