function place(word, symbol, match) {

    let result = '';  // 1

    for (let i = 0; i < word.length; i++) {  //3
        if (word[i] == '_') {
            result += symbol;
        } else {
            result += word[i];
        }
    }

    2// for(let i = 0; i < word.length; i++){
    //     if(word[i] == '_'){
    //         console.log(symbol);
    //     } else {
    //         console.log(word[i]);
    //     }
    // }

    1// if(word[0] == '_'){
    //     console.log(symbol);
    // } else {
    //     console.log(word[0]);
    // }

    if (result == match) {  //2
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

// place('Str_ng', 'I', 'Strong');
// place('Str_ng', 'i', 'String');
// place('H_llo', 'e', 'Hello');
// place('_eorge', 'P', 'George');


/*
function place(word, symbol, match) {
    let x = symbol.charAt(0);
    let result = word.replace('_', x);
    if (result == match) {  
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
// place('Str_ng', 'I', 'Strong');
// place('Str_ng', 'i', 'String');
// place('H_llo', 'e', 'Hello');
// place('_eorge', 'P', 'George');
*/


/*
function place(word, symbol, match) {
    let result = word.replace('_', symbol);
    if (result == match) {  
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
// place('Str_ng', 'I', 'Strong');
// place('Str_ng', 'i', 'String');
// place('H_llo', 'e', 'Hello');
// place('_eorge', 'P', 'George');
*/