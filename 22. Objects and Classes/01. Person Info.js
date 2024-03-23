function solve(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

// let result = solve('Peter', 'Pan', 20);
// console.log(result);



/*
//another way of doing it
function solve(firstName, lastName, age) {
    let person = {};
    person['firstName'] = firstName;
    person['lastName'] = lastName;
    person['age'] = age;

    return person;
}

// let result = solve('Peter', 'Pan', 20);
// console.log(result);
*/



/*
//another way of doing it
function solve(firstName, lastName, age) {
    let person = { // ако направим литерал
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    return person;
}

// let result = solve('Peter', 'Pan', 20);
// console.log(result);
*/



/*
//another way of doing it, not commonly used, it is called a composition
function solve(firstName, lastName, age) {
    let person = { // ако направим литерал
        firstName,
        lastName,
        age,
    };

    return person;
}

// let result = solve('Peter', 'Pan', 20);
// console.log(result);
*/