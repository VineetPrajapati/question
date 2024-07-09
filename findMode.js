function findMod(arr){
    let counts = {};
    let maxNum = 0;
    let mode;

    for(let elem of arr){
        counts[elem] = (counts[elem] || 0 ) + 1;
        if(counts[elem] > maxNum){
            maxNum = counts[elem];
            mode = elem;
        }
    }

    return mode;
}

console.log(findMod([3,4,4,5,3,5,3,3,3,5,4,3,5]));