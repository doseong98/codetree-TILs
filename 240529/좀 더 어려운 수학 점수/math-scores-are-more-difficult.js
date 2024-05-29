const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = input.join(" ").split(" ")
let Am = Number(arr[0]), Ae = Number(arr[1]), Bm = Number(arr[2]), Be = Number(arr[3]);
let answer = "";

if (Am > Bm) {
    answer = "A"
}else answer = "B"

if (Am === Bm && Ae > Be) {
     answer = "A"
}else answer = "B"

console.log(answer)