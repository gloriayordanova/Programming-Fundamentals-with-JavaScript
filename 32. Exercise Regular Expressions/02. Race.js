function race(arr) {
    let names = arr.shift().split(', ');
    //console.log(names); //it will print e.g. ['George', 'Peter', 'Bill', 'Tom']
    let command = arr.shift();

    let result = {};

    let letterPattern = /[A-Za-z]/g; //слагаме g защото искаме да хване всяка буквичка в този стринг; //another way to write this is let letterPattern = /[a-z]/gi, където това gi означава case insensitive
    let digitPattern = /\d/g; //слагаме g защото искаме да си намерим всички съвпадения в този стринг;

    names.forEach(name => result[name] = 0); //за всяко име, аз искам да го вкарам като ключ на този let result обект с първоначално разстояние нула. Това означава, че ако първото име ми е George, то аз в обекта let result ще създам ключ George след което ще напиша разстояние нула 'George' : 0 и по-късно в whiloe цикъла аз ще го променям. По същия начин ще имам състезател Peter с начално разстояние 0 и тн

    while (command != 'end of race') {
        //console.log(command); //here it will be printed всяко на нов ред и тези копираме в сайта regex101: 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 
        let letterMatches = command.match(letterPattern);
        //console.log(letterMatches); // it will print all the names like ['G', 'e', 'o', 'r', 'g', 'e'] etc на нов ред всяко
        let name = letterMatches.join('');
        // console.log(name); // it will print all the names like George etc на нов ред всяко

        let digitMatches = command.match(digitPattern);
        console.log(digitMatches); //it will print all the digits like, например ['4', '5', '5', '6', '6', '6', '8'] etc на нов ред всяко

        command = arr.shift();
    }
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);

// race([
//     'Ronald, Bill, Tom, Timmy, Maggie, Michonne', 
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race'
// ]);