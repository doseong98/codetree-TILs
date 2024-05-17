const fs = require("fs");
let arr = fs.readFileSync(0).toString();
let a = Number(arr[0]);
let ex = a*a;

console.log(ex);
if (a < 5) {
    console.log("tiny");
};