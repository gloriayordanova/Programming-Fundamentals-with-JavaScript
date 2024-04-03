class Cat {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

let cat = new Cat('Tom', 7);
console.log(cat);  //note in when we print that, no matter if we have the meow() method it won't get prnted; but when we use fnuction and we print, this meow() method will be considered in the printing
cat.meow();



/*
//another way to solve it using function;
function solve(catsAsStrings){
    class Cat {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for(let catsAsString of catsAsStrings) {
        let tokens = catsAsString.split(' ');
        let name = tokens[0];
        let age = (tokens[1]);

        let cat = new Cat(name, age);

        cats.push(cat);
    }

    for(let cat of cats) {
        cat.meow();
    }

}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
*/



/*
//another example of doing that task using function again
function solve(catsAsStrings){
    class Cat {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = catsAsStrings.map(catAsString => {
        let tokens = catAsString.split(' ');
        let name = tokens[0];
        let age = (tokens[1]);

        return new Cat(name, age);
    });

    for(let cat of cats) {
        cat.meow();
    }

}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
*/