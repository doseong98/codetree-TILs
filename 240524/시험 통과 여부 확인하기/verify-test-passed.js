const fs =  require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input), b = 80 - a
if(a >= 80) {
    console.log("pass")
}else {
    console.log(`${b} more socre`);
}