const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = arr[0], b = arr[1];
console.log(`${a} * ${b} = %d`, a*b);
console.log(`${a} / ${b} = %d`, a/b);