function tickets(day, age) {
    if (age < 0 || age > 122) {
        console.log('Error!');
    } else if (age <= 18) {
        switch (day) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('5$');
                break;
        }
    } else if (age <= 64) {
        switch (day) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$');
                break;
            case 'Holiday':
                console.log('12$');
                break;
        }
    } else {
        switch (day) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('10$');
                break;
        }

    }
}



/*function tickets(day, age) {
    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('5$');
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$');
                break;
            case 'Holiday':
                console.log('12$');
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('10$');
                break;
        }
    } else {
        console.log('Error!');
    }
}
*/



tickets('Weekend', -7);
tickets('Weekend', 7);
tickets('Weekend', 35);
tickets('Weekend', 68);
tickets('Weekend', 150);

console.log('--------');

tickets('Weekday', -7);
tickets('Weekday', 7);
tickets('Weekday', 35);
tickets('Weekday', 68);
tickets('Weekday', 150);

console.log('--------');

tickets('Holiday', -7);
tickets('Holiday', 7);
tickets('Holiday', 35);
tickets('Holiday', 68);
tickets('Holiday', 150);