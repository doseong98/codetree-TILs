const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]);
console.log(a += 8);
console.log(b *= 3);
console.log(a*b);