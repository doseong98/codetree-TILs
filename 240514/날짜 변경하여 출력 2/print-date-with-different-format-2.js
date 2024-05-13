const fs = require("fs");
let arr  = fs.readFileSync(0).toString().trim().split("-");
let a = Number(arr[0]), b = Number(arr[1]), c = Number(arr[2]);
console.log(`${c}.${a}.${b}`);