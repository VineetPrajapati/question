const upperCase = (char) => {

    // method 1
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }

    return false;

    // method 2
    // return char === char.toUpperCase()
}

const lowerCase = (char) =>{

    // method 1
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0)<=122){
        return true;
    }
    
    return false;

    // method 2
    // return char === char.toLowerCase()
}

// checking upperCase
console.log("toupperCase function.....")
console.log(upperCase("A"))
console.log(upperCase("a"))
console.log(upperCase("Z"))
console.log(upperCase("z"))

// checking lowerCase
console.log("\ntoLowerCase functio...")
console.log(lowerCase("A"))
console.log(lowerCase("a"))
console.log(lowerCase("Z"))
console.log(lowerCase("z"))