const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n")
let arr = input.join(" ").split(" ")

let a = Number(arr[0]), b = Number(arr[1]), c = Number(arr[2]), d = Number(arr[3]), e = Number(arr[4])
console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)