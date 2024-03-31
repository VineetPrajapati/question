const checkTriangleType = (a, b, c) => {
    if(a===b && b===c && a==c) return "Equilateral Triangle";
    if(a===b || b===c || a===c) return "Isosceles Triangle";
    return "Scalene Triangle";
}
console.log(checkTriangleType("5","5","5"));
console.log(checkTriangleType("5","4","5"));
console.log(checkTriangleType("1","2","5"));
