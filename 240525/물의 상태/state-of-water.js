const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let a = Number(arr);
if (a < 0) {
    console.log("ice");
}else if (a >= 100) { 
    console.log("vapor")
}else {
    console.log("water")
}