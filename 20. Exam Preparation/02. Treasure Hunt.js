function treasureHunt(arr){
    let loot = arr.shift().split('|');
    let command = arr.shift();

    while(command != 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action == 'Loot'){
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));  // here we are filtering only the items that are not in the loot and then each of these items add it at the beginning of my loot

        } else if (action == 'Drop'){
            let idx = Number(tokens.shift()); // this will return the first and the only remaining element in the array (as with action above we have already removed the word Drop from the array) in that case 3 (see in the inputs given where it says Frop and 3 this is what I am talking about)

            if (idx >= 0 && idx < loot.length){  // only with this condition we know the idx is valid from the task description
                let removedItem = loot.splice(idx, 1).shift();
                loot.push(removedItem);
            }
        } else if (action == 'Steal') {
            let count = Number(tokens.shift());  // from the input example wtih steal it will take 3 and will shift it
            let stolenItems = loot.splice(-count);  //splice(-count) where when we have splice with minus you remember it starts counting from right to left, but not from standard left to right
            console.log(stolenItems.join(', '));
        }

        command = arr.shift();
    }
}

treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);

// treasureHunt([
//     "Diamonds|Silver|Shotgun|Gold", 
//     "Loot Silver Medals Coal", 
//     "Drop -1", 
//     "Drop 1", 
//     "Steal 6", 
//     "Yohoho!"
// ]);