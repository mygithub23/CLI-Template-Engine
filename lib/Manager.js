// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(id, name, role, email, officeNum) {
        super(id, name, role, email)
        this.officeNum=officeNum;
    }
    getOfficeNum(){
        return this.officeNum;
    }
}
module.exports = Manager;