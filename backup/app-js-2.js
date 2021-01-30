log = console.log;
const { promisify } = require('util');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inqurer = require('inquirer');
const Rx = require('rx');
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
const { prompts } = require('inquirer');
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


const prompts = new Rx.Subject();

function makePrompt(msg) {
  return {
    type: 'input',
    name: `userInput-${i}`,
    message: `${msg || 'start chatting'}\n\n`,

  };
}

let i = 0;

inquirer.prompt(prompts).ui.process.subscribe(( { answer } ) => {
  if (answer !== '') {
    prompts.onNext(makePrompt(`This is prompt #${i}`));
  } else {
    
  }
}
  onEachAnswer,
  onError,
  onCompleted,
);
//onEachAnser callback
({ answer }) => {
  prompts.onNext (makePrompt(`This is prompt \#${i}.'))`;
}



    const collectInputs = async (inputs = []) => {    
      
      const {again, ...answers } = await inquirer.prompt(questions);
      const newInputs = [...inputs, answers];
      return again ? collectInputs(newInputs) : newInputs;
    };

  const main = async() => {
  const inputs = await collectInputs();
  const output = (JSON.stringify(inputs, null, '\t'));
  log("this is my inputs: -------------------->"  , inputs)
  log("this is my output: -------------------->" , output)
  log('                           ')
  log('                           ')
  log('                           ')
  log(chalk.underline.yellowBright("*********************** Please review your answers below *******************************"))
  log('                           ')
  log('                           ')
  log('                           ')
  log('                           ')
  log('                           ')
  log('                           ')
  log("Employee Role => inputs[0].role: ----------------------------------> ", inputs[0].role)
  log("Employee github => inputs[0].github: ----------------------------------> ",  inputs[0].github)

  
  var employees = [];
    var employee = {};
    var manager = {};
    var managers = [];
    var engineer = {};
    var engineers = [];
    var intern = {};
    var interns = [];
    var html = "";
debugger
  switch(inputs[0].role){
    case "Manger": {
      manager = new Manager(1, inputs[0].name, inputs[0].role, inputs[0].email, inputs[0].Manager.officeNumber)
      log("employee object :=> employee", employee)

      log("*************** inside Manager **********************")
      log("Employee Id: => employee.getId() ", manager.getId())
      log("Employee Name: => inputs[0].name ", manager.getName())
      log("Employee Role:=> employee.getRole()", manager.getRole())
      log("Employee email => employee.getEmail(): ", manager.getEmail())
      log("Employee Role:=> employee.getRole()", manager.officeNumber())
      log("my Employees => emplyees", manager)
      employees.push(manager);
      log("my Employees => manager", manager)
      log("my Employees => managers", managers)
      break;
    }
 
    case "Engineer": {
      try {
      employee = new Engineer(2, inputs[0].name, inputs[0].role, inputs[0].email, inputs[0].Engineer.github)
      log("*************** inside Engineer **********************")
      log("Employee => employee ", employee)
      log("Employee Id: => employee.getId() ", employee.getId())
      log("Employee Name: => employee.getName() ", employee.getName())
      log("Employee role => employee.getRole(): ", employee.getRole())
      log("Employee email => employee.getEmail(): ", employee.getEmail())
      log("Employee gitHub => employee.getGitHub(): ", employee.getGitHub())
      employees.push(employee);
      log("my Employees => emplyees", employees)
    } catch (err) {
      log(`Error on async function: ${console.error(err)}`);
      log(`Error name: ${err.name}`)
      log(`Error message: ${err.message}`)
    }    
    
      break;
    }
    case "Intern": {
      try {
      employee = new Engineer(2, inputs[0].name, inputs[0].role, inputs[0].email, inputs[0].school)
      log("*************** inside Engineer **********************")
      log("Employee => employee ", employee)
      log("Employee Id: => employee.getId() ", employee.getId())
      log("Employee Name: => employee.getName() ", employee.getName())
      log("Employee role => employee.getRole(): ", employee.getRole())
      log("Employee email => employee.getEmail(): ", employee.getEmail())
      log("Employee gitHub => employee.getGitHub(): ", employee.school())
      employees.push(employee);
      log("my Employees => emplyees", employees)
    } catch (err) {
      log(`Error on async function: ${console.error(err)}`);
      log(`Error name: ${err.name}`)
      log(`Error message: ${err.message}`)
    }    
    
      break;
    }
    default: {
      log('Error in Switch statment');
      break;
    }
      
  }
  

  


  writeFileAsync(outputPath, render(employees), "utf-8"); 
  log(chalk.green('Successfully built your html page'));  
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
    