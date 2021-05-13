// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "What is your project title?", name: "title" },
  {
    type: "input",
    message: "Write a description of your project...",
    name: "description",
  },
  {
    type: "input",
    message: "Please list your installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please input usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Please list your contributors",
    name: "credits",
  },
  {
    type: "input",
    message: "Describe your test instructions",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email",
  },

  {
    type: "list",
    message: "WHat license would you like to use?",
    choices: ["MIT", "ISC", "GPL"],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //path - join method

  return fs.writeFile("README.md", data, (err) => {
    if (err) throw err;

    console.log("success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  // user will see the first question
  inquirer.prompt(questions).then((data) => {
    //figure out how to take responses from user and write them to a file
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
