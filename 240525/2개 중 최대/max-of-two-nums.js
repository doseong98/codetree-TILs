const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0]), b = Number(arr[1]);
let answer = a > b ? a : b
console.log(answer);