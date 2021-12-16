let msg = prompt();
let findmsg = prompt();
let result = msg.indexOf(findmsg);
if (result !== -1) {
    console.log(result)
} else {
    console.log("해당 단어를 찾을 수 없습니다.");
}