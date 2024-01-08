function arrRotation (arr, rotationCount){

    for(let rotation = 1; rotation <= rotationCount; rotation++){
        let firstEl = arr.shift();  //meaning subtract the first element e.g. 51 and save it in that firstEl
        // if we console.log, we will see the first X elements like 51 and 47 on a separate line
        arr.push(firstEl); //here we say push that firstEl e.g. 51 at the end of the array (note: then first el once we do the for loop will become 47 and we do the same)
    }

    console.log(arr.join(' '));

}

arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);
arrRotation([2, 4, 15, 31], 5);