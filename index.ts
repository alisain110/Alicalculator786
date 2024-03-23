#!/usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  { message:"select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addiction", "Subtraction", "Multiplication","Division"]
},

]);
if (answer.operator == "addition"){
  console.log(answer.firstName + answer.secondNumber);
}else if (answer.operator == "Subtraction"){
console.log(answer.firstNumber - answer.secondNumber)
} else if (answer.operator == "Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
}else if (answer.operator == "Division"){
  console.log(answer.firstNumber / answer.secondNumber)
}
else{
  console.log("Please select valid operator : !!");
  
}