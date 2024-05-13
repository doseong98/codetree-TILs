const fs = require("fs");
let arr  = fs.readFileSync(0).toString().trim().split(":");
let a = Number(arr[0]) + 1, b = arr[1];
console.log(`${a}:${b}`);