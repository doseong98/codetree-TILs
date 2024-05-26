const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let n = Number(arr);
if (n >= 3000) {
    console.log("book");
}else if (n < 1000) { 
    console.log("no")
}else {
    console.log("mask")
}