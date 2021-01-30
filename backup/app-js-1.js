log = console.log;
const { promisify } = require('util');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const { prompt } = require('inquirer');
const path = require("path");
const fs = require("fs");
const writeFileAsync = promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require('./lib/quesitons');
const inquirer = require('inquirer');
//const lib = require('./lib')
//const generateHTML = require('./templates/mnger.html') 



clear();


log(
  chalk.yellow(
    figlet.textSync('Welcome to Github', { horizontalLayout: 'full' })
  )
);
log(
  chalk.yellow(
    figlet.textSync('CLI TEMPLATE ENGINE', { horizontalLayout: 'full' })
  )
);
log(
  chalk.yellow(
    figlet.textSync('By Ali Alaoui', { horizontalLayout: 'full' })
  )
);
// Inital welcome message
log('                           ')
log('                           ')
log('                           ')
log (chalk.bold.blue('================================================================================'));

log(chalk.whiteBright.bold("All the questions are required."));
log(chalk.whiteBright.bold("To take the default answer just hit " + chalk.cyan.bold("<enter>")))

log (chalk.bold.blue('================================================================================'));
log('                           ')
log('                           ')
log('                           ')



//Create a function to prompt user questions
function promptUser() {
	return prompt(questions);
}

// const init = async () => {
//   log('this is a test');
//   try{
//     const answers = await promptUser();
//     const html = generateHTML(answers);

//   }
// }
// Use async... await
async function init() {
  //try ... catch block
	try {
    const collectInputs = async (inputs = []) => {
    const answers = await promptUser();
    const {again, ...answers } = await promptUser();
    const newInputs = [...newInputs, answers];
    return again ? collectInput(newInputs) : newInputs;
    }
    const output = (JSON.stringify(answers, null, '\t'));
    log("this is my answers: -------------------->"  , answers)
    log("output ", output)
    log('                           ')
    log('                           ')
    log('                           ')
    log(chalk.underline.yellowBright("*********************** Please review your answers below *******************************"))
    log('                           ')
    log('                           ')
    log('                           ')

    log(chalk.white(output))
    log('                           ')
    log('                           ')
    log('                           ')

	//const html = render(answers);

    var employees = [];

    switch(output.role){
      case "Manger":
        employee = new Manager(1, output.name, output.role, output.email, employee.officeNum)
        break;
      case "Engineer":
        employee = new Engineer(2, output.name, output.role, output.email, output.github)
        break;
    }
    employees.push(output)
    html = render(employees)
   // log(`html --> ${html}`)
    log(`employees --> ${employees}`)

  await writeFileAsync(outputPath, html, "utf-8");
  
	//fs.writeFileSync(outputPath, render(employees), "utf-8")

		log(chalk.green('Successfully built your html page'));
	} catch (err) {
    log(`Error on async function: ${console.error(err)}`);
    log(`Error name: ${err.name}`)
    log(`Error message: ${err.message}`)
	}
}

init();

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
