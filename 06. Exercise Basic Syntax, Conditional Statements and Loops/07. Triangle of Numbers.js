function triangle(num) {

    for (let i = 1; i <= num; i++) {
        console.log(`${i} `.repeat(i));
    }

}



/*
function triangle(num) {
    for(let i = 1; i <= num; i++){
        let str = '';
        for(let j = 1; j <= i; j++){
            str += i + ' ';
        }
        console.log(str);
    }
}
*/


triangle(3);
triangle(5);
triangle(6);