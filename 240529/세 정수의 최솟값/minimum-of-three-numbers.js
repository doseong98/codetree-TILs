const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let arr = input.join(" ").split(" ")

let a = Number(arr[0]), b = Number(arr[1]), c = Number(arr[2]);
let d = 0, e = 0;

if(a <= b && a <= c) {
    console.log(a)
}   


if(b <= a && b <= c) {
    console.log(b)
}


if(c <= a && c <= b) {
    console.log(c)
}