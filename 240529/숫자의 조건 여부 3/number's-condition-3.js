const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

console.log(a % 13 === 0 || a % 19 === 0 ? "True" : "False")