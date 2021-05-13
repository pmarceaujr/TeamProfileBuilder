// Require the employee class and use the employee constructor 
const Employee = require('../lib/Employee');

// Test: Creating employee object 
test('This test will create an employee object', () => {
    const employee = new Employee('Han Solo', 12345, 'han.solo@starwars.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Test:  Get employee name from employee object using getName() 
test('This test will get the employee name', () => {
    const employee = new Employee('Han Solo', 12345, 'han.solo@starwars.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// Test:  Get employee ID from employee object using getId() 
test('This test will get the employee ID', () => {
    const employee = new Employee('Han Solo', 12345, 'han.solo@starwars.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//Test:  Get employee email from employee object using getEmail() 
test('This test will get the employee email', () => {
    const employee = new Employee('Han Solo', 12345, 'han.solo@starwars.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//Test:  Get employee role from employee object using getRole() 
test('This test will get the employee role', () => {
    const employee = new Employee('Han Solo', 12345, 'han.solo@starwars.com');
    expect(employee.getRole()).toEqual("Employee");
});