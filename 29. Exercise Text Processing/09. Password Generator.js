function passGenerator(arr) {
    let[str1, str2, replacementStr] = arr;
    let concatedStr = str1 + str2;
    //console.log(concatedStr); //ilovepizzaihatevegetables

    let vowels = ['a', 'e', 'i', 'o', 'u']; //това са гласните

    let idx = 0;

    for(let char of concatedStr) {
        //console.log(char); //всяка буква на нов ред
        if(vowels.includes(char)) { //here we can do it with regex as well    if(/[aeoui]/.test(char)) {
            concatedStr = concatedStr.replace(char, replacementStr[idx].toUpperCase());
            idx++;

            if(idx == replacementStr.length) {
                idx = 0;
            }
        }
    }

    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

// passGenerator([ 
//     'ilovepizza',
//     'ihatevegetables',
//     'orange'
//     ]);

// passGenerator([ 
//     'easymoneyeazylife',
//     'atleasttencharacters',
//     'absolute'
//     ]);

// passGenerator([ 
//     'areyousureaboutthisone',
//     'notquitebutitrustyou',
//     'disturbed'
//     ]);