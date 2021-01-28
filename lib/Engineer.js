// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(id, name, role, email, gitHub) {
        super(id, name, role, email)
        this.gitHub=gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;