function area(radius) {
    let area = radius * radius * 3.14;
    return area;
}
let radius = prompt();
let result = area(radius);
console.log(result);
