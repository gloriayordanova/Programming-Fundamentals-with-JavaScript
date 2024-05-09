// {SoftUni: ['AA12345', 'BB12345'], Microsoft: ['csdf123'] }

function companyUsers(arr) {
    let companyEmployees = {};

    for(let companyEmployee of arr) {
        //console.log(companyEmployee); //it will print 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'
        let [company, employeeId] = companyEmployee.split(' -> ');

        if(company in companyEmployees) {
            if(!companyEmployees[company].includes(employeeId)) {  //! meaning if it doesn't include
            companyEmployees[company].push(employeeId);
            }
        } else {
            companyEmployees[company] = [employeeId]; // on the line below I can write companyEmployees[company].push(employeeId); but it is the same
        }
    }

    //we must convert the object inro array in order to sort
    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0])); //localeCompare is used when we use alphabetical sorting
    //console.log(entries); we will see they are now sorted in alphabetical order [ [ 'HP', [' BB12345' ] ], [ 'Microsoft', [' CC12345' ] ], [ 'SoftUni', ['AA12345', 'BB12345' ] ] ]

    for(let [name, employeeIds] of entries) {
        // console.log(name);  //e.g. HP Microsoft SoftUni
        // console.log(employeeIds);  e.g. [ 'BB12345' ] [' CC12345' ] ['AA12345', 'BB12345' ]
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }

    //here sorting explained // let entries = Object.entries(companyEmployees).sort((a, b) => {
    //     console.log(a);
    //     console.log(b);
        //it prints 
        // [ 'Microsoft', [' CC12345' ] ]  // in that case we compare this row with the row below, where a is this arrray
        // [ 'SoftUni', ['AA12345', 'BB12345' ] ]  // in that case b is this arrray
        // [ 'HP', [' BB12345' ] ]
        // [ 'Microsoft', [' CC12345' ] ]
    // })
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345', 
    'HP -> BB12345'
]);

// companyUsers([
//     'SoftUni -> AA12345', 
//     'SoftUni -> CC12344', 
//     'Lenovo -> XX23456', 
//     'SoftUni -> AA12345', 
//     'Movement -> DD11111'
// ]);