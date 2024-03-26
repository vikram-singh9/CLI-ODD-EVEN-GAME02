#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: chalk.blue("Enter any number to perform operation..."),
    },
]);
if (answer.userNumber % 2 === 0) {
    console.log(chalk.green(`This is an EVEN number.`));
}
else {
    console.log(chalk.red(`This is an ODD number`));
}
