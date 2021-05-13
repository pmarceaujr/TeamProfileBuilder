/*
In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
Properties:
 github GitHub username

Methods:
 getGithub()
 getRole() overridden to return 'Engineer'
 */


// importing Employee constructor to be able to extend it for Engineer
// engineer constructor extends employee constructor 
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //GetGithub returns github user name 
    getGithub() {
        return this.github;
    }

    // override employee role to return engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;