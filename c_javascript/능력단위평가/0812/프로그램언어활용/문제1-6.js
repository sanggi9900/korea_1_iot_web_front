let numbers = [1, 2, 3, 4, 5];


function calculateSum(numbers) {
  let sum = 0;
    let length = numbers.length;
    for(let i= 0; i < length ; i++){
      sum += numbers[i];
    }
   
    return sum;
  }

  

alert(calculateSum(sum));