function modernTimesOfHash(text) {
    let words = text.split(' ');
    //console.log(words); //['Nowadays', 'everyone', 'uses', '#', 'to', 'tag', 'a', '#special', 'word', 'in', '#socialMedia']

    //let hashWords = words.filter(word => word.startsWith('#'));
    //console.log(hashWords); //['#', '#special', '#socialMedia']

    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    //console.log(hashWords); //['#special', '#socialMedia']

    for(let word of hashWords) {
        word = word.slice(1); //слайсваме като почнем от първия символ до края (целта е да се отървен от #)
        //console.log(word); // special socialMedia
        //по условие сега трябва да разберем дали думата се състои само от букви, правим това с for of цикъл както отдолу
        let isValid = true; //това го пишем заради следващото фор оф долу

        for(let char of word) { 
            //console.log(char); //ще отпечата всякабуквичка на отделент ред
            //имаме 2 варианта, единия чрез ASCII(да конвертираме всяка отделна буквичка в ASCIIи съответно проверяваме стойността дали е между 65 и 90 за главните букви и между 97 и 122 за малките букви по ASCII таблицата защото между тези 2 стойности са буквите), а другия чрез regex 
            //не сме учили още регекс, но сега ще ни покаже как да го направим по-лесно с регекс
            if(!/[A-Za-z]/.test(char)) { //искаме да е между A-Z букви и между a-z и искам да го тествам с текущия character и ще върне true ако е между тях и съответно false ако не е между тях. С ! обръщаме условието и казваме ако това не е вярно(ако моят character не е буква);
                isValid = false;
                break; //break ще прекрати само този фор оф цикъл
            }
        }

        if(isValid) {
            console.log(word);
        }
    }
}

// modernTimesOfHash('Nowadays everyone uses # to tag a #special word in #socialMedia'); 
// modernTimesOfHash('The symbol # is known #variously in English-speaking #regions as the #number sign');