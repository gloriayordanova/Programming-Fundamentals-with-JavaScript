//to begin with, copy the input in regex101.com 

function furniture(arr) {
    let items = [];
    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/; // .\ това с точката ще вземе всеки символ, затова слагаме \ преди точката което значи да го искейпнем и да вземем конкретно точка като знак; //тук не пишеm g или gm в края, защото g и gm се ползват когато търсим повече от едно съвпадение, а тук не търсим повече от едно съвпадение в тази конкретна задача

    let command = arr.shift();

    while(command != 'Purchase') {
        let match = command.match(pattern);
        //console.log(match); //to console.log use terminal by typing e.g. node 01. Furniture.js //see file "Reference" what it wil print

        if(match){
            let { name, price, qty } = match.groups; //fyi трябва да конвертираме price and qty в число (Number) на по-късен етам когато изчисляваме
            
            //fyi below is another way of doing let { name, price, qty }
            // let name = match.groups.name;
            // let price = Number(match.groups.price);
            // let qty = Number(match.groups.qty);

            // console.log(name); //Sofa
            // console.log(price); //312.23
            // console.log(qty); //3

            let furniturePrice = Number(qty) * Number(price);

            items.push(name);
            totalPrice += furniturePrice;
        }

        command = arr.shift();
    }

    console.log('Bought furniture:');

    if(items.length > 0) {
        console.log(items.join('\n'));
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

// furniture([
//     '>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5', //fyi it will be invalid, затова получваме null, защото той не отговаря на нашите критерии
//     'Purchase'
// ]);

// furniture([
//     '>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase'
// ]);

// furniture([
//     '>Invalid<<!4', 
//     '>Invalid<<!2', 
//     '>Invalid<<!5', 
//     'Purchase'
// ]);