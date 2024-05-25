const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let a = Number(arr);
let answer = (a === 1) ? "t" : "f"
console.log(answer);