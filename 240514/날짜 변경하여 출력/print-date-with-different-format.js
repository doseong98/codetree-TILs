const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(".");
let y = arr[0], m = arr[1], d = arr[2];
console.log(`${m}-${d}-${y}`);