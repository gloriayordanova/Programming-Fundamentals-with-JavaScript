function train(arr){
    let wagons = arr[0].split(' ').map(Number);  //.map(number) and also be written like .map(el => Number(el));  // with this .split we do it like ['32', '54', '21', '12', '4', '0', '23'];
    let capacity = Number(arr[1]); //this is the '75' from the parameters given

    for(let i = 2; i < arr.length; i++){  // this i = 2 means that the commands start from 2nd index or from Add 10 from the parameters given e.e. if i = 2 we take 'Add 10', if i = 3 we take 'Add 0', if I = 4 we take '30'
        let command = arr[i];
        let tokens = command.split(' '); // e.g. here we will have e.g. from 'Add 10' we will get ['Add', '10']

        if(tokens[0] == 'Add'){
            let passangers = Number(tokens[1]);    //note this let passangers and the below let passangers are different variables, not the same thing
            wagons.push(passangers);
        } else {
            let passangers = Number(tokens[0]);

            for(let index = 0; index < wagons.length; index++){   //here we go through all the wagons to see if we can allocate the passengers e.g. '30' '10' '75'
                if(wagons[index] + passangers <= capacity) { //here we are checking if there is enough space for these passangers  //capacity is 75, so we make calculations and checks
                    wagons[index] += passangers;
                    break;   //here we put break because if the space is enough in the vagon, there is no point of looking into other wagons and we break the loop
                }
            }
        }
    } 

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',   // this means passangers in each wagon
    '75',     // this means max capacity in each wagon
    'Add 10',   // this means adding new passangers in a separate wagon at the end 
    'Add 0',
    '30',   // this means adding new passangers to an existing wagon (FYI please note max capacity is 75 per wagon)
    '10',
    '75'
]);

// train(['0 0 0 10 2 4',
// '10',
// 'Add 10',
// '10',
// '10',
// '10',
// '8',
// '6'
// ]);