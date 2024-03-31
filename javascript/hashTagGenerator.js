const hashTagGenerator = (str) => {

    // length of the string should !== or > 280
    if (str.length >= 280 || str.trim().length === 0) {
        return false;
    }

    word = `#${str.split(" ").map((val) => val.replace(val[0], val[0].toUpperCase())).join("")}`
    return word;

}


console.log(hashTagGenerator("my name is vineet prajapati"));