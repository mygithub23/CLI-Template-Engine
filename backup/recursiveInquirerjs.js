const inquirer = require("inquirer");

let strategies = [];
let repeat = true;
do {
  strategies.push(
    await inquirer.prompt([
      {
        type: "input",
        name: "firstname",
        message: "Enter firstname",
      },
      {
        type: "input",
        name: "lastname",
        message: "Enter lastname",
      },
    ])
  );
  repeat = (
    await inquirer.prompt([
      {
        type: "confirm",
        name: "repeat",
        message: "Do you want to add another person ?",
      },
    ])
  ).repeat;
} while (repeat);

console.log(strategies);
/* Output :
[
	{firstname: "first", lastname: "lastname"},
    ...
    {firstname: "last", lastname: "lastname"}
]
*/