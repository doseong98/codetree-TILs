const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");
let a = Number(arr[0]), b = Number(arr[1]);
console.log(a+87);
console.log(b%10);