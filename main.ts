#! /usr/bin/evn node

import inquirer from "inquirer"
import chalk from "chalk"

const answers: {
    numberOne: number;
    numberTwo: number;
    operator: string;
} = await inquirer.prompt([
{type: "number",
name: "numberOne",
message: "enter your first number"
},
{type: "number",
name: "numberTwo",
message: "enter your second number"
},
{type: "list",
name: "operator",
message: "enter your operator",
choices: ["+", "-", "*", "/"]}
])

const { numberOne, numberTwo, operator } =answers;

let result

switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo
        break;
        default:
            console.log("Invalid operators");   
}
console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`))