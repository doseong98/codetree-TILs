const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]), b = Number(arr[1]);
let sum = a + b;
console.log(sum, sum/2);