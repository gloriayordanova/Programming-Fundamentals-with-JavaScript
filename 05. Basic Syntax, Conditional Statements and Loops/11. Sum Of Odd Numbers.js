function oddNums(n) {
    let j = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        console.log(j);
        sum += j;
        j += 2;
    }

    console.log(`Sum: ${sum}`);

}

oddNums(5);
oddNums(3);



/*
function oddNums(n) {

        let j = 1;
        let sum = 0;

        while(n > 0){
            console.log(j);
            sum += j;
            j += 2;
            n--;
        }

        console.log(`Sum: ${sum}`);
}

// oddNums(5);
// oddNums(3);
*/