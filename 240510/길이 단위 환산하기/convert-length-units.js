const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let ft = 30.48;
let result = n*ft;
console.log(result.toFixed(1))