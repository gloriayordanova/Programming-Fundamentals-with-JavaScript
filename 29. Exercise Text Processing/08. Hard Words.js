function hardWord(arr) {
    let [letter, wordsArr] = arr;
    //абсолютно същото ще работи и с тези отдолу
    //let letter = arr[0]; // let letter = arr.shift();  
    //let wordsArr = arr[1]; //let wordsArr = arr.shift(); 
    //console.log(letter);
    //console.log(wordsArr);
    let letterWords = letter.split(' ');
    let missedWordSlots = letterWords.filter(word => word.includes('_'));
    //console.log(missedWordSlots); //['____', '______', '_______', '__________.', '________,', '___', '_____']

    for(let slot of missedWordSlots) {
        //console.log(slot); //на нов ред ни отпечатва всяко ___ на отделент ред. Забелязваме, че след някои _ има . или , затова правим следното
        if(!slot.endsWith('_')) {
            slot = slot.slice(0, slot.length - 1); 
        }

        let wordToFill = wordsArr.find(word => word.length == slot.length);
        letter = letter.replace(slot, wordToFill);
    }

    console.log(letter);
}

// hardWord([
//     'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//     ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
// ]);