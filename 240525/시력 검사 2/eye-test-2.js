const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let a = Number(arr);
if (a.toFixed(1) >= 1.0) {
    console.log("High");
}else if (a.toFixed(1) < 0.5) { 
    console.log("Low")
}else {
    console.log("Middle")
}