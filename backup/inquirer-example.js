
//https://github.com/SBoudrias/Inquirer.js
//https://old.janabeck.com/blog/2017/02/05/infinite-interactivity-with-inquirer

// Not sure if this was intentional but
inquirer.prompt([ { 
    type : "list", name : "foo", message : "Result", choices : choices, 
} ], function(answer) { console.log(answer); });

// no longer works post 0.12.0, the callback function is never called.


var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  Bottom Bar - inquirer.ui.BottomBar
This UI present a fixed text at the bottom of a free text zone. This is useful to keep a message to the bottom of the screen while outputting command outputs on the higher section.

var ui = new inquirer.ui.BottomBar();

// pipe a Stream to the log zone
outputStream.pipe(ui.log);

// Or simply write output
ui.log.write('something just happened.');
ui.log.write('Almost over, standby!');

// During processing, update the bottom bar content to display a loader
// or output a progress bar, etc
ui.updateBottomBar('new bottom bar content');