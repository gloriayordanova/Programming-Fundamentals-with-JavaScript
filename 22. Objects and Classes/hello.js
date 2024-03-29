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