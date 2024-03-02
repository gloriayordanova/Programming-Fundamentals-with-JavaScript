let arr = [10, 20, 30, 40, 50];
console.log(join(arr, ' -- '));   //it will print 10 -- 20 -- 30 -- 40 -- 50;
//if we do console.log(join([]), ' -- ')) then it won't print anything
//if we do console.log(join([5]), ' -- ')) then it will print 5

function join(inputArr, str){
    let result = '';

    for(let i = 0; i < inputArr.length - 1; i++){
        result += String(inputArr[i]);
        result += str;
    }
            
    if(inputArr.length > 0){
        result += inputArr[inputArr.length - 1];
        
    }

    return result;
}