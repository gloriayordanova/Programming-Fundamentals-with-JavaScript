function language(country) {
    if (country == 'USA') {
        console.log('English');
    } else if (country == 'England') {
        console.log('English');
    } else if (country == 'Spain') {
        console.log('Spanish');
    } else if (country == 'Mexico') {
        console.log('Spanish');
    } else if (country == 'Argentina') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}



/*function language(country){
    switch (country) {
        case 'USA':
        case 'England':
            console.log('English');
            break;
        case 'Spain':
        case 'Mexico':
        case 'Argentina':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    } 
}
 
function language(country) {
    if (country == 'USA' || country == 'England') {
        console.log('English');
    } else if (country == 'Spain' || country == 'Mexico' || country == 'Argentina') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}
*/

language('USA');
language('Germany');
language('Spain');
language('England');
language('Mexico');
language('Argentina');
language('Bulgaria');