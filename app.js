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

// Wrap fs.writeFile inside util.promisify
const writeFileAsync = promisify(writeFile);

var employees = [];
var start = 1;
var end = 25;
var empId = new IdGen(start, end)
var idArray = empId.getEmpId();
log(idArray)

idArray.forEach(element => log("id ---------->", element));


//const lib = require('./lib')
//const generateHTML = require('./templates/mnger.html')

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
    log("\n\n\n\n \n\n\n\n");
  log( "%%%%%%%%%%%%%%%%%%% Entring saveLocalEmployees %%%%%%%%%%%%%%%%%%%%%%%%")
  try {
    log("\n\n\n\n \n\n\n\n");
    log("employees Array   \n", employees)

    const employeesJSON = JSON.stringify(employees);
    log("\n\n\n\n \n\n\n\n");
    log("employeesJSON STRING   \n", employeesJSON)
    
    //fs.writeFileSync(empOutputPath, employeeJSON)
    let n = Math.floor(Math.random() * 100);
     await writeFileAsync(empOutputPath.concat(n) , employeesJSON);
 
    log( "%%%%%%%%%%%%%%%%%%% Done with saveLocalEmployees %%%%%%%%%%%%%%%%%%%%%%%%")

  } catch (err) {
      log(`Error on  function: ${console.error(err)}`);
      log(`Error name: ${err.name}`)
      log(`Error message: ${err.message}`)    
  }

}


  async function saveEmployees(employees){
  try {
    log("\n\n\n\n \n\n\n\n");
    log( "((((((((((((((( I am inside saveEmployees )))))))))))))))))))))))")
    log("\n\n\n\n \n\n\n\n");
    log("employees object:    \n", employees)
    log("\n\n\n\n \n\n\n\n");
   
   // writeFileAsync(outputPath, render(employees, "utf-8"));
    
    log( "((((((((((((((( Call writeFileSync Loop )))))))))))))))))))))))")
    for (i=0; i< employees.length; i++) {
        log("\n\n\n\n \n\n\n\n");
        log( "((((((((((((((( Call writeFileSync Loop )))))))))))))))))))))))")
        log("Counter i Value:    \n", i)
        log("employees object:    \n", employees[i])
        await writeFileAsync(outputPath, render(employees[i], "utf-8"));
        log("\n\n\n\n \n\n\n\n");
    }
    log( "((((((((((((((( Done with writeFileSync  )))))))))))))))))))))))")
    
    
  } catch (err) {
    log(`Error on  function: ${console.error(err)}`);
    log(`Error name: ${err.name}`)
    log(`Error message: ${err.message}`)    
  }
  
}

var idCounter = 0;
var idSequence = 0;
 function buildEmpObject(inputs) {
    log("\n\n\n\n******************** =========== Entring Switch ================= ******************* \n\n\n\n");
    s++;   
    log("Counter s:  ", s)
    log("input inside Switch Manager ", inputs)
    log("input inside Switch Manager ", inputs.role)

    idCounter = idArray[idSequence];
    idSequence++
        
  try {
    switch (inputs.role) {
      case "Manager": {
        
        log("\n\n\n\n******************** =========== Entring Manager ================= ******************* \n\n\n\n");
        log("input inside Switch Manager ", inputs)
        
        employee = new Manager(
          idCounter,
          inputs.name,
          inputs.role,
          inputs.email,
          inputs.officeNumber
        );
        log("\n\n\n\n******************** ========== New instance of Manager created called employee ================== ******************* \n\n\n\n");
        log("employee instance of Manager inside Switch Manager ", employee)
        log("\n\n\n\n \n\n\n\n");
        

        log("*************** employee instance of manager property inside Manager **********************");
        log("Employee Id: => Manager.getId() ", employee.getId());
        log("Employee Name: => Manager.name ", employee.getName());
        log("Employee Role:=> Manager.getRole()", employee.getRole());
        log("Employee email => Manager.getEmail(): ", employee.getEmail());
        log("Employee Role:=> Manager.getRole()", employee.getOfficeNumber());
        log("\n\n\n\n \n\n\n\n");
        log("employees array before push", employees);
        employees.push(employee);

        log("\n\n\n\n \n\n\n\n");
        log("employees array after push push", employees);

        log("\n\n\n\n******************** ============= Done with Manager =============== ******************* \n\n\n\n");
       
        break;

      }
    
      case "Engineer": {
        log("\n\n\n\n******************** =========== Entring Engineer ================= ******************* \n\n\n\n");
        log("input inside Switch Engineer ", inputs)
        
        employee = new Engineer(
          idCounter,
          inputs.name,
          inputs.role,
          inputs.email,
          inputs.github
        );
        log("\n\n\n\n******************** ========== New instance of Engineer created called employee ================== ******************* \n\n\n\n");
        log("employee instance of Engineer inside Switch Engineer ", employee)
        log("\n\n\n\n \n\n\n\n");
          
  
          log("*************** employee instance of Engineer property inside Engineer **********************");
          log("Employee Id: => Engineer.getId() ", employee.getId());
          log("Employee Name: => Engineer.name ", employee.getName());
          log("Employee Role:=> Engineer.getRole()", employee.getRole());
          log("Employee email => Engineer.getEmail(): ", employee.getEmail());
          log("Employee Role:=> Engineer.getRole()", employee.getGithub());
          log("\n\n\n\n \n\n\n\n");
          log("employees array before push", employees);
          employees.push(employee);
          log("\n\n\n\n \n\n\n\n");
          log("employees array after push push", employees);
        
          log("\n\n\n\n******************** ============ Done with Engineer ================ ******************* \n\n\n\n");
        break;
      }
      case "Intern": {
        log("\n\n\n\n******************** =========== Entring Intern ================= ******************* \n\n\n\n");
        log("input inside Switch Intern ", inputs)
        
        employee = new Intern(
          idCounter,
          inputs.name,
          inputs.role,
          inputs.email,
          inputs.school
        );
        log("\n\n\n\n******************** ========== New instance of Intern created called employee ================== ******************* \n\n\n\n");
        log("employee instance of Intern inside Switch Intern ", employee)
        log("\n\n\n\n \n\n\n\n");
          
  
          log("*************** employee instance of Intern property inside Intern **********************");
          log("Employee Id: => Intern.getId() ", employee.getId());
          log("Employee Name: => inputs.name ", employee.getName());
          log("Employee Role:=> Intern.getRole()", employee.getRole());
          log("Employee email => Intern.getEmail(): ", employee.getEmail());
          log("Employee Role:=> Intern.getRole()", employee.getSchool());
          log("\n\n\n\n \n\n\n\n");
          log("employees array before push", employees);
          employees.push(employee);
          log("\n\n\n\n \n\n\n\n");
          log("employees array after push push", employees);
        
          log("\n\n\n\n******************** ============ Done with Intern ================ ******************* \n\n\n\n");
        break;
      }
    }
  } catch (err) {
    log(`Error on  function: ${console.error(err)}`);
    log(`Error name: ${err.name}`);
    log(`Error message: ${err.message}`);
  }

  log("employees array before exiting SWITCH :  ", employees)
  log("\n\n\n\n******************** =========== Done with SWITCH STATEMENT ================= ******************* \n\n\n\n");
        
        log("\n\n\n\n\n\n\n\n");
}

function promptUser() {
  return prompt(questions);
}
idArray.forEach(element => log("id ---------->", element));
const init = async () => {

    try {
        do {  
            log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
            log( "((((((((((((((( I am inside do While )))))))))))))))))))))))\n\n")

            r++;
            log("\n\n\n\n******************** Starting record number: ", r ,"  ******************* \n\n\n\n");

            let inputs = await promptUser();
        

            log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
            log("********************inputs  \n\n", inputs);
            log(" \n\n********************Call buildEmpObject and passing inputs object ******************* \n\n");

            buildEmpObject(inputs)
            log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
            log(" \n\n******************** Back from buildEmpObject ******************* \n\n");
            //employees.push(inputs)
            log("\n\n\n ============ Employees inside do while \n\n", employees)
            log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
        
            
            
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
    } catch (err) {
    log(`Error on  function: ${console.error(err)}`);
    log(`Error name: ${err.name}`);
    log(`Error message: ${err.message}`);
    }

  log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
  log( "***************************** I am done with do While Questions)))))))))))))))))))))))")
  log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
  log("Employees Array: ", employees);
  log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
  log("$$$$$$$$$$$$$$$$$$$$$$$ call SaveLocalEmployees and passing empoyees object $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  

  //saveLocalEmployees(employees);

  log("$$$$$$$$$$$$$$$$$$$$$$$ Done with SaveLocalEmployees \n\n\n");
  log("$$$$$$$$$$$$$$$$$$$$$$$ call SaveEmployees and passing empoyees object $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  try {
    log("\n\n\n\n \n\n\n\n");
    log( "((((((((((((((( I am inside saveEmployees )))))))))))))))))))))))")
    log("\n\n\n\n \n\n\n\n");
    log("employees object:    \n", employees)
    log("\n\n\n\n \n\n\n\n");
    
    log( "((((((((((((((( Call writeFileSync Loop )))))))))))))))))))))))")
    writeFileAsync(outputPath, render(employees, "utf-8"));
    
    // log( "((((((((((((((( Call writeFileSync Loop )))))))))))))))))))))))")
    // for (i=0; i< employees.length; i++) {
    //     log("\n\n\n\n \n\n\n\n");
    //     log( "((((((((((((((( Call writeFileSync Loop )))))))))))))))))))))))")
    //     log("Counter i Value:    \n", i)
    //     log("employees object:    \n", employees[i])
    //     await writeFileAsync(outputPath, render(employees[i], "utf-8"));
    //     log("\n\n\n\n \n\n\n\n");
    // }
    log( "((((((((((((((( Done with writeFileSync  )))))))))))))))))))))))")
    
    
  } catch (err) {
    log(`Error on  function: ${console.error(err)}`);
    log(`Error name: ${err.name}`)
    log(`Error message: ${err.message}`)    
  }


  //saveEmployees(employees);

  log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");
  log("$$$$$$$$$$$$$$$$$$$$$$$ Done with SaveEmployees $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  log("\n\n\n\n******************** ============================ ******************* \n\n\n\n");



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