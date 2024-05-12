const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");
let s = arr[0], t = arr[1];
[s,t] = [t,s];
console.log(s);
console.log(t);