//directory path to the Team Profile HTML page
const path = require('path')
const outputDirName = path.resolve(__dirname, "dist")
const outputFilePath = path.join(outputDirName, "teamProfile.HTML")

//team profiles
//const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//node
const fs = require('fs');
const inquirer = require('inquirer');

//array to build team
const teamMembers = [];

const generatePage = require("./src/generateHTML")

//prompts
const initTeamBuilder = () => {
    console.log("There can only be on team manager, so we will add the Team Manager first.")
    const addManager = () => {
        return inquirer
            .prompt([
                {
                    name: "name",
                    type: "input",
                    message: "Please enter the name of the manager for this team:",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            return "Manager's name is required. Please enter the name of the manager for this team:"
                        }
                    }
                },
                {
                    name: "id",
                    type: "input",
                    message: "Please enter the manager's ID number:",
                    validate: idInput => {
                        if (!isNaN(parseInt(idInput))) {
                            return true
                        }
                        else {
                            return "Manager's ID is required and must be numeric. Please enter a valid ID number:"
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the manager's email address:",
                    validate: emailInput => {
                        if (emailInput) {
                            return true
                        } else {
                            return "Manager's email address is required. Please enter the manager's email address:"
                        }
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter the manager's office number:",
                    validate: offNumInput => {
                        if (isNaN(offNumInput)) {
                            return "The manager's office number is required.  Please enter the manager's office number:"
                        } else {
                            return true;
                        }
                    }
                }
            ])
            .then(managerInput => {
                const { name, id, email, officeNumber } = managerInput;
                const manager = new Manager(name, id, email, officeNumber);
                //Add the manager data to the team members array
                teamMembers.push(manager);
                console.log("The manager data is as follows:")
                console.log(manager);
                console.log("We will now add additional team members.");
                addEmployee();
            })
    };

    const addEmployee = () => {
        console.log("Adding new team members.");
        return inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Please select the role of the next team member:",
                choices: ['Engineer', 'Intern', 'End Team Data Entry']
            }
        ]).then(userChoice => {
            switch (userChoice.role) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        }
        )
    }

    const addEngineer = () => {
        console.log("Adding new Engineer to the team.");
        inquirer.prompt([

            {
                type: "input",
                name: "name",
                message: "Please enter the engineer's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return "Engineer's name is required.  Please enter the engineer's name:"
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the engineer's ID number:",
                validate: idInput => {
                    if (!isNaN(parseInt(idInput))) {
                        return true
                    }
                    else {
                        return "Engineer's ID is required and must be numeric. Please enter a valid ID number:"
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the engineer's email address:",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        return "Engineer's email address is required.  Please enter the engineer's email address:"
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineer's github username:",
                validate: gitInput => {
                    if (gitInput) {
                        return true
                    } else {
                        return "Engineer's GitHub username is required.  Please enter the engineer's github username:"
                    }
                }
            },
        ]).then(engineerInput => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            //Add the engineer data to the team members array
            teamMembers.push(engineer);
            console.log("The engineer data is as follows:")
            console.log(engineer);
            console.log("We will now add additional team members.");
            addEmployee();
        })
    }

    const addIntern = () => {
        console.log("Adding new Intern to the team.");
        inquirer.prompt([

            {
                type: "input",
                name: "name",
                message: "Please enter the intern's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return "Intern's name is required.  Please enter the intern's name:"
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Please enter intern's ID number:",
                validate: idInput => {
                    if (!isNaN(parseInt(idInput))) {
                        return true;
                    } else {
                        return "Intern's ID is required and must be numeric, Please enter a valid ID number!"
                    }

                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the intern's email address:",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        return "Intern's email address is required.  Please enter the intern's email address:"
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school:",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true
                    } else {
                        return "Intern's school is required.  Please enter the intern's school:"
                    }
                }
            },
        ]).then(internInput => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            //Add the intern data to the team members array
            teamMembers.push(intern);
            console.log("The intern data is as follows:")
            console.log(intern);
            console.log("We will now add additional team members.");
            addEmployee();
        })
    };
    const buildTeam = () => {
        if (!fs.existsSync(outputDirName)) {
            fs.mkdirSync(outputDirName)
        }
        fs.writeFileSync(outputFilePath, generatePage(teamMembers), 'utf-8')
        console.log('Team profile successfully created!');
    }

    //This will call and start the add team members application, starting with the team manager.
    addManager();
};
//This will start and call the application
initTeamBuilder();




