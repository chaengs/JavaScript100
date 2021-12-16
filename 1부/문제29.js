let msg = prompt();
    if (msg.length > 1) {
    msg = prompt();
    }

    if (msg === msg.toLocaleUpperCase()) {
    console.log("YES");
    } else {
    console.log("NO");
    }