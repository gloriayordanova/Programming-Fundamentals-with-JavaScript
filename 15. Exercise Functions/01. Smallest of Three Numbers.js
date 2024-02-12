function findSmallestNum(num1, num2, num3){
    let minNum = Math.min(num1, num2, num3);
    console.log(minNum);

}

findSmallestNum(2, 5, 3);
findSmallestNum(600, 342, 123);
findSmallestNum(25, 21, 4);
findSmallestNum(2, 2, 2);



/*
function findSmallestNum(num1, num2, num3) {

    let smallest = num1;
  
    let numbers = [num1, num2, num3];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
  
    return smallest;
  }
  
  console.log(findSmallestNum(2, 5, 3));    
  console.log(findSmallestNum(600, 342, 123)); 
  console.log(findSmallestNum(25, 21, 4));    
  console.log(findSmallestNum(2, 2, 2));
  */

  

/*
function findSmallestNum(num1, num2, num3) {            //not part of this task, but here I just give an example if I would like to find the biggest number

    let biggest = num1;

    let numbers = [num1, num2, num3];

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > biggest){
            biggest = numbers[i];
        }
    }

    return biggest;
}

console.log(findSmallestNum(2, 5, 3));
console.log(findSmallestNum(600, 342, 123)); 
console.log(findSmallestNum(25, 21, 4));    
console.log(findSmallestNum(2, 2, 2));
*/  