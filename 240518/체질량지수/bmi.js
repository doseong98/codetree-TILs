const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let h = Number(arr[0]), w = Number(arr[1]);
let b = (10000 * w)/(h*h)
console.log(parseInt(b));
if (b >= 25) {
    console.log("Obesity");
};