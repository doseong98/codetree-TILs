const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ");
let [a,b] = [Number(arr[0]),Number(arr[1])];
console.log(a,b,a+b)