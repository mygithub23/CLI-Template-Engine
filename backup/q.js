
Usage
A common pattern in node.js is to include an index file which creates a hash of the files in its current directory. Given a directory structure like so:

app.js
routes/
index.js
home.js
auth/
login.js
logout.js
register.js
routes/index.js uses require-directory to build the hash (rather than doing so manually) like so:

var requireDirectory = require('require-directory');
module.exports = requireDirectory(module);
app.js references routes/index.js like any other module, but it now has a hash/tree of the exports from the ./routes/ directory:

var routes = require('./routes');

// snip

app.get('/', routes.home);
app.get('/register', routes.auth.register);
app.get('/login', routes.auth.login);
app.get('/logout', routes.auth.logout);

const chalk = require("chalk");

 
const error = chalk.bold.red;
const attention = chalk.keyword('orange');
const def = chalk.bold.green;

let att = attention(" >>> ");


note = att + 
'(Press ' +
chalk.cyan.bold('<space>') +
' to select, ' +
chalk.cyan.bold('<a>') +
' to toggle all, ' +
chalk.cyan.bold('<i>') +
' to invert selection)';


note2 = att +
'(Use comm ' +
chalk.cyan.bold('<,>') +
' to separate each path or URL), '



  //when: function(answers) {
// console.log(error('Error!'));
// console.log(warning('Warning!'));


const questions = [
  {
    //Author Name
    type: "input",
    message: "Enter your FULL name",
    name: "authorName",
    validate: function (name) {
      if(name) {
        console.log(name)
        return true;
      }
      return error("Please enter a valid FULL name.");
    },
   default: "Ali Alaoui",
  },

  {
		//Employee Email
		type: 'input',
		message: 'What is your email',
		name: 'email',
		validate: function(email) {
      console.log(email)
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}

			return error('Please enter a valid email.');
    },
   default: 'ali.alaoui@gmail.com',
  },
  {
    type: "input",
    name: "role",
    message: "What is your role?",
    validate: function(role) {
			if (role.toLowerCase() === "manager" || role.toLowerCase() === "engineer" || role.toLowerCase() === "intern") {
				return true;
			}
			return error('Only manager, engineer or intern is accepted.');
    },
    default: "manager",
  },
  {
    type: "input",
    name: "role",
    message: "What is your role?",
    validate: function(role) {
			if (role.toLowerCase() === "manager" || role.toLowerCase() === "engineer" || role.toLowerCase() === "intern") {
				return true;
			}
			return error('Only manager, engineer or intern is accepted.');
    },
    default: "manager",
  },
  {
    //Manager
    type: "input",
    message: "What is your office number",
    name: "officeNumber",
    when: (answers) => (answers.role).toLowerCase() === "manager",
    validate: function (officeNumber) {
      if(Number.NaN(officeNumber)) {
        console.log(officeNumber)
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
    when: (answers) => (answers.role).toLowerCase() === "engineer",
    validate: function (name) {
      if(name) {
        console.log(name)
        return true;
      }
      return error("Please enter a valid user name.");
    },
   default: "mygithub",
  },
  {
    //Manager
    type: "input",
    message: "What is your office number",
    name: "githubUsername",
    when: (answers) => (answers.role).toLowerCase() === "manager",
    validate: function (name) {
      if(name) {
        console.log(name)
        return true;
      }
      return error("Please enter a valid user name.");
    },
   default: "mygithub",
  },
  {
    type: "input",
    name: "repoName",
    message: "What is your github repository name?",
    validate: function(repoName) {
			if (repoName) {
				return true;
			}
			return error('It is required to enter your Github Project Repo name.');
		},
   default: "MyRepoName",
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'rawlist',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask opening hours',
      'Talk to the receptionist',
    ],
  },
  {
    type: 'rawlist',
    name: 'size',
    message: 'What size do you need',
    choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
		type: 'input',
		name: 'screenshots',
		message: `Enter the image paths or urls of screenshots or demo. ${note2}`,
		when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return error('Provide the image paths or urls of screenshots or demo. ');
    },
    default: 'www.myimge.com, myimage2.com',
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is your github project title?",
    validate: function(projectTitle) {
			if (projectTitle) {
				return true;
			}

			return error('A professional README has a project title.');
		},
   default: "Project Title",
  },
  
  {
		type: 'input',
		message: 'What is your project objective?',
		name: 'objective',
		validate: function (text) {
      if (text.split('\n').length < 1) {
        return error('Must be at least 1 lines.');
      }
      return true;
    },
    default: "Eventually I think it would be nice for this app to have to same command line interface as the C-based app.",
  },
  {
    type: 'editor',
    name: 'projectDesc',
    message: 'Please copy and paste your project description',
    validate: function (text) {
      if (text.split('\n').length < 3) {
        return error('Must be at least 3 lines.');
      }
      return true;
    },
  },
  {
		//Technologies used
    type: 'input',
    name: 'technologies',
		message: `List the technologies used for the Project. ${note2}`,
		validate: function(tech) {
			if (tech) {
				return true;
			}
			return error('A professional README lists technologies used for the Project.');
    },
    default: 'Nodejs, javascript, inquirer, chalk',
  },
  {
		//Prerequisites
		type: 'input',
		message: 'What are the project prerequisites?',
		name: 'prerequisites',
		validate: function(require) {
			if (require) {
				return true;
			}
			return error('A professional README provides steps on how to install the project.');
    },
    default: 'project prerequisites',
	},
	{
		//Installation
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
		validate: function(install) {
			if (install) {
				return true;
			}
			return error('A professional README provides steps on how to install the project.');
    },
    default: 'steps to insall the project',
	},
	{
		// How to use
		type: 'input',
		message: 'Provide instructions on how to use your project',
		name: 'usage',
		vvalidate: function (text) {
      if (text.split('\n').length < 1) {
        return error('Must be at least 1 lines.');
      }
			return error('Must be at least 1 lines.');
    },
    default: 'How to use the project - We can use Inquirer for this. The module includes a number of methods for various types of prompts, which are roughly analogous to HTML form controls. In order to collect the user’s GitHub username and password, we’re going to use the input and password types respectively.',
  },
  {
		// Tests
		type: 'input',
		message: 'How to test your project?',
		name: 'test',
		default: 'how to test the project - Require steps We can use Inquirer for this. The module includes a number of methods for various types of prompts, which are roughly analogous to HTML form controls. In order to collect the user’s GitHub username and password, we’re going to use the input and password types respectively. ',
  },  
	{
		// License
		type: 'checkbox',		
    name: 'license',
    message: `Please select a license for your project. ${note}`,
		choices: ['MIT', 'GNU GPLv3', 'APACHE 2.0', 'The Unlicense'],		
    validate: function (answer) {
      if (answer.length < 1) {
        return error("You must choose at least one license");
      }
      return true;
    },
	},
];
module.exports = questions;
//export default questions; //ES6

