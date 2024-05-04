const findMidean = (arr) => {

    let sort = arr.sort((a, b) => a - b)
    // console.log(sort)
  
    let mid = Math.floor(arr.length / 2)
  
    if (arr.length % 2 == 0) {
      return (arr[mid] + arr[mid - 1]) / 2
    }
    else {
      return arr[mid];
    }
  }
  
  
  console.log(findMidean([2, 4, 6, 8]))
  console.log(findMidean([6, 10, 18, 21, 5, 8, 7]))
  console.log(findMidean([92, 76, 356, 59, 26, 69]))