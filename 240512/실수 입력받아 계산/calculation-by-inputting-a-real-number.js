const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");
let a = Number(arr[0]), b = Number(arr[1]);
let c = a+b;
console.log(c.toFiex(2));