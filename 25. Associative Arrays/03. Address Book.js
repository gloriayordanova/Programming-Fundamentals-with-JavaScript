function solve(input) {
    let addressBook = {};

    for(let item of input) {
        let [name, address] = item.split(':'); //here it will print as an array

        addressBook[name] = address;
    }

    //console.log(addressBook); //it will print {Tim: 'Doe Crossing', Bill: 'Ornery Rd', Peter: 'Carlyle Ave'}

    let entries = Object.entries(addressBook);

    //console.log(entries);  //it will print [[ 'Tim', 'Doe Crossing' ], [ 'Bill', 'Ornery Rd'], etc]

    //entries.sort(compare); 

    entries.sort((a, b) => a[0].localeCompare(b[0]));  //localeCompare сортира по азбучен ред 

    //console.log(entries);

    let sorted = {};

    for(let [name, address] of entries) {
        sorted[name] = address;
    }

    for(let [name, address] of Object.entries(sorted)) {
        console.log(name, '->', address);
    }
}

//function compare(a, b) {
    //console.log('comparing', a, b);  //it will print:
    //comparing [ 'Bill', 'Ornery Rd' ] [ 'Tim', 'Doe Crossing' ] //сравнили сме тези 2 масива Bill and Tim един с друг и всички са върнали 0 и сортирането е казало този масив е подреден
    //comparing [ 'Peter', 'Carlyle Ave' ] [ 'Bill', 'Ornery Rd' ] //сравнили сме тези 2 масива Peter and Bill един с друг и всички са върнали 0 и сортирането е казало този масив е подреден
    //return 0;
    
    //console.log('comparing', a[0], b[0]);  // if we do so it will print:
    //comparing Bill Tim
    //comparing Peter Bill
    //return 0;

    //console.log('comparing', a[0], b[0], a[0].localeCompare(b[0])); 
    //it will print:
    //comparing Bill Tim - 1
    //comparing Peter Bill 1
    //return a[0].localeCompare(b[0]);  // означава, че ако върнем 0, двата записа са на коректните места и не се извършва размяна
    //(a, b) => a[0].localeCompare(b[0]); // it will print: 
    //comparing Bill Tim -1
    //comparing Peter Bill 1
    //comparing Peter Time -1
    //comparing Peter Bill 1

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

// solve(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd']);



//useful notes about sorting with localeCompare from chatGPT:;

// In JavaScript, the localeCompare() method is used to compare strings based on the current locale. This method returns a number indicating whether the reference string comes before, after, or is the same as the compare string in sort order.

// Here's how localeCompare() works:

// If the reference string comes before the compare string in sort order, it returns a negative number (typically -1).
// If the reference string comes after the compare string in sort order, it returns a positive number (typically 1).
// If the two strings are equivalent in sort order, it returns 0.
// Here's an example:

// let str1 = "apple";
// let str2 = "banana";

// console.log(str1.localeCompare(str2)); // Output will be a negative number (-1) because "apple" comes before "banana" in alphabetical order.

// You can also specify an optional parameter to customize the locale and comparison options. If no options are provided, the comparison is made based on the language settings of the user's environment.