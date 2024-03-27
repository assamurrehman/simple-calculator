import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your firstnumber", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    { message: "choose the operation you want in between these numbers", type: "list", name: "operator", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"] },
]);
//CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log("your answer is=");
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log("your answer is=");
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log("your answer is=");
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "DIVISION") {
    console.log("your answer is=");
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    "nai bhaee sai operator select karo";
}
