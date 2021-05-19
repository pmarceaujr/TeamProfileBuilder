/*
In addition to `Employee`'s properties and methods, `Manager` will also have the following:
Properties:
 officeNumber

Methods:
 getRole() overridden to return 'Manager'
*/

// import Employee constructor to be able to extend it for Manager
// manager constructor extends employee constructor 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    // override employee role to return manager 
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;