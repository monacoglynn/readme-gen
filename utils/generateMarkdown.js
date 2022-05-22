// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  } else {
    let licenseLink = license.replace(' ', '%20')
    return `[![Generic badge](https://img.shields.io/badge/license-${licenseLink}-blue.svg)](https://shields.io/)`

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${data}-blue`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeLink = renderLicenseBadge(data.license)
  console.log(data.license)
  return `# ${data.title}
${badgeLink}

## Table of content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#question)
    
## Description
${data.description}

    
## Installation
To install the files needed to run the app, run the following command:
~~~
${data.installation}
~~~

## Usage
${data.usage}
    
## Contribute
If you would like to contribute, please checkout <http://www.github.com/${data.contribution}>
    
## Tests
To test the application, run the command:
~~~
${data.tests}
~~~
    
## Questions
For any questions, please email me at <${data.question}>
`;
}

module.exports = generateMarkdown;