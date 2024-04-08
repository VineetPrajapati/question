const sumOfNumber = (num) => {
    number = Array.from(String(num), (myNum) => Number(myNum))
    return number.reduce((acc, curVal) => acc + curVal)
}
console.log(sumOfNumber(123456))
console.log(sumOfNumber(12345))
console.log(sumOfNumber(987654321))