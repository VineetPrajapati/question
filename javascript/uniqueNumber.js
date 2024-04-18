const uniqueNumber = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr
}
    
console.log(uniqueNumber([1,2,3,4,5,3,2]))
console.log(uniqueNumber([1,2,2,4,2,6,5]))