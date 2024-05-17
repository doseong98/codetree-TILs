const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();
let n = Number(arr[0]);
let ex = n**2;

console.log(ex);
if (n =< 5) {
    console.log("tiny");
};