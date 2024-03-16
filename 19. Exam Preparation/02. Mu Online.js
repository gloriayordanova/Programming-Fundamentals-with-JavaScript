function solve(input) {
    //initialize state
    let hp = 100;
    let loot = 0; //loot in that case bitcoin (or money)

    // parse input into rooms
    let rooms = input.split('|');

    //for every room
    // -parse current room
    // -check keyword and perform action
    // -- if potion, heal (to max 100) and print message
    // -- if chest, collect loot and print message
    // -- otherwise, fight monster and subtract health
    //---if health <= 0 -> print death message and stop aplication
    //--- otherwise, print slay message

    for(let i = 0; i < rooms.length; i++) {  // we use that loop because it will give us the index which will need later (or at the end)
        let room = rooms[i].split(' ');
        let type = room[0];
        let num = Number(room[1]);

        if(type == 'potion') {
            
        } else if (type == 'chest') {
            loot += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            hp -= num;
            if (hp <= 0) {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);  // i will be for the room and + 1 is because we started the loop above from i = 0
                return;  //here we use return because if our game stops, we shuold stop the app (FYU in 01. Guinea Pig I explained why return is used)
            } else {
                console.log(`You slayed ${type}.`);
            }
        }
    }

    // if successful, print result
    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${loot}`);
    console.log(`Health: ${hp}`);
}

solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');