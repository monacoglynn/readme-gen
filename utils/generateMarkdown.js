// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `https://img.shields.io/badge/license-${data}-blue`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![Generic badge](https://img.shields.io/badge/license-<${data.license}>-blue.svg)](https://shields.io/)

## Table of content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribution)
- [Tests](#tests)
- [Questions](#question)
    
## Description
${data.description}

    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## Contribute
If you would like to contribute, please checkout <http://www.github.com/${data.contribution}>
    
## Tests
${data.tests}
    
## Questions
For any questions, please email me at <${data.question}>
    `;
}

module.exports = generateMarkdown;