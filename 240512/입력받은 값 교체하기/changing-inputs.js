const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = arr[0], b = arr[1];
[a,b] = [b,a];
console.log(`${a} ${b}`);