// JavaScript Bootcamp assignments from Lesson 001 to 009

// assignments 1
/* 
first code not work becouse is before the h1 tag
secound code work
third code work
*/
// assignments 2
document.write("<h1> Elzero </h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontWeight = "bold";
// assignments 3
console.log(
  "%c elzero  %c web %c school",
  "color: red; font-size: 40px",
  "color: green; font-size: 40px ; font-weight = bold ; text-align = center",
  "background : blue ; color: white ; font-size: 40px"
);
// fourth assignments
console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd();
// fifth assignments
console.table(["ali", "hawraa", "hassan", "aya", "osama"]);
// sixth assignments

// first method
// console.log("Iam In Console");
// document.write("Iam In Page");

// secound method
/* 
console.log("Iam In Console");
document.write("Iam In Page");
*/
