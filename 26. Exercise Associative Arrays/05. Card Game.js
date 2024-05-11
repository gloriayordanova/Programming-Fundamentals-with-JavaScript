// { Peter: ['2C', '4H', '9H' etc], Tomas: ['3H', '10S' etc] } //so, key and the value as object

function cardGame(arr) {
    let playersCards = {};  //this will include name and cards
    let powerValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let typesValues = { S: 4, H: 3, D: 2, C: 1 }; //e.g for that task we are required to do powerValues * typeValues

    for(let playerDeck of arr) {
        //console.log(playerDeck);  //it will print Peter: 2C, 4H, 9H, AS, QS     Tomas: 3H, 10S, JC, KD, 5S, 10S  etc.
        // let [playerName, cards] = playerDeck.split(': ');
        //console.log(playerName); // Peter  Tomas etc.
        //console.log(cards); 2C, 4H, 9H, AS, QS        3H, 10S, JC, KD, 5S, 10S ;
        //the above won't be useful, we need to turn it into array;
        let [playerName, cardStr] = playerDeck.split(': ');
        let cards = cardStr.split(', ');
        //console.log(cards);  // [ '2C', '4H', '9H', 'AS', 'QS' ]

        if(playerName in playersCards) {
            playersCards[playerName].push(...cards); //this is if we want to add more cards for e.g. Peter //това със спреад оператора (...) буквално казва разбий масива на отделни елементи и пушни всичко, което го има в този масив като отделни елементи
        } else {
            playersCards[playerName] = cards;
        }
    } 

    let entries = Object.entries(playersCards);
    ///console.log(entries); it will print
    //[
        //[
            //'Peter',
            //[
                //'2C', '4H', '9H',
                //'AS', 'QS', 'JD',
                //'JD', 'JD', 'JD',
                //'JD', 'JD'
            //]
        //]
    //] etc

    for(let [name, deck] of entries) {
        // console.log(name);
        // console.log(deck); 
        //it will print
        //Peter
        //[
            //'2C', '4H', '9H',
            //'AS', 'QS', 'JD',
            //'JD', 'JD', 'JD',
            //'JD', 'JD'
        //]
        //сега надилу искаме да елиминираме повторенията и ще ползваме Set
        let uniqueDeck = new Set(deck);
        //по условие сега трябва да пресмятаме типа по пауъра и да сумираме това нещо като една обща стойност на deck-a
        let deckValue = 0;

            for(let card of uniqueDeck){
                //console.log(card);
                //it will print
                // 2C 
                // 4H 
                // 9H 
                // AS 
                // QS 
                // JD 
                // 3H etc      
                
                //за всяка карт сега трябва да изчислим нейния deck value  //по условие, виж това изречение "Powers 2 to 10 have the same value and J to A are 11 to 14"
                //затова сега ше използваме помощни обекти (виж в начлото сега тя добавя let powerValues = {...etc};) let typesValues = {...etc}
                let power = card.slice(0, card.length - 1);  // тук където обясняваше така го правим, защото 1вие елемент може да е 1 символ, втория 2 като e.g. 2C или 10C e.g. in that case 2C meaning slice(0, 1 (because 2-1 = 1)) и в случая slice прави от 0 до 1ви индекс. но без да включиш първия следователно от този пример 2C, ние ще вземем само елемента от 1ви индекс, който е 2ката
                let type = card[card.length - 1]; //в този случай e.g. 2C it wil return just C
                
                let cardValue = powerValues[power] * typesValues[type];
                deckValue += cardValue;
            }

            console.log(`${name}: ${deckValue}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

// cardGame([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]);