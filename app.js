log = console.log;

const fs = require('fs');
const { writeFile } = require("fs");
const path = require("path");

const inquirer = require("inquirer");
const { prompt } = require("inquirer");

const { promisify } = require("util");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const error = chalk.bold.red;
const attention = chalk.keyword("orange");
const def = chalk.bold.green;
//const Rx = require("rx");



const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const empOutputPath = path.join(OUTPUT_DIR, "employees");

const render = require("./lib/htmlRenderer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/quesitons");
const IdGen = require('./lib/IdGen');


const writeFileAsync = promisify(writeFile);

var employees = [];
var start = 1;
var end = 25;
var empId = new IdGen(start, end)
var idArray = empId.getEmpId();
log(idArray)

idArray.forEach(element => log("id ---------->", element));


clear();

log(
    chalk.yellow(
        figlet.textSync("New Employees ", { horizontalLayout: "full" })
    )
);
log(
    chalk.yellow(
        figlet.textSync("Records Keeper", { horizontalLayout: "full" })
    )
);
log(
    chalk.yellow(figlet.textSync("By Ali Alaoui", { horizontalLayout: "full" }))
);
// Inital welcome message
log("                           ");
log("                           ");
log("                           ");
log(
    chalk.bold.blue(
        "================================================================================"
    )
);

log(chalk.whiteBright.bold("All the questions are required."));
log(
    chalk.whiteBright.bold(
        "To take the default answer just hit " + chalk.cyan.bold("<enter>")
    )
);

log(
    chalk.bold.blue(
        "================================================================================"
    )
);
log("                           ");
log("                           ");
log("                           ");

//const prompts = new Rx.Subject();


let repeat = true;






var inputs = {};

var i = 0;
var s = 0;
var r = 0;

async function saveLocalEmployees(employees) {

    try {
        const employeesJSON = JSON.stringify(employees);
        //fs.writeFileSync(empOutputPath, employeeJSON)
        let n = Math.floor(Math.random() * 100);
        await writeFileAsync(empOutputPath.concat(n), employeesJSON);
    } catch (err) {
        log(`Error on  function: ${console.error(err)}`);
        log(`Error name: ${err.name}`)
        log(`Error message: ${err.message}`)
    }
}


var idCounter = 0;
var idSequence = 0;

function buildEmpObject(inputs) {
    s++;
    idCounter = idArray[idSequence];
    idSequence++

    try {
        switch (inputs.role) {
            case "Manager":
                {
                    employee = new Manager(
                        idCounter,
                        inputs.name,
                        inputs.role,
                        inputs.email,
                        inputs.officeNumber
                    );
                    employees.push(employee);
                    break;
                }

            case "Engineer":
                {
                    employee = new Engineer(
                        idCounter,
                        inputs.name,
                        inputs.role,
                        inputs.email,
                        inputs.github
                    );
                    employees.push(employee);
                    break;
                }
            case "Intern":
                {
                    employee = new Intern(
                        idCounter,
                        inputs.name,
                        inputs.role,
                        inputs.email,
                        inputs.school
                    );
                    employees.push(employee);
                    break;
                }
        }
    } catch (err) {
        log(`Error on  function: ${console.error(err)}`);
        log(`Error name: ${err.name}`);
        log(`Error message: ${err.message}`);
    }
}

function promptUser() {
    return prompt(questions);
}
// idArray.forEach(element => log("id ---------->", element));

const init = async() => {

    try {
        do {
            r++;
            let inputs = await promptUser();
            buildEmpObject(inputs)
            repeat = (
                await inquirer.prompt([{
                    type: "confirm",
                    name: "repeat",
                    message: "Do you want to add another employee?",
                }, ])
            ).repeat;
        } while (repeat);
    } catch (err) {
        log(`Error on  function: ${console.error(err)}`);
        log(`Error name: ${err.name}`);
        log(`Error message: ${err.message}`);
    }

    try {
        saveLocalEmployees(employees);
        writeFileAsync(outputPath, render(employees, "utf-8"));


    } catch (err) {
        log(`Error on  function: ${console.error(err)}`);
        log(`Error name: ${err.name}`)
        log(`Error message: ${err.message}`)
    }

    log("                           ");
    log("                           ");
    log("                           ");
    log(
        chalk.underline.yellowBright(
            "*********************** Please review your answers below *******************************"
        )
    );
    log("                           ");
    log("                           ");
    log("                           ");
    log("                           ");
    log("                           ");
    log("                           ");


    log(chalk.green("Successfully built your html page"));
};
init();

// function isValidJSON(text) {
//     try {
//       JSON.parse(text);
//       return true;
//     } catch {
//       return false;
//     }
//   }

// try {
//     try_statements
//   }
//   [catch [(exception_var)] {
//     catch_statements
//   }]
//   [finally {
//     finally_statements
//   }]