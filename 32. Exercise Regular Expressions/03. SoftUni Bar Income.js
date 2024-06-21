//в regex101.com копираме изискванията 
//· Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
//· Valid product contains any word character and must be surrounded by '<' and '>'
//· Valid count is an integer, surrounded by '|'
//· Valid price is any real number followed by '$'
// и също копираме input-а

function softuniBarIncome(arr) {
    let income = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;  // \w means any word characters; \| правим така , защото не искаме знак | за или, а искаме просто да намерим | в input-а //по условие, може да имаме всички символи без |$%. затова пишем [^|$%.]

    let command = arr.shift();

    while(command != 'end of shift') {
        let match = command.match(pattern);

        if(match) {
            //console.log(match);
            let { customer, product, count, price } = match.groups; //винаги имената тук трябва да съвпадат с групите в наишя pattern
            //console.log(customer);
            //console.log(product);
            //console.log(count);
            //console.log(price);
            let totalPrice = Number(count) * Number(price);

            income += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        command = arr.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

// softuniBarIncome([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
// ]);

// softuniBarIncome([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'
// ]);