// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(id, name, role, email, officeNumber) {
        super(id, name, role, email)
        this.officeNumber=officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;