// function to generate markdown for README
function generateMarkdown(data) {
  return `

  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This project is covered under the terms of [${data.license}](https://opensource.org/licenses/${data.license}) license.

  ## Questions
  - You can view my work in GitHub:
  [${data.username}](https://github.com/${data.username})
  - Should you have any questions you can reach out to me via the below email:
  [${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
