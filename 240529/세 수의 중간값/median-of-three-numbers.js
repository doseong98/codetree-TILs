const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let arr = input.join(" ").split(" ")

let a = Number(arr[0]), b = Number(arr[1]), c = Number(arr[2]);
let d = 0, e = 0;

if(b > a && b < c) {
    console.log(1)
}else console.log(0)