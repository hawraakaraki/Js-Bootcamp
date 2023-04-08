//1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(50000 + 50000); // 100000
console.log(100 * 1000); // 100000
console.log(110000 - 10000); // 100000
console.log(Number(100000)); // 100000
console.log(Math.ceil(99999.6)); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.trunc(100000.76767)); // 100000
console.log(Math.pow(10 , 5 )); // 100000
//2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
//3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
//4
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(myVar).toFixed(2)); // 100.57
//5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
//6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10
//7
console.log(Math.trunc(Math.random() * 4) ); // 0 || 1 || 2 || 3 || 4