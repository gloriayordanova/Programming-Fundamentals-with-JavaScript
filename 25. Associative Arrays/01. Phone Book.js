function solve (input) {
    let phoneBook = {}; //we write that second

    for (let item of input) { //we write that first
        //console.log(item); and it will print e.g.
        // Tim 0834212554 Peter 0877547887 etc

        //let tokens = item.split(' ');
        //console.log(tokens);  //it will print e.g. [ 'Tim', '0834212554' ] [ 'Peter', '0877547887' ]
        let [name, phone] = item.split(' '); // here we will use деконструиране

        //console.log(name, phone);  //it will print e.g. [ 'Tim', '0834212554' ] [ 'Peter', '0877547887' ]
        phoneBook[name] = phone; //we write that third; phoneBook[we index to name in order to create the key] = phone, and we create the value  //и по условие ако се повтаря нмера, презапиши. ние знаем, че едно свойство ако го достъпим 2 пъти съхраняваме стойност на старото място, презаписваме я. Така че, това го полчаваме на готово
        
    }

    //console.log(phoneBook); // here it will print { Tim: '0876566344', Peter: '0877547887', Bill: '0896543112' }

    for (let [name, phone] of Object.entries(phoneBook)) {
        console.log(name, '->', phone);
    }
}

// solve(['Tim 0834212554',
// 'Peter 0877547887',
// 'Bill 0896543112',
// 'Tim 0876566344']);

// solve(['George 0552554',
// 'Peter 087587',
// 'George 0453112',
// 'Bill 0845344']);



function solve (input) {
    let phoneBook = {}; 

    for (let item of input) { 
        let [name, phone] = item.split(' '); 

        
        phoneBook[name] = phone; 
        
    }

    for (let entry of Object.entries(phoneBook)) { //here another way of solving it
        console.log(entry.join(' -> '));
    }
}

// solve(['Tim 0834212554',
// 'Peter 0877547887',
// 'Bill 0896543112',
// 'Tim 0876566344']);

// solve(['George 0552554',
// 'Peter 087587',
// 'George 0453112',
// 'Bill 0845344']);



//another way of solving it
function solve (input) {
    let phoneBook = {}; 

    for (let item of input) { 
        let [name, phone] = item.split(' '); 

        
        phoneBook[name] = phone; 
        
    }

    console.log(Object.entries(phoneBook)
    .map(entry => entry.join(' -> ')) //here with join we make it into array of strings
    .join('\n'));  //here we will print Tim,0834212554

}

// solve(['Tim 0834212554',
// 'Peter 0877547887',
// 'Bill 0896543112',
// 'Tim 0876566344']);

// solve(['George 0552554',
// 'Peter 087587',
// 'George 0453112',
// 'Bill 0845344']);