const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let a = arr;
if (a === "S") {
    console.log("Superior");
}else if (a === "A") { 
    console.log("Excellent")
}else if (a === "C") {
    console.log("Usually")
}else if (a === "D") {
    console.log("Effort")
}else {
    console.log("Failure ")
}