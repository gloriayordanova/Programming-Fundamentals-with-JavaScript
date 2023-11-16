function lowerOrUpper(figure){

    if(figure == figure.toUpperCase()){ //L
        console.log('upper-case');
    } else {
        console.log('lower-case')
    }

}

lowerOrUpper('L');
lowerOrUpper('f');



/*
function lowerOrUpper(figure){
    let code = figure.charCodeAt();
    if(code >= 65 && code <= 90) {   // or I can just type code <= 90, it will be the same result
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('L');
lowerOrUpper('f');
*/