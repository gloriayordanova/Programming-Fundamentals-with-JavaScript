function month(day) {
    if (day < 1 || day > 12) {
        console.log('Error!');
    } else if (day == 1) {
        console.log('January');
    } else if (day == 2) {
        console.log('February');
    } else if (day == 3) {
        console.log('March');
    } else if (day == 4) {
        console.log('April');
    } else if (day == 5) {
        console.log('May');
    } else if (day == 6) {
        console.log('June');
    } else if (day == 7) {
        console.log('July');
    } else if (day == 8) {
        console.log('August');
    } else if (day == 9) {
        console.log('September');
    } else if (day == 10) {
        console.log('October');
    } else if (day == 11) {
        console.log('November');
    } else {
        (day == 12)
        console.log('December');
    }
}

month(2);
month(13);