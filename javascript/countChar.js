const countChar = (word, char) => {
    word = word.toLowerCase()
    char = char.toLowerCase()

    totalCount = word.split("").reduce((acc, curVal) => {
        if (curVal === char) {
            acc++;
        }
        return acc;
    }, 0)

    return totalCount;

}

console.log(countChar("Hello how are you, and what you doing today!", "o"))