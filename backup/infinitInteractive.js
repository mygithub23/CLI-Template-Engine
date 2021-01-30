// run with `node infinite.js` in node v4.x+
// must have Inquirer installed (`npm install inquirer`)

const inquirer = require('inquirer');
const Rx = require('rx');

const prompts = new Rx.Subject();

function makePrompt(msg) {
  return {
    type: 'input',
    name: `userInput-${i}`,
    message: `${msg || 'Say something to start chatting!'}\n\n`,
  };
}

let i = 0;

inquirer.prompt(prompts).ui.process.subscribe(({ answer }) => {
  if (answer !== '') {
    i += 1;
    prompts.onNext(makePrompt(`This is prompt #${i}.`));
  } else {
    prompts.onCompleted();
  }
}, (err) => {
  console.warn(err);
}, () => {
  console.log('Interactive session is complete. Good bye! 👋\n');
});

prompts.onNext(makePrompt());


//---------------


const prompts = new Rx.Subject();
// inquirer.prompt(prompts).ui.process.subscribe(
//   onEachAnswer,
//   onError,
//   onCompleted,
//  );

// inquirer.prompt((questions))
// .then((answers) => {
//   log('================== inside inquirer ==========================')
//   log(answers)
// })

const error = chalk.bold.red;
const attention = chalk.keyword("orange");
const def = chalk.bold.green;

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
    i += 1;
    prompts.onNext(makePrompt(`This is prompt #${i}`));
  } else {
    prompts.onCompleted();
  }
}, (err) => {
  console.warn(err);
  }, () => {
    log('Interactive session is complete. Thank you')
  });


prompts.onNext(makePrompt());