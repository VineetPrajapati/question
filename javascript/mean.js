const meanVal = (arr) => {
    sum = arr.reduce((acc, curVal) => acc+curVal, 0)
    return sum/arr.length;

}

console.log(meanVal([1,2,3,4,5]))
console.log(meanVal([11,22,33,44,55]))
console.log(meanVal([84,62,92,44,89]))