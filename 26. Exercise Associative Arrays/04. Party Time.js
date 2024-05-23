function solve(input) {
    let list = [];

    while(input[0] != 'PARTY') {
        list.push(input.shift());
    }

    input.shift(); // тук искаме да махнем PARTY

    //console.log(list, input); // { 7IK9Yo0h, 9NoBUajQ, Ce8vwPmE, SVQXQCbc, tSzE5t0p }  ['9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']

    for(let name of input) {
        let index = list.indexOf(name); //демек намери първото съвпадение

        if(index != -1) { //и ако има въпадение
            list.splice(index, 1); //на кой индекс искаме да трием (index) и колко елемента искаме да изтрием(1); изтриваме го и това съответно ако има съвпадение от списъка ще изтрие името което сме му подали, това ще изтрие само първото съвпадение
        }
    }

    //console.log(list); //{ 7IK9Yo0h, tSzE5t0p }
    //console.log(list.length); //2

    let vips = [];
    let regulars = [];
    
    for(let name of list) {
        //console.log(name.charCodeAt(0));  //ще ни върне кода на съответния индекс по ASCII таблицата //55 which is for 7 and 116 which is for t
        if(name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) { //48 и 57 са числата в ASCII таблицата
            vips.push(name);
        } else {
            regulars.push(name);
        }
    }

    console.log(list.length);
    if(vips.length > 0) {
        console.log(vips.join('\n'));
    }
    if(regulars.length > 0) {
        console.log(regulars.join('\n'));
    }
}

// solve(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
// solve(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);