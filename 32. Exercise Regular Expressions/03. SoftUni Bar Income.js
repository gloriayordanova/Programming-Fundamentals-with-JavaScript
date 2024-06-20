//в regex101.com копираме изискванията 
//· Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
//· Valid product contains any word character and must be surrounded by '<' and '>'
//· Valid count is an integer, surrounded by '|'
//· Valid price is any real number followed by '$'
// и също копираме input-а

// %(?<customer>[A-Z][a-z]+)%<(?<product>\w+)>\|(?<count>\d+)\|(?<price>)  // \w means any word characters; \| правим така , защото не искаме знак | за или, а искаме просто да намерим | в input-а

function softuniBarIncome(arr) {
    let income = 0;
    let pattern = //;

    let command = arr.shift();

    while(command != 'end of shift') {
        // ...

        command = arr.shift();
    }
}

softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);

// softuniBarIncome([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'
// ]);