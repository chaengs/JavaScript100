let input = prompt().split(' ').reverse();
let reversed = '';

for (let i=0; i<input.length; i++){
    reversed += input[i] + ' ';
}

console.log(reversed);