const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let a = Number(arr);
let answer = (a === 100) ? 'pass' : 'failure'
console.log(answer);