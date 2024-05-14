const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]), b = Number(arr[1]);
let sum = a+b, sub = a-b, div = sum/sub;
console.log(div.toFixed(2));