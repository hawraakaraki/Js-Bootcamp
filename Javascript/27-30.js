//1
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(3).repeat(3)); // eee
//2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
//challnge
// let a = "Elzero Web School";
// //1
// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero
// //2
// // 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// //3
// // Return Array
// console.log(a.slice(0, 6).split()); // ["Elzero"]
// //4
// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(a.substr(0, 6) + " " + a.substr(11, 18)); // Elzero School
// //5
// // Solution Must Be Dynamic Because String May Changes
// console.log(
//   a.charAt(0).toLowerCase() +
//     a.slice(1, -1).toUpperCase() +
//     a.charAt(a.length - 1).toLowerCase()
// ); // eLZERO WEB SCHOOl
