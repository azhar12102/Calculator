#! /usr/bin/env node
import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        name: "num1",
        type : "number",
        message: "Enter the first number",
    },
    {
        name: "num2",
        type : "number",
        message: "Enter the second number",
    },
    {
        type : "list",
        name: "operator",
        message: "please select the operator",
        choices : ["+","-","*","/"]
        
    }
]);

// variable declaration
let number1: number = answers.num1;
let number2 : number= answers.num2;
let opt : string = answers.operator;

// conditional statement
if (opt === "+"){
    console.log(`${number1} ${opt} ${number2} = ${number1+number2}`);
};
if (opt === "-"){
    console.log(`${number1} ${opt} ${number2} = ${number1-number2}`);
};
if (opt === "*"){
    console.log(`${number1} ${opt} ${number2} = ${number1*number2}`);
};
if (opt === "/"){
    console.log(`${number1} ${opt} ${number2} = ${number1/number2}`);
};
