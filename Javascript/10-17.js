// 1
// Add Variables Here
var numberOne = 10,
  numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof 'numberOne + "" + numberTwo'); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof "`${numberOne}${numberTwo}`"); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
// 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// 3
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``
console.log(
  '`I\'m In \n // \\ \n // love \\ """ \'\'\' \n // ++ With ++ // \\ """ \\ """ \n //  "" javascript "" ``'
);
// 4
let a = 21;
let b = 20;
let c = b + "" + a + "_" + b + "" + a;
let d = b + "" + a;
console.log(`_${a}_${c}_${d}_${b}_`); // _21_2021_2021_2021_20_

// challenge
var theTitle = "Elzero",
  theDesc = "Elzero web school",
  theDate = "25/10",
  theDiv = `  
  <div>
      <h3>hello ${theTitle}</h3>
      <p>${theDesc}</p>
      <span>${theDate}</span>
  </div>`;
document.write(theDiv.repeat(4));
