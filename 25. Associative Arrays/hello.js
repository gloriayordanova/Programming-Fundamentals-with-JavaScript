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