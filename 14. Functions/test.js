function printCertificate(grade, names){   
    if(pass(grade)){
    printHeader();
    printName(names);
    formatGrade(grade);
    } else {
        console.log('Student doesn\'t qualify');
    }
}

printCertificate(5.25, ['John', 'Smith']);