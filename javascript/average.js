const findAvg = (arr) => {
    total = arr.reduce((accum, curNum) => accum + curNum, 0);
    return total / arr.length;
}
console.log(findAvg([4, 6, 10, 4, 2]));