const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let a = Number(arr[0])
    console.log(a);
if (a < 0) {
    console.log("minus");
};