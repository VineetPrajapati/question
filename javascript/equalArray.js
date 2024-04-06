const equalArray = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false

    return arr1.every((currenVal, index) => currenVal === arr2[index])
}

console.log(equalArray([2,4,20,6],[2,4,20,6]));
console.log(equalArray([2,5,10,6],[2,0,6,4]));
console.log(equalArray([],[]));
console.log(equalArray([9,5,1,2],[9,5,1,2]));