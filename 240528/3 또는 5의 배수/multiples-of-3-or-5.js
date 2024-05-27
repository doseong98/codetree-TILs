let fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0])
if (a%3 === 0) {
    console.log("YES")
}else {
    console.log("NO")
}

if (a % 5 === 0) {
    console.log("YES")
}else {
    console.log("NO")
}