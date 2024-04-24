const startsWith = (str, subStr) => {
    // method 01
    return str.toLowerCase().startsWith(subStr.toLowerCase());

    // method 02
    // return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();

}


console.log(startsWith("Hello World", "Hello"))
console.log(startsWith("Hello World", "d"))
console.log(startsWith("Welcome to the Hello World!", "to"))