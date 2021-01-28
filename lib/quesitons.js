const chalk = require("chalk");

const error = chalk.bold.red;
const attention = chalk.keyword("orange");
const def = chalk.bold.green;

let att = attention(" >>> ");

note =
  att +
  "(Press " +
  chalk.cyan.bold("<space>") +
  " to select, " +
  chalk.cyan.bold("<a>") +
  " to toggle all, " +
  chalk.cyan.bold("<i>") +
  " to invert selection)";

note2 =
  att +
  "(Use comm " +
  chalk.cyan.bold("<,>") +
  " to separate each path or URL), ";

//when: function(answers) {
// console.log(error('Error!'));
// console.log(warning('Warning!'));

const questions = [
  {
    //Employee Name
    type: "input",
    message: "Enter your FULL name",
    name: "authorName",
    validate: function (name) {
      if (name) {
        console.log(name);
        return true;
      }
      return error("Please enter a valid FULL name.");
    },
    default: "Ali Alaoui",
  },

  {
    //Employee Email
    type: "input",
    message: "What is your email",
    name: "email",
    validate: function (email) {
      console.log(email);
      let pass = email.match(/\S+@\S+\.\S+/g);
      if (pass) {
        return true;
      }

      return error("Please enter a valid email.");
    },
    default: "ali.alaoui@gmail.com",
  },
  {
    type: "rawlist",
    name: "role",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern"],
    filter: function (val) {
      return val.toLowerCase();
    },
    validate: function (role) {
      if (role) {
        return true;
      }

      return error("Please choose one option.");
    },
    default: "manager",
  },
  {
    //Manager
    type: "input",
    message: "What is your office number",
    name: "officeNumber",
    when: (answers) => answers.role.toLowerCase() === "manager",
    validate: function (officeNumber) {
      if (Number.NaN(officeNumber)) {
        console.log(officeNumber);
        return true;
      }
      return error("Please enter a valid office number.");
    },
    default: 1,
  },
  {
    //Engineer
    type: "input",
    message: "What is your GitHub handle?",
    name: "githubUsername",
    when: (answers) => answers.role.toLowerCase() === "engineer",
    validate: function (name) {
      if (name) {
        console.log(name);
        if (name != "") return true;
      }
      return error("Please enter a valid user name.");
    },
    default: "mygithub",
  },
  {
    //Intern
    type: "input",
    message: "What is your school name?",
    name: "schoolName",
    when: (answers) => answers.role.toLowerCase() === "intern",
    validate: function (name) {
      if (name) {
        console.log(name);
        if (name != "") return true;
      }
      return error("Please enter a valid school name.");
    },
    default: "GW University",
  },
];
module.exports = questions;
//export default questions; //ES6
