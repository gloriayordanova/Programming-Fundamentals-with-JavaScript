function storeProvision(stock, orderedProducts) {
    let products = {};  // we do that. because the task required all the products to be stored into an Object

    for (let i = 0; i < stock.length; i += 2) {  //here we do i += 2, because you see we get values in pairs like product and quantity
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        products[productName /*note here don't put ''*/] = qty;   // in that case we create a key (which hasn't existed before) called productName which means e.g. Chips and the value will be qty which is e.g. 5; and the result will be that in the empty products: {} it will become now products: {Chips: 5, CoCaCola: 9 etc.} so we will see Chips: 5
    }

    //if we do console.log(products); we will see printed {Chips: 5, CocaCola: 9, Bananas: 14, Pasta: 4, Beer: 2}

    for(let j = 0; j < orderedProducts.length; j += 2) {
        let productName = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);

        if(productName in products) {  //or we can also write if(products.hasOwnProperty(productName)) { this is a method which checks if the object products has own property which is is to be called productName e.g. CoCaCola; or another way to explain is we are just asking if this key e.g. productName e.g. CoCaCola if this key is already in the object products
            products[productName] += qty;  //this is e.g. to the old pasta which is 4, add new pasta 7
        } else {
            products[productName] = qty;   //this is e.g. as there is not such a product, but now we will add qty to that product that hasn't existed before
        }
    }

    // console.log(products);  // if we print, we will see { Chips: 5, CocaCola: 9, Bananas: 44 etc} 
    // console.log(Object.entries(products));  // Object.entries if you remember we use it when we want to take key and value at the same time e.g. //if we run it through the debug console, it will show us e.g. [Array(2), Array(2), Array(2) etc.], but if we run it through the terminal, we should write e.g. node 03. Store Provision.js it will print [ ['Chips', 5], ['CocaCola', 9], ['Bananas', 44] etc ] 

    let entries = Object.entries(products);

    for(let entry of entries) {
        //console.log(entry);  // if we print, in the terminal, we will see e.g. [ 'Chips', 5 ] ['CocaCola', 9] ['Bananas', 44 etc]
        console.log(`${entry[0]} -> ${entry[1]}`)
    }

}

storeProvision (
    [
        'Chips', '5', 
        'CocaCola', '9', 
        'Bananas', '14',
        'Pasta', '4',
        'Beer', '2'
    ],
    [
        'Flour', '44', 
        'Oil', '12', 
        'Pasta', '7',
        'Tomatoes', '70', 
        'Bananas', '30'
    ]
);

// storeProvision (
//     [ 
//     'Salt', '2', 
//     'Fanta', '4', 
//     'Apple', '14', 
//     'Water', '4', 
//     'Juice', '5' 
//     ], 
//     [
//     'Sugar', '44', 
//     'Oil', '12', 
//     'Apple', '7', 
//     'Tomatoes', '7', 
//     'Bananas', '30' 
//     ]
// );