const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (userTitle) => {
            if (userTitle) {
                return true;
            } else {
                console.log('The title is missing');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a short description of the project',
        validate: (userDescription) => {
            if (userDescription) {
                return true;
            } else {
                console.log('The description is missing');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process',
        validate: (userInstallation) => {
            if (userInstallation) {
                return true;
            } else {
                console.log('The installation process is missing');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructiona and examples for use',
        validate: (userUsage) => {
            if (userUsage) {
                return true;
            } else {
                console.log('Instructions and examples for use are missing');
                return false;
            }
        }

    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'Guidlines on how to contribute to the project',
        validate: (userContribution) => {
            if (userContribution) {
                return true;
            } else {
                console.log('Guidelines on how to contribute are missing');
                return false;
            }
        }

    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Provide walkthrough of the required test',
        validate: (userTests) => {
            if (userTests) {
                return true;
            } else {
                console.log('The tests are missing');
                return false;
            }
        }

    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Select the license',
        choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'GPLv3', 'Mozilla_2.0', 'BSD_3--Clause'],
        default: 'MIT'

    }, 
    {
        type: 'input',
        name: 'username',
        message: 'Add your GitHub username',
        validate: (userUsername) => {
            if (userUsername) {
                return true;
            } else {
                console.log('Please provide username');
                return false;
            }
        }

    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Add your email address',
        validate: (userEmail) => {
            if (userEmail) {
                return true;
            } else {
                console.log('Please provide your email address');
                return false;
            }
        }

    }, 
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err)
        : console.log('Success');
    })
    
}

// function to initialize program
function init() { 
    inquirer
    .prompt(questions)
    .then((response) =>
    {
        console.log(response);
        writeToFile('README.md', generateMarkdown(response));
    });    
}

// function call to initialize program
init();
