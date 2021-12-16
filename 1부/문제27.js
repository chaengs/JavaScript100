let names = prompt().split(' ');
let score = prompt().split(' ');
let arr = {};
for (let i=0; i<names.length; i++){
    arr[names[i]] = parseInt(score[i], 10);
}
console.log(arr);