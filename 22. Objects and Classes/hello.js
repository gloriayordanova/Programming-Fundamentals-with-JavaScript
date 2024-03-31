let person = { name: 'Peter', age:20, height:183 };   //обектите са ни нужни заедно и поотделно не носят стойност, за разлика от масивите
//the same above can be written that way


//we can define an empty object and add properties later
let person = {};
person.name = 'Peter';
person.age = 20;
person.hairColor = 'black';
person['lastName'] = 'Parker';



let peter = {
    name: 'Peter',
    age:20,
    height:183
};
printDetails(peter); //we write that afetr we write the function below
//and an example is given that instead of adding every individual element lile name, age etc, we can write a function looking like:
function printDetails(person) {
    person.age = 21 //if we want to change a fugure e.g. from 20 to 21 in that case
    console.log(person.age); // e.g. if we do console.log(person.age) hen it will just print 21, but if we do console.log(person) we will print everything
}



//here showing we can add different properties/values
let peter = {
    name: 'Peter',
    age:20,
    height:183
};
console.log(peter); 
peter.hairColor = 'brown';
console.log(peter); 
console.log(peter['name']); //or this could be done as let propName ='name'; console.log(peter[propName];)



//Functions within a JavaScript object are called methods
//We can define methods using several syntaxes
let person = {
    sayHello: function() {
        console.log('Hi, guys');
    }
}



//Functions within a JavaScript object are called methods
//We can define methods using several syntaxes
let person = {
    sayHello(){
        console.log('Hi, guys');
    }
}



//We can add a method to an already defined object
let person = {name:'Peter', age: 20};
person.sayHello = () => console.log('Hi, guys');



//We can add a method to an already defined object, some examples
let peter = {
    name: 'Peter',
    age: 20,
    height: 183,
    sayHello: function() {
        console.log('Hello!');
    }
};

peter.name;
peter.sayHello();



//We can add a method to an already defined object, some examples
let peter = {
    name: 'Peter',
    age: 20
};

peter.sayHello = function () {
    console.log('Hello');
}

peter.name;
peter.sayHello();



//We can add a method to an already defined object, some examples
let peter = {
    name: 'Peter',
    age: 20
};

peter.sayHello = () => {
    console.log('Hello');
}

peter.name;
peter.sayHello();



//We can add a method to an already defined object, some examples
let peter = {
    name: 'Peter',
    age: 20,
    sayHello: () => {
        console.log('Hello');
    }
};

peter.name;
peter.sayHello();



//We can add a method to an already defined object, some examples
let peter = {
    name: 'Peter',
    age: 20,
    sayHello() {
        console.log('Hello');
    }
};

peter.name;
peter.sayHello();



//some examples with Object.keys
let peter = {
    name: 'Peter',
    age: 20,
    sayHello() {
        console.log('Hello');
    }
};

let keys = Object.keys(peter);  
console.log(keys);  //try printing the result to see what you will get //if we do e.g. console.log(keys[0]) only name will be printed
console.log(peter[keys[0]]); //when printing the result you will get Peter



//some examples with Object.values
let peter = {
    name: 'Peter',
    age: 20,
    sayHello() {
        console.log('Hello');
    }
};

let values = Object.values(peter);  //try printing the result to see what you will get
console.log(values);  //if we do e.g. console.log(keys[0]) only name will be printed




let peter = {
    name: 'Peter',
    age: 20,
    sayHello() {
        console.log('Hello');
    }
};

let entries = Object.entries(peter); 
console.log(entries);  //or if do console.log(entries[0]), I will get just [ 'name', 'Peter' ]; if I do console.log(entries[0][0]), I will just get the key name; if I do console.log(entries[0][1]), I will just get the value Peter;
//it will print a !!!!!! matrix
// [
// [ 'name', 'Peter' ],
// [ 'age', 20 ],
// [ 'height', 183 ],
// [ 'sayHello', [Function: sayHello ]]
// ]



let peter = {
    name: 'Peter',
    age: 20,
    height: 183,
    sayHello() {
        console.log('Hello');
    }
};

let keys = Object.keys(peter); 

for (let key of keys) {
    console.log(key, '->', peter[key]);
}



//here an example of for in
let peter = {
    name: 'Peter',
    age: 20,
    height: 183,
    sayHello() {
        console.log('Hello');
    }
};

for (let key of Object.keys(peter)) {
    console.log(key, '->', peter[key]);
}

for (let key in peter) {
    console.log(key, '->', peter[key]);
}



//Reference Type and andress meaning the same, which means that inside a variable in an Object the type of data is an adress, but it is not the value itself // example shown in reference type image
//we have 3 Reference Types in JS (or used when using Objects particularly especially for Functions), this is the Object, the Array, and the Function which means that what it stays in the variable is the address, but data is somewhere else. The consequesnces of this thing is that when trying to copy this variable we copy the address only, and all the variables with this address are pointed to the same data. So, when we copy a variable meaning this is also auto done everywhere else
//some examples
//here below is an example (but note, it is not a reference type) with a simple variable, when printing we will get result 5, 6, 5 which means this is not about reference type
let myVar = 5;

console.log(myVar);
modifyVar(myVar);
console.log(myVar);

function modifyVar(externalVar) {
    externalVar++;
    console.log(externalVar);
}

//however that example below shows how reference type works, especialy Object in a Function
let person = {
    name: 'Peter',
    age: 23
};

console.log(person);
modifyVar(person);
console.log(person);

function modify(obj){
    obj.name = 'George';
    console.log(obj);
}
/*and notice when printing we will get (e.g. 5, 6, 6, but not 5, 6, 5 that example is given just for my understanding. See what will actually get printed) //this happens because this is about what I explained earlier about the reference type and the address is copied, but not the values themselves are copied
{name: 'Peter', age: 23}
{name: 'George', age: 23}
{name: 'George', age: 23}
*/

//the data from the variables are stored in the stack, while the data from the Reference Type are stored in the heap
//heap leaves all the time, while the stack can be destroyed every time we call and return a function



//JSON is an open-standard file format that uses text to transmit data objects
//JSON exchanges data between browser and server
//JSON example (jusst FYI when we post this code below in JS it will work, but if we post from JS to JSON it will not work)
{  // FYI we can have true and false without the brackets, we can have null. But note that we CAN'T have undefined
    "name": "Ivan",
    "age": 25,
    "grades": {
        "Math": [2.50, 3.50],
        "Chemistry": [4.50]
    }
}
//FYI in parse JSON we can have
// only e..g just "name" even if we don't have e.g. : "Ivan"; or we can have just 1 figure e.g. 25, or just 1 boolean or
// only 1 Object e.g. {} with whatever many properties; we can or
// only 1 array and inside the array whatever many properties (which can be objects if we want to);
// FYI in JSON we can't have a function inside the JSON, because function is a code whereas JSON is data which are intended to be transferred
// FYI in JSON what we can't have is Objects с кръгова диференция, което ще рече here in "grades": { fajkfksja } не може да зададем стойност, която я има някъде на друго място вътре в обекта e.g. "Ivan"
// JSON Methods include: 
// JSON.stringify e.g. let text = JSON.stringify(obj); (with stringufy we can give it an object, array whatever we want and it turns it into string which we can then send it to the network)
// JSON.parse e.g. let obj = JSON.parse(text); (with parse we can give it a string which has come from the network in momst of the cases and it will turn it back into object)

//JSON example
let myJson = '{"name": "Peter", "age": 21}';  //note written in that way '{"name": "Peter", "age": 21}'; it is a string, but not an object
console.log(myJson);  //note if we do console.log(myJson.name) will be an error because we said it is not an object in that case and it will return undefined
//in order to be able to manipulate the string, we should make it into an Object
let parsed = JSON.parse(myJson);
console.log(parsed);
console.log(parsed.name);  // and here it will work, because it is an Object now

parsed.name = 'George';

let encoded = JSON.stringify(parsed);

console.log(encoded);
console.log(muJson); // note here when printed this will not affect myJson, because it is a string, so it is immutable