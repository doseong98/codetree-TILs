const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");
let c = arr[0], a = Number(arr[1]), b = Number(arr[2]);

console.log(c);
console.log(a.toFixed(2));
console.log(b.toFixed(2));