// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'type a brief description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'how do you install the app?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'what is it used for?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'what type of license does this app have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        message: 'how to test the app?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'whats your github username?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'enter your email address',
        name: 'question'
    }
];

inquirer.prompt([...questions]).then((answer) => {
    fs.writeFile('read.md', generateMarkdown(answer), (err) => {
        if (err) throw err;
        console.log('You made a readme.md');
    })
});