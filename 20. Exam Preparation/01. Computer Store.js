function computerStore(arr){
    let priceNoTax = 0;
    let command = arr.shift();  //shift takes the first element of the array, or e.g. 1050 and removes that element from the array //also, note here we will not convert into string as the comment (sa per the 3rd input)can be given as a string

    while(command != 'special' && command != 'regular') {
        let price = Number(command);

        if(price <= 0){
            console.log("Invalid price!");
            command = arr.shift(); // we add that here because we use continue below (see comment below) we don't want to have an endless loop so this is why
            continue;  // continue what will do is it will stop the rest of the code, but it will do the next loop of the loop above
        }
        
        priceNoTax += price;

        command = arr.shift();
    }

    if(priceNoTax == 0){
        console.log("Invalid order!");
    } else {
        let tax = 0.20 * priceNoTax;
        let priceWithTax = priceNoTax + tax;

        if(command == 'special'){
            priceWithTax *= 0.9;
        }

        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
    }
}

// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'

// ]);

// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
    
// ]);

// computerStore(['regular']);