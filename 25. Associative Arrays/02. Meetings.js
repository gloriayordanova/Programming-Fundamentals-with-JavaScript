function solve(input){
    let calendar = {};

    // if we do console.log(calendar);  we will see {Monday: 'Tim', Wednesday: 'Bill', Friday: 'Tim'}, because as we discussed като има повторения те се презаписват
    // for(let item of input) {
        //let [day, name] = item.split(' ');
        //calendar[day] = name;
    //} 
    //console.log(calendar)

    for(let item of input) {
        let [day, name] = item.split(' ');

        if(calendar.hasOwnProperty(day)) { //ако имаме такова нещо, трябва да отпечатаме съобщението за грешка и да прескочим този ред calendar[day] = name; следвователно, ще се върнем в началото на фор цикъла и ще прескочим този ред calendar[day] = name;
            console.log(`Conflict on ${day}!`);
            continue; //прескачането на реда ще стане като кажем continue
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for(let [day, name] of Object.entries(calendar)) { //Object.entries will do sth like [[Monday, 'Peter'], [Wednesday, 'Bill']] etc
        console.log(day, '->', name);
    }
}

// solve(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']);

// solve(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);




//another way of solving it, not that good, but goood to be shown
function solve(input){
    let calendar = {};

    for(let item of input) {
        let [day, name] = item.split(' ');

        if(calendar[day]) { //ако имаме стойност ще стигнем до това continue, а ако нямаме стойност ще стигнем до това долу calendar[day] = name
            console.log(`Conflict on ${day}!`);
            continue; 
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for(let [day, name] of Object.entries(calendar)) {
        console.log(day, '->', name);
    }
}

// solve(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']);

// solve(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);



//another way of solving it
function solve(input){
    let calendar = {};

    for(let item of input) {
        let [day, name] = item.split(' ');

        if(Object.hasOwn(calendar, day)) { //може да изглежда и така
            console.log(`Conflict on ${day}!`);
            continue; 
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for(let [day, name] of Object.entries(calendar)) {
        console.log(day, '->', name);
    }
}

// solve(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']);

// solve(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);



//another way of solving it
function solve(input){
    let calendar = {};

    for(let item of input) {
        let [day, name] = item.split(' ');

        if(day in calendar) { // we can do it that way too
            console.log(`Conflict on ${day}!`);
            continue; 
        }

        calendar[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for(let [day, name] of Object.entries(calendar)) {
        console.log(day, '->', name);
    }
}

// solve(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']);

// solve(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);