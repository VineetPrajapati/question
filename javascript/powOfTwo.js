const isPowOfTwo = (num) => {
    let restul = false;

    for(let i=1; i<=num; i++)
    {
        if(2**i === num){
            restul = true;
        }
    }
    return restul;
}

console.log(isPowOfTwo(32));
console.log(isPowOfTwo(39));
console.log(isPowOfTwo(256));