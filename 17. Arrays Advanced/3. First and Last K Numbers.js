function solve(input){
    let k = input.shift(); //with shift we delete the first elemetn of the array, but we also save this element

    console.log(input.slice(0, k).join(' '));   //in that case we will have 7, 8, 9 remainig in the array, so we do slice and we remember that slice how it works is it stops on the last element of the array we have given it initially (it doesn't count it) e.g. it will not count 9
    console.log(input.slice(-k).join(' ')); //analogically to take the last 3, we can start from -k и да караме до края, so we will receive 8, 9 because with minus it starts from right to left, but not from left from right in the array and it will take the numbers automatically to the end
}

solve([2, 
    7, 8, 9]);
// solve([3,
//     6, 7, 8, 9]);
// solve([2,
//     10, 20, 30, 40, 50, 60]);