function printHeader(){             // for this task mainly look at the last function, so last function summarises all the functions which are above
    console.log('~~~-      {@}      -~~~');
    console.log('~-     Certificate      -~');
    console.log('~~~-     ~---~      -~~~');
}

function printName(nameArr){
    console.log(nameArr[0] + ' ' + nameArr[1]);
}

function pass(grade){
    return grade >= 3;
}

function formatGrade(grade){
    let label;

    if(grade < 3.00){
        label = 'Fail';
        grade = 2  
    } else {
        if(grade < 3.50){
            label = 'Poor';
        } else if (grade < 4.50){
            label = 'Good';
        } else if (grade < 5.50){
            label = 'Very good';
        } else {
            label = 'Excellent';
        }

        grade = grade.toFixed(2);
    }

    console.log(`${label} (${grade})`);
}

function printCertificate(grade, names){    //!!!!!!!!!!!!!!!!!!!! THIS IS THE IMPORTANT FUNCTION OF THIS EXERCISE
    if(pass(grade)){
    printHeader();
    printName(names);
    formatGrade(grade);
    } else {
        console.log('Student does not quality');
    }
}

printCertificate(5.25, ['John', 'Smith']);