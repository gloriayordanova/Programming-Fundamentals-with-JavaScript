function formatGrade(grade){
    if(grade < 3.00){
        console.log('Fail (2)');  
    } else if(grade >= 3.00 && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`);  
    } else if(grade >= 3.50 && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    } else if(grade >= 4.50 && grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
// formatGrade(3.33);
// formatGrade(4.50);
// formatGrade(2.99);



/*
function formatGrade(grade){
    if(grade < 3.00){
        console.log('Fail (' + 2 + ')');  
    } else if(grade >= 3.00 && grade < 3.50){
        console.log('Poor (' + grade.toFixed(2) + ')');  
    } else if(grade >= 3.50 && grade < 4.50){
        console.log('Good (' + grade.toFixed(2) + ')');
    } else if(grade >= 4.50 && grade < 5.50){
        console.log('Very good (' + grade.toFixed(2) + ')');
    } else {
        console.log('Excellent (' + grade.toFixed(2) + ')');
    }
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
*/



/*
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
*/