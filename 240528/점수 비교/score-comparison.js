const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let arr = input.join(" ").split(" ")

let a = Number(arr[0]), b = Number(arr[1]), c = Number(arr[2]), d = Number(arr[3])
if (a > c && b > d) {
    console.log(1)
}else console.log(0)