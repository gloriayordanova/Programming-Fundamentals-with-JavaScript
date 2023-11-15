function add(a, b) {
    console.log(a + b);
}

add(5, 2);



//#while loop
function demo() {

    let a = 1;

    while (a <= 5) {
        console.log(a);
        a += 1;     //+= 1 is the same as ++
    }
}

demo();



//#for
function demo() {

    let a = 1;

    for (a = 1; a <= 5; a += 1) {  //+= 1 is the same as ++
        console.log(a);
    }

}

demo();