function findSmallestNum(num1, num2, num3){
    let minNum = Math.min(num1, num2, num3);
    console.log(minNum);

}

findSmallestNum(2, 5, 3);
findSmallestNum(600, 342, 123);
findSmallestNum(25, 21, 4);
findSmallestNum(2, 2, 2);



/*
function findSmallestNum(num1, num2, num3) {;

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