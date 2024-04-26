const revStr = (str) => {

    let rev_Str = ""
    for(let i=str.length-1; i>=0; i--){
        rev_Str += str[i]
    }

    return rev_Str;
}

console.log(revStr("Hello"))
console.log(revStr("Go a head"))