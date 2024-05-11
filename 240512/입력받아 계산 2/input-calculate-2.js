const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split(" ")
let a = arr[0], b = arr[1];
console.log(a * b);