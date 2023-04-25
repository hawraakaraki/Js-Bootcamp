//1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0 , 3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]
//3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne , arrTwo)
console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
//4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2, 6).toUpperCase()); // ZERO
//5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle));
{
  console.log("found");
}
if (haystack.indexOf(needle));
{
  console.log("found");
}
if (haystack.lastIndexOf(needle));
{
  console.log("found");
}
// Write 3 Solutions
//6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2[2] + arr1[2] + arr2[3]
console.log(allArrs.toLowerCase()); // fxy