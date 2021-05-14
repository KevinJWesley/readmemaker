// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  licenseBadge = `[License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)(https://opensource.org/licenses/${data.license})`;

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if else statement
  // switch statement for each license choice

  switch (license) {
    case "MIT":
      message = "dhfjaksdbfkajhsdfhaskdhfakjsdf.";
      break;
    case "ISC":
      message = "dhfjaksdbfkajhsdfhaskdhfakjsdf.";
      break;
    case "GPL":
      message = "dhfjaksdbfkajhsdfhaskdhfakjsdf.";
      break;
    default:
      message = "";
  }

  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // object - dot notation

  return `# ${data.title}
  ${licenseBadge}

  ## Description 

  ${data.description}

  ## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)

 ## Installation

  ${data.installation}

## Usage

 ${data.usage}

![alt screenshot](assets/images/screenshot.png)


## Test Instructions

 ${data.tests}

## Questions

  - [My GitHub](${data.github})
  - [My Email] (${data.email})


 ## Credits

 ${data.credits}


## License 

${renderLicenseLink(data.license)}











  `;
}

module.exports = generateMarkdown;
