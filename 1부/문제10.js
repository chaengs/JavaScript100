let a = prompt();
let tree = "";

for (let i = 0; i < 5; i++) {
    let stair = "";
    for (let j = 0; j < a - i; j++) {
        stair += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        stair += "*";
    }
    tree += stair + "\n";
}
console.log(tree);