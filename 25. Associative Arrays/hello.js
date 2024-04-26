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