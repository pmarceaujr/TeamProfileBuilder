/*
In addition to `Employee`'s properties and methods, `Intern` will also have the following:
Properties:
 school

Methods:
 getSchool()
 getRole() overridden to return 'Intern'
 */

// importing Employee constructor to be able to extend it for Intern
// intern constructor extends employee constructor 
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // calling employee constructor
        super(name, id, email);
        this.school = school;
    }

    //Get school returns school  
    getSchool() {
        return this.school;
    }

    // override employee role to intern
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;