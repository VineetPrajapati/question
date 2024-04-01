const checkPalindrome = (str) => {
    word = str.toLowerCase().replace(/\W/g, "")
    reverseStr = word.split("").reverse().join("")
    return word === reverseStr ? true : false
}

console.log(checkPalindrome("ABCDCBA"))
console.log(checkPalindrome("Hello"))
console.log(checkPalindrome("12321"))
console.log(checkPalindrome("A man is running"))
