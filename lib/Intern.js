const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee{
    constructor(id, name, role, email, schoolName) {
        super(id, name, role, email)
        this.schoolName=schoolName;
    }
    getSchoolName(){
        return this.schoolName;
    }
}

module.exports = Intern;