log = console.log;

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
const Rx = require("rx");

const writeFileAsync = promisify(writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const empOutputPath = path.join(OUTPUT_DIR, "employees");

const render = require("./lib/htmlRenderer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/quesitons");

//const lib = require('./lib')
//const generateHTML = require('./templates/mnger.html')

clear();

log(
  chalk.yellow(
    figlet.textSync("Welcome to Github", { horizontalLayout: "full" })
  )
);
log(
  chalk.yellow(
    figlet.textSync("CLI TEMPLATE ENGINE", { horizontalLayout: "full" })
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

var employees = [];
var employee = [];
var manager = {};
var managers = [];
var engineer = {};
var engineers = [];
var intern = {};
var interns = [];
var html = "";
var inputs = {};


async function saveLocalEmployees(employees) {
  log("I am inside saveLocalEmpoyees \n")
  log("employees  ========     \n", employees)
  const employeesJSON = JSON.stringify(employees);
  //fs.writeFileSync(empOutputPath, employeesJSON)

  await writeFileAsync(empOutputPath, employeesJSON);
}

async function saveEmployees(employees){
  log("I am inside saveEmpoyees \n")
  log("employees  ========     \n", employees)
  await writeFileAsync(outputPath, render(employees), "utf-8");

  // myEmployees.forEach(employees => {
  //   await writeFileAsync(outputPath, render(employees), "utf-8");
  // });
  
}


function promptUser() {
  return prompt(questions);
}

const main = async () => {
  do {
    inputs = await promptUser();
    log("inputs  \n", inputs);
    log("--------------");

    // employees.push(inputs);
    // log("employees ---> ", employees);
    repeat = (
      await inquirer.prompt([
        {
          type: "confirm",
          name: "repeat",
          message: "Do you want to add another employee?",
        },
      ])
    ).repeat;
  } while (repeat);
  // const inputs = await promptUser();
  // saveEmployees(employees);
  //var output = (JSON.parse(employees))
  let output = JSON.stringify(inputs, null, "\t");
  //saveEmployees(inputs)
  log("this is my inputs: --------------------> \n", inputs);
  log("this is my otput: --------------------> \n", output);

  // log("this is my output: -------------------->" , output)
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

  //debugger

  log("this is my inputs2: -------------------->\n", inputs);


          log(inputs.id,
          inputs.name,
          inputs.role,
          inputs.email,
          inputs.github)

try {
  switch (inputs.role) {
    case "Manger": {
      manager = new Manager(
        inputs.id,
        inputs.name,
        inputs.role,
        inputs.email,
        inputs.officeNumber
      );
      log("Manager object :=> Manager \n", Manager);

      log("*************** inside Manager **********************");
      log("Employee Id: => Manager.getId() ", manager.getId());
      log("Employee Name: => inputs.name ", manager.getName());
      log("Employee Role:=> Manager.getRole()", manager.getRole());
      log("Employee email => Manager.getEmail(): ", manager.getEmail());
      log("Employee Role:=> Manager.getRole()", manager.officeNumber());
      log("my Employees => emplyees", manager);
      employees.push(manager);

      saveLocalEmployees(emplyees)
      saveEmployees(employees);
      log("my Employees => manager \n", manager);
      log("my Employees => managers \n", managers);
      break;
    }
   
    case "Engineer": {

        employee = new Engineer(
          inputs.id,
          inputs.name,
          inputs.role,
          inputs.email,
          inputs.github
        );
        log("*************** inside Engineer **********************");
        log("Employee => Engineer \n", employee);
        log("Employee Id: => employee.getId() ", employee.getId());
        log("Employee Name: => employee.getName() ", employee.getName());
        log("Employee role => employee.getRole(): ", employee.getRole());
        log("Employee email => employee.getEmail(): ", employee.getEmail());
        log("Employee gitHub => employee.getGitHub(): ", employee.getGithub());
        employees.push(employee);
        log("Employee => Engineer =================> \n", employees);
        saveLocalEmployees(employees)
        saveEmployees(employees);

        log("my Employees => emplyees *******************", employees);
      

      break;
    }
    case "Intern": {
    //  try {
        intern = new Intern(
          inputs.id,
          inputs.name,
          inputs.role,
          inputs.email,
          inputs.school
        );
        log("*************** inside Intern **********************");
        log("Employee => Intern ", intern);
        log("Employee Id: => intern.getId() ", intern.getId());
        log("Employee Name: => intern.getName() ", intern.getName());
        log("Employee role => intern.getRole(): ", intern.getRole());
        log("Employee email => intern.getEmail(): ", intern.getEmail());
        log("Employee gitHub => intern.getGitHub(): ", intern.school());
        employees.push(intern);
        saveEmployees(intern);
        log("my Employees => emplyees", employees);
   

      break;
    }
    // default: {
    //   log("Error in Switch statment");
    //   break;
    // }
  }
} catch (err) {
  log(`Error on async function: ${console.error(err)}`);
  log(`Error name: ${err.name}`);
  log(`Error message: ${err.message}`);
}

  // await writeFileAsync(outputPath, render(employees), "utf-8");

  // fs.writeFileSync(outputPath, render(employees), "utf-8");
  log(chalk.green("Successfully built your html page"));
};
main();

//  } catch (error) {
//       log(`Error on async function: ${console.error(err)}`);
//       log(`Error name: ${err.name}`)
//       log(`Error message: ${err.message}`)
//     }

// } catch (err) {
//   log(`Error on async function: ${console.error(err)}`);
//   log(`Error name: ${err.name}`)
//   log(`Error message: ${err.message}`)
// }

// 	//const html = render(answers);

//fs.writeFileSync(outputPath, render(employees), "utf-8")

// init();

//https://old.janabeck.com/blog/2017/02/05/infinite-interactivity-with-inquirer

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
