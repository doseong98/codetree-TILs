const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]), b = Number(arr[1]);
let sum = a + b, div = sum/2
console.log(sum, div.toFixed(1));