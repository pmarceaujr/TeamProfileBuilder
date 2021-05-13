// Require the engineer class and use the engineer constructor 
const Engineer = require('../lib/Engineer');

// Test: Creating engineer object  
test('This test will create an Engineer object', () => {
    const engineer = new Engineer('Han Solo', 12345, 'han.solo@starwars.com', 'HanSoloGitHub');
    expect(engineer.github).toEqual(expect.any(String));
});

// Test: Get github username from engineer object using getGithub()
test('This test will get the engineer github username', () => {
    const engineer = new Engineer('Han Solo', 12345, 'han.solo@starwars.com', 'HanSoloGitHub');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Test: Get role from engineer object using getRole() 
test('This test will get the role of employee', () => {
    const engineer = new Engineer('Han Solo', 12345, 'han.solo@starwars.com', 'HanSoloGitHub');
    expect(engineer.getRole()).toEqual("Engineer");
});