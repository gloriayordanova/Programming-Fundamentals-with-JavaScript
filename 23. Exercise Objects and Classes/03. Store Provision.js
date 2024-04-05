function storeProvision(stock, orderedProducts) {
    let products = {};

    for (let i = 0; i < stock.length; i += 2) {  //here we do i += 2, because you see we get values in pairs like product and quantity
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        products[productName /*note here don't put ''*/] = qty;   // in that case we create a key (which hasn't existed before) called productName which means e.g. Chips and the value will be qty which is e.g. 5; and the result will be that in the empty products: {} it will become now products: {Chips, 5} so we will see Chips: 5
    }

    //if we do console.log(products); we will see printed {Chips: 5, CocaCola: 9, Bananas: 14, Pasta: 4, Beer: 2}

    for(let j = 0; j < orderedProducts.length; j += 2) {
        let productName = orderedProducts[i];
        let qty = Number(orderedProducts[i + 1]);

        if(productName in products) {
            products[productName] += qty
        }
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