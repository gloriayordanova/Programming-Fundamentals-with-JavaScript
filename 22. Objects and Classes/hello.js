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