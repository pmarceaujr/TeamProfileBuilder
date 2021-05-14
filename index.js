const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js')
const formatName = require('./utils/helper');
const allEmployees = [];

const questions = [
    {
        type: 'input',
        name: 'empName',
        message: "Please enter the employee's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Employee name is required, Please enter the employee's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID number?",
        validate: id => {
            if (!isNaN(parseInt(id))) {
                return true;
            } else {
                console.log("Employee ID is required and must be numeric, Please enter a valid ID number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email address",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Employee email address is required, Please enter the employee's email address!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "Please enter the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?",
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log("Manager's office number is required, Please enter a valid office number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub userame.",
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Github username is required for engineers, Please enter the engineer's github username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school.",
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("School is required for interns, Please enter the intern's school.");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]

