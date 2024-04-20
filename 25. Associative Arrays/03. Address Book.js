function solve(input) {
    let addressBook = {};

    for(let item of input) {
        let [name, address] = item.split(':');

        addressBook[name] = address;
    }

    //console.log(addressBook); //it will print {Tim: 'Doe Crossing', Bill: 'Ornery Rd', Peter: 'Carlyle Ave'}

    let entries = Object.entries(addressBook);

    //console.log(entries);  //it will print [[ 'Tim', 'Doe Crossing' ], [ 'Bill', 'Ornery Rd'], etc]

    //entries.sort(compare); 

    entries.sort((a, b) => a[0].localeCompare(b[0]));  //we do all of these below, this (a, b) => a[0].localeCompare(b[0]) we pt at the end

    //console.log(entries);
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