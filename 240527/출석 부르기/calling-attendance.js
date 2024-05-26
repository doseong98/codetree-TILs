const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim();

let a = Number(arr);
if (a === 1) {
    console.log("John");
}else if (a === 2) { 
    console.log("Tom")
}else if (a === 3) {
    console.log("Paul")
}else {
    console.log('Vacancy')
}