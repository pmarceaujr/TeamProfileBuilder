// Require the manager class and use the manager constructor  
const Manager = require('../lib/Manager');

// Test: Creating manager object 
test('This test will create a Manager object', () => {
    const manager = new Manager('Han Solo', 12345, 'han.solo@starwars.com', 999);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test: Get role from manager object using getRole()
test('This test will get the role of employee', () => {
    const manager = new Manager('Han Solo', 12345, 'han.solo@starwars.com', 999);
    expect(manager.getRole()).toEqual("Manager");
});