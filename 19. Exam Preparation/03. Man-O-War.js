function solve(input) {
    // parse input, removing elements
    // - split first two elements and create pirate ship and man-o-war status arrays
    // - parse max helath from third element
    let pirate = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());

    console.log(pirate, warship, maxHp);
    console.log(input);

    for(let current of input){ //here we do with for of as we don't need the index, for of loop is better than a standard loop
        let tokens = current.split(' ');
        let command = tokens.shift();

        if(command == 'Retire'){
            break;  //break stops the whole loop and goes down the loop
        } else if (command == 'Fire') {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);
            
            if(index < 0 || index >= warship.length) {
                continue;  // continue what will do is it will stop the rest of the code, but it will do the next loop of the for loop above
            }

            warship[index] -= damage; // this is done if the above has passed (if continue has passed)

        } else if (command == 'Defend'){
            console.log('man-o-war attacks');
        } else if (command == 'Repair') {
            console.log('pirate ship repairs');
        } else if (command == 'Status'){
            console.log('print status');
        }
    }
    
    //for each remaining element:
    // - parse current element
    // -- split element by ' '
    // -- first token is commenat, other tokens (if any) are numbers
    // - depending on element type, perform action

    // # Fire:
    // - validate index
    // - damage man-o-war section
    // - if section is broken, print message and stop execution

    // # Defend: 
    // - validate indexes
    // - damage pirate ship sections
    // - if any section is broken, print message and stop execution

    // # Repair:
    // - validate index
    // - increase section hp (without exceeding max)

    // # Status - print heavily damaged (hp < 20% max) sections
    // # Retire - stop processing

    // print result
    // - sum each ship's section hp
    console.log('end');
}

solve(["12>13>11>20>66", 
"12>22>33>44>55>32>18", 
"70", 
"Fire 2 11", 
"Fire 8 100", 
"Defend 3 6 11", 
"Defend 0 3 5", 
"Repair 1 33", 
"Status", 
"Retire"]);

console.log('---');

solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);