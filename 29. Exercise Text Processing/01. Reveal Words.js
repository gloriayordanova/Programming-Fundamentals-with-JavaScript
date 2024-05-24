function revealWords(wordsStr, text) {
    let words = wordsStr.split(', ');
    //console.log(words); //['great'] for the 1st example and ['great', 'learning'] for the 2nd example

    for(let word of words) {
        let repeatCount = word.length;

        let starTemplate = '*'.repeat(repeatCount);
        text = text.replace(starTemplate, word);
    }

    console.log(text);
}

// revealWords(
//     'great',
//     'softuni is ***** place for learning new programming languages'
// );

// revealWords(
//     'great, learning', 
//     'softuni is ***** place for ******** new programming languages'
// );