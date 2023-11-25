function solve(index) {

    if (index < 1 || index > 7) {
        console.log('Invalid day!');
    } else {
        let days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];

        console.log(days[index - 1]);
    }

}

solve(3);
solve(6);
solve(33);
solve(-1);
solve('ksjlas'); //e.g. if we do it that way it will give undefined;
solve('3.5'); //e.g. if we do it that way it will give undefined;



/*
!!!!HERE IS AN EXAMPPLE IF I WOULD LIKE TO SHOW UNDEFINED NUMBERS SHOWING AS 'INVALID NUMBER!'

function solve(index) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    let result = days[index - 1];

    if (result != undefined) {
        console.log(result);
    } else {
        console.log('Invalid number!');
    }

}

solve(3);
solve(6);
solve(33);
solve(-1);
solve('ksjlas'); //e.g. if we do it that way it will give undefined;
solve('3.5'); //e.g. if we do it that way it will give undefined;
*/


//an interesting question, what about if we have e.g. solve([3]), instead of solve(3);
//then we do as following:
//   function solve (input){
//
//       let index = input[0]; //and the rest will work exactly the same way as examples above
//
//   }
//
//   solve([3]);
