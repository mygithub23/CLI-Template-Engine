// TODO: Write code to define and export the Employee class

class Employee {
    constructor(id, name, role, email) {
            this.id = id;
            this.name = name;
            this.role = role;
            this.email = email;
        }
        // setId(id) {
        //     return this.id = id;
        // }
    getId() {
            return this.id;
        }
        // setName(name) {
        //     return this.name = name;
        // }
    getName() {
            return this.name;
        }
        // setRole(role) {
        //     return this.role = role;
        // }
    getRole() {
            return this.role;
        }
        // setEmail(email) {
        //     return this.email = email;
        // }
    getEmail() {
        return this.email;
    }
};

module.exports = Employee;