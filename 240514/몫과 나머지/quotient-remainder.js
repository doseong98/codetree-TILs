const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]), b = Number(arr[1]);
console.log(`${Math.floor(a/b)}...${a%b}`)