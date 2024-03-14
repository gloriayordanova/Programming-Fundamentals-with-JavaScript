function houseParty(arr){
    let guests = [];

    for(let command of arr){ //here we don't need indexes, so we can use for of loop
        let tokens = command.split(' ');  //here it will be divided like ['Allie', 'is', 'going!']
        let name = tokens[0];

        if(tokens.includes('not')){
            if(guests.includes(name)){   //here if somebody is not going and is in the list, the question is how we will remove that person, so see below. e.g. if we have [Jane, Tim, Max] and we want to delete Tim, we want to know which index Tim is in
                let index = guests.indexOf(name);  //with that indexOf(name) we want to understand what index the current guest is in
                guests.splice(index, 1)  // on the current index we want to remove 1 element
            } else { //here if somebody is not going and is in not the list
                console.log(`${name} is not in the list!`);
            }
        } else {  //we did that first
            if(guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        }
    }
    
    console.log(guests.join('\n'));   // '\n' means new line

}

// houseParty([
//     'Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'
// ]);

// houseParty([
//     'Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!'
// ]);