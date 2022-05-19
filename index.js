// TODO: Include packages needed for this application

const {
    fileWrite,
    writeFile
} = require('fs');
const {
    prompt
} = require('inquirer');

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
        message: 'what type of license?',
        name: 'license',
        choices: ['MIT', 'Drivers License', 'Fishing License']
    },
    {
        type: 'input',
        message: 'whats your github username?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'how to test the app?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'enter your email address',
        name: 'question'
    }
];
const generateData = ({
    title,
    description,
    installation,
    usage,
    license,
    contribution,
    tests,
    question
}) => {
    return `# ${title}

## Table of content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribution)
- [Tests](#tests)
- [Questions](#question)
    
## Description
${description}

    
## Installation
${installation}
    
## Usage
${usage}
    
## Contribute
If you would like to contribute, please checkout http://www.github.com/${contribution}
    
## Tests
${tests}
    
## Questions
For any questions, please email me at ${question}
    `;
}

prompt([...questions]).then((answer) => {
    writeFile('read.md', generateData(answer), (err) => {
        if (err) throw err;
        console.log('NICE');
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();