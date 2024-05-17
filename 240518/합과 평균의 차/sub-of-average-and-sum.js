const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]), b = Number(arr[1]), c = Number(arr[2]);
let sum = a + b + c, div = sum/3
console.log(sum);
console.log(parseInt(div));
console.log(sum - parseInt(div));