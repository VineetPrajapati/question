const longestWord = (str) =>{
    if(str.trim().length == 0){
        return false;
    }
    return str.split(" ").sort((a, b) => a.length-b.length).at(-1)
}

console.log(longestWord("Welcome to the world of javascript"))