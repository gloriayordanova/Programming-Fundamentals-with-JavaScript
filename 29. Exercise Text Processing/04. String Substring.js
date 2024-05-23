function stringSubstring(word, text) {
    text = text.toLowerCase().split(' ');
    //console.log(text); //['javascript', 'is', 'the', 'best', 'programming', 'language']

    if(text.includes(word)) {
        console.log(word);
    } else { 
        console.log(`${word} not found!`);
    }
}

// stringSubstring('javascript', 'JavaScript is the best programming language');
// stringSubstring('python', 'JavaScript is the best programming language');