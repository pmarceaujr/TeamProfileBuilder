// Require the intern class and use the intern constructor 
const Intern = require('../lib/Intern');

// Test: Creating intern object 
test('This test will create an Intern object', () => {
    const intern = new Intern('Han Solo', 12345, 'han.solo@starwars.com', 'Star Wars Flight School');
    expect(intern.school).toEqual(expect.any(String));
});

// Test: Get school from intern object using getSchool()
test('This test will get the intern school', () => {
    const intern = new Intern('Han Solo', 12345, 'han.solo@starwars.com', 'Star Wars Flight School');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Test: Get role from intern object using getRole()
test('This test will get the role of employee', () => {
    const intern = new Intern('Han Solo', 12345, 'han.solo@starwars.com', 'Star Wars Flight School');
    expect(intern.getRole()).toEqual("Intern");
});