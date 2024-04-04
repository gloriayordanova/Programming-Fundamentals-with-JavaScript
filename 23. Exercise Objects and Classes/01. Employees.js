function employees(arr){
    for(let employeeName of arr){
        let employee = { name: employeeName, personalNum: employeeName.length };  
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',              
    'Juan Peterson',
    'Brendan Villarrea'
]);

// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);




//another way of solving it, JS is innovative even if we just type {name, } see example;
function employees(arr){
    for(let name of arr){
        let employee = { name, personalNum: name.length };  //or here I can just type let employee = {employeeName, personalNum: employeeName.length };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',              
    'Juan Peterson',
    'Brendan Villarrea'
]);

// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);
