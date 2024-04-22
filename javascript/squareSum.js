const squareSum = (arr) => {

    //1st method
    let sum = arr.reduce((acc, val) => acc = acc + (val * val), 0)

    // 2nd method  
    // let sum = 0;
  
    // for (let elem of arr) {
    //   sum = sum + (elem * elem)
    // }
  
    return sum;
  }
  
  console.log(squareSum([1, 2, 3, 4, 5]))
  console.log(squareSum([10,11,12,13,14]))