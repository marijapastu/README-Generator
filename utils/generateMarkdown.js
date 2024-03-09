// function to generate a badge and a link for the license

function generateLicense (license) {
  if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'BSD 3-Clause License') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } 
  
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${generateLicense(data.license)}
  
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
  [github/docs/contribute](https://github/docs/contribute)

  ## Tests
  ${data.tests}

  ## License
  This project is covered under the terms of ${data.license} license.

  ## Questions
  - You can view my work in GitHub:
  [${data.username}](https://github.com/${data.username})
  - Should you have any questions you can reach out to me via the below email:
  [${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
