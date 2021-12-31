let num = prompt();

function gugudan(num) {
    let array = "";
    for (let i = 1; i <= 9; i++) {
    let result = num * i;
    array += result + " ";
}
    return array;
}
console.log(gugudan(num));
