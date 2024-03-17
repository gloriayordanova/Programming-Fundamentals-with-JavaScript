function solve() {
    // parse input, removing elements
    // - split first two elements and create pirate ship and man-o-war status arrays
    // - parse max helath from third element
    
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