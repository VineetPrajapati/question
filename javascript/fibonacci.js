const fabinacci = (num) => {

    if(num<=1)
    {
        return num;
    }
    else{
        return fabinacci(num-1)+fabinacci(num-2)
    }

}

console.log(fabinacci(0));
console.log(fabinacci(1));
console.log(fabinacci(2));
console.log(fabinacci(3));
console.log(fabinacci(4));
console.log(fabinacci(5));
console.log(fabinacci(6));
console.log(fabinacci(7));
console.log(fabinacci(8));
console.log(fabinacci(9));
console.log(fabinacci(10));
