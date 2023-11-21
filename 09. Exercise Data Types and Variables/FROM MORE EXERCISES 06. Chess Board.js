/* (basic steps for my own understanding, not final solution)
function solve(n){
    let result = '';

    for(let i = 0; i < n; i++){
        let row = '';
        for(let j = 0; j < n; j++){
            row += '#'
        }
        result += row
        result += '\n';
    }    

    console.log(result);
}

solve(3);
solve(8);
*/

function solve(n){
    let result = '';

    result += '<div class="chessboard">\n';


    for(let i = 0; i < n; i++){
        let row = '';
        row += '   <div>\n';
        for(let j = 0; j < n; j++){
            let color = (i + j) % 2 ? 'white' : 'black';
            row += `    <span class="${color}"></span>\n`;
        }
        row += '   </div>\n';

        result += row;
    }

    result += '</div>';
    

    console.log(result);
}

solve(3);
// solve(8);