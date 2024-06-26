let myAssocArray = {};

//here we can create keys for myAssocArray
myAssocArray.one = 1; //we can do it that way, but it is not an usual practice, because some of the things below like special characters can't be done that way
//myAssocArray['one'] = 'some value';  //these e.g. 'one' values, they will come as a variable;   //I can also write myAssocArray['John Smith'] = 'some value';  //I can also use some symbols myAssocArray['John Smith'] = '+1-555-1554132';
myAssocArray['one'] = 1;   



let myAssocArray = {};

let key = 'one';
myAssocArray[key] = 1;

console.log(myAssocArray);



//working the same way if we do it like
let key = 'John Smith';

let myAssocArray = {
    [key]: '+1-555-813784'
};

console.log(myAssocArray);



//working the same way if we do it like
let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);



let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let key in myAssocArray) {
    console.log(key);
}



let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let key in myAssocArray) {
    console.log(key, '->', myAssocArray[key]);
}



let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

let keys = Object.keys(myAssocArray); //I think keys are e.g. ['John Smith'] 

for(let key of keys) {
    console.log(key, '->', myAssocArray[key]);
}



//the same as the above, but we can do it this way too
let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let key of Object.keys(myAssocArray)) {
    console.log(key, '->', myAssocArray[key]);
}



let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let entry of Object.entries(myAssocArray)) {  //I think entries e.g. ['John Smith']: '+1-555-490417'
    console.log(entry[0], '->', entry[1]);
}



let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let [key, value] of Object.entries(myAssocArray)) {  //I think entries e.g. ['John Smith']: '+1-555-490417'
    console.log(key, '->', value);
}



let myObj = {
    name: 'Peter'
};

console.log(Object.hasOwn(myObj, 'name'));
console.log(Object.hasOwn(myObj, 'age'));

console.log(Object.hasOwnProperty('name'));
console.log(Object.hasOwnProperty('age'));



//we can Remove entries;
delete AssocArr['John Smith'];  //delete deletes the key and the value; if we just want to delete the value ние можем да я зададем да е равна на undefined



let data = {
    'alpha': 'Wiston',
    'bravo': 'Sebastian',
    'charlie': 'Monica'
}
//we can use delete data.bravo  //this one not that popular
//we can use delete data['charlie']  //this one more used




//example of delete
let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let [key, value] of Object.entries(myAssocArray)) {  //I think entries e.g. ['John Smith']: '+1-555-490417'
    console.log(key, '->', value);
}

delete myAssocArray['John Smith'];

console.log(myAssocArray);



// if we do sth like;
let people = {
    John: '555-4973',
    ['Anne-Marie']: '555-6819'     //!!!!!!!! if we have spcial symbols in the key, make sure the key is in []
}



//for in оператора е предназначен за обхождане на ключовете на обект
//for of се ползва при обхождане на масиви



let myMap = {
    'F3A18': 'apple pie',
    '113B5': 'meat pie',
    'C991F': 'blueberry pie',
};

myMap['113B5'] = 'lemon pie';

console.log(myMap['113B5']);



let myMap = {
    'F3A18': 'apple pie',
    '113B5': 'meat pie',
    'C991F': 'blueberry pie',
};

myMap['113B5'] = undefined;

console.log(myMap.hasOwnProperty('113B5'));  //no matter it is undefined, it will give true



//when we want to sort, filter, or map objects, usually we transform them into array in order to do so
//FYI also, see screenshot called Sorting.JPG when we want to sort, filter, or map objects, usually we transform them into array in order to do so
//however, we can also do sorting, filtering, or mapping of objects - e.g. when it comes to sorting it usually sorts by the way we give the keys, not by alphabetical order; however, if we have numbers it sorts numbers first e.g.. FYI JSON works in a different way with objects, sorting by ASCII
let myObj = {};

myObj.peter = '3546256';
myObj.john = '134234';
myObj['5'] = '365444';
myObj['0'] = '5443521';
myObj.ama = '145345';

console.log(myObj);



//not very clear, but just wanted to add the below lines from the presentation 
//Sorting by Key
//The Entries array can be sorted, using a Compare function
//To sort by key, use the first element of each entry

entries.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
    //трябва да сравним keyA и keyB, за да може да ги сортираме
    //ако искаме да са подреден по азбучен ред ще каже:
    return keyA.localeCompare(keyB)  // това ще сортира масива от ентрита по азбучен ред по техните ключове
    //и после какво може да направим да го върнем обратно в обект:
    Object.fromEntries(/*тук подаваме вече сортирания масив*/) //Object.fromEntries() е динамичен метод за създаване на обект
});
//you can also destructure the entries
entries.sort(([keyA (/* key */), valueA /* value */], [keyB, valueB]) => {
});



//1.Array and 2.Object Destructuring

//1.Array Destructuring
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); //1
console.log(z); //2

//2. Object Destructuring
obj = { a: 1, b: 2 };
const { a, b } = obj;
//is equivalent to:
// const a = obj.a;
// const b = obj.b;



//example for destructuring
let myObj = {
    name: 'Peter'
};

myObj.name = 'John';

let { name } = myObj; //example for destructuring
console.log(name); //example for destructuring



//Sort by key
entries.sort((a, b) => {
    valueA = a[0]; // notice when sorting by key we use the first element
    valueB = b[0]; // notice when sorting by key we use the first element
    //Perform comparison and return negative, 0 or positive
});
//you can also destructure the entries
entries.sort(([keyA, valueA], [keyB, valueB]) => {
});



//Sort by value
entries.sort((a, b) => {
    valueA = a[1]; // notice when sorting by key we use the second element
    valueB = b[1]; // notice when sorting by key we use the second element
    //Perform comparison and return negative, 0 or positive
});
//you can also destructure the entries
entries.sort(([keyA, valueA], [keyB, valueB]) => {
});



// Set(), Set() is used for Storing Unique Elements  //представете си го като масив за съхраняване на уникални стойности
let set = new Set([1, 2, 2, 4, 5]);
// Set(4) {1, 2, 4, 5}
set.add(7); //Add value, тази стойност 7 ще влезе там само ако я няма, ако я има няма да влезе
console.log(set.has(1)); //Expected output: true
//FYI set doesn't have indexing and we can't sort it, because set doesn't have keys, в него можем само да проверяваме дали нещо го има или няма
//FYI може и да обхождаме (итерираме) set-a (set and map (in arrays), can't make them in JSON we should change them to array. whereas with objects we can make them into JSON)



//some examples with Set
let mySet = new Set();

console.log(mySet.size); //if I just console.log(mySet) it will print Set(0) {size: 0}

mySet.add(5);

console.log(mySet.size); //if I just console.log(mySet) it will print Set(1) {size: 1, 5}

mySet.add(3);
mySet.add(5);
console.log(mySet.size); //if I just console.log(mySet) it will print Set(2) {size: 2, 5, 3}

mySet.delete(3);   //if we do console.log(mySet.delete(3)); it will print true връща true ако елементът е изтрит

console.log(mySet); //if I just console.log(mySet) it will print Set(1) {size: 1, 5}
mySet.delete(3); //here nothing will happen
console.log(mySet.delete(3)); //here it will return false ако не еизтрило нищо, ако елементът не е съществувал



let mySet = new Set();

console.log(mySet);

mySet.add(5);
mySet.add(3);
mySet.add(5);

for(let entry of mySet) {  // whether we do for(let entry of mySet.keys()) or for(let entry of mySet.values()) it will return the same thing as the console log; if we do for(let entry of mySet.entries())it will return e.g. [ 5, 5 ] [ 3, 3 ] which means the key and the value is the same, because set doesn't have keys  
    console.log(entry);
}



//here just for info, not part of this lecture. Map looks very much the same as Set
let myMap = new Map();

console.log(myMap);

myMap.set('Peter', '1-6882-5555');
myMap.set('John', '1-4478-1451');

console.log(myMap);  //различава се от обекта затова не може да го индексираме по този начин console.log(myMap['Peter']) because it will return undefined
//индексирането става с get 
console.log(myMap.get('Peter')); //и връща стойността, която седи след Peter e.g. телефонния номер
//console.log(myMap.has('Peter')); returns truе or false, in that case returns true

for(let entry of myMap) {
    console.log(entry);  // it will print ['Peter', '1-6882-5555'] ['John', '1-4478-1451'], което значи ако имаме тези неща можем да направим обекти от тях
}

//map-a и object може да ги ползваме по един и същи начин с много малки разлики;
// 1 e.g. map-а винаги пази insertion order(няма значение какъв е типът на ключа), нямаме тези специални условия за обекта ако ключа е числов го слагаме най-отпред и ги сортира по големина;
// 2 ключът може да е всякакъв тип, а при обекта ключът винаги е string

console.log(myMap.keys());
console.log(myMap.entries());
console.log(JSON.stringify(myMap)); // it will return празен обект {} 



//not relevant for this lecture, but jsut from the quiz
let data = {
    'alpha': 'Winston',
    'bravo': 'Sebastian',
    'charlie': 'Monica',
    'hotel': 'Amy',
    'tango': 'Holmes'
};

let entries = Object.entries(data);
let element = entries[3];
console.log(element[1]);  //it will print Amy