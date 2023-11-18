function solve(n){
    let result = '';

    for(let i = 0; i < n; i++){
        let row = '';
        for(let j = 0; j < n; j++){
        row += '#';
        }
        result += row;
        result += '\n';
    }

    console.log(result);
}

solve(3);
// solve(8);