//to begin with, copy the input in regex101.com - Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov

function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;  //това \b е за да не хващаме страничните неща (като букви и спейсове) //това g е за глобал и обикновено се пише (ако има повече от едно съвпадение и искаме да го намерим затова пищем /g което означава global)

    let result = input.match(pattern);

    console.log(result.join(' '));
}

// solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan       Ivanov');



another way of doing it (not printing result here not sure why, but given as an example in the presentation)
function solve(input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while(validName = pattern.exec(input) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}

// solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan       Ivanov');