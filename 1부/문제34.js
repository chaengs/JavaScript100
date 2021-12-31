let height = prompt().split(" "); // 배열 반환
let height_sort = height
    .sort(function (a, b) {
        return a - b;
    }).join(" ")

if (height === height_sort) {
    console.log("YES");
} else {
    console.log("NO");
}
