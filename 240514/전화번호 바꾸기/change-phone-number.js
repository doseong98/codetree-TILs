const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("-");
let a = arr[0], b = arr[1], c = arr[2];
console.log(`${a}-${c}-${b}`);