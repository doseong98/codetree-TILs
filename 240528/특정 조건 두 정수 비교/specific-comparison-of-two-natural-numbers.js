let fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]), b = Number(arr[1]);
let c = 0, d = 0;

if (a < b) {
    c = 1
}else {
    c = 0
}

if (a === b) {
    d = 1
}else {
    d = 0
}

console.log(c,d)