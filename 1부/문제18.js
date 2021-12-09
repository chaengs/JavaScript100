let i = prompt();
let j = i.split(" ");
let sum = 0;
for (let k = 0; k < j.length; k++) {
    sum += parseFloat(j[k]);
}
console.log(Math.floor(sum / j.length));