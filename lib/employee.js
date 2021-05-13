/*The first class is an `Employee` parent class with the following properties and methods:
Properties:
 name
 id
 email

Methods:
 getName()
 getId()
 getEmail()
 getRole() returns 'Employee'
*/

class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        // this.title = 'Employee';
        this.email = email;
    }

    // Methods
    //Get Id returns employee ID
    getId() {
        return this.id;
    }

    //Get name returns employee Name
    getName() {
        return this.name;
    }


    //Get email returns email
    getEmail() {
        return this.email;
    }

    //Get Role returns role  -- Default returns Employee
    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;