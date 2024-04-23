// camelCase
const camelCase = (str) => {
    str = str.trim().split(" ").map((cur, i) => {
      if (i === 0) {
        return cur.toLowerCase();
      }
      else {
        return cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase()
      }
    })
    return str.join("")
}
  
// snake_case
const snake_case = (str) => {
    str = str.trim().split(" ").map((cur) => {
      return cur.toLowerCase()
    })
  
    return str.join("_")
}
  
console.log(camelCase("Hello How Are You"));  
console.log(snake_case("Hello How Are You"));