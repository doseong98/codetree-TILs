const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0]), newarr = arr[1].split("\n"), b = newarr[0], c = newarr[1];
console.log(a,b,c);