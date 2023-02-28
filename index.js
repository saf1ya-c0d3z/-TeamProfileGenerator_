const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");

function engineerQ() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the staff members name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee identification number?",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is the engineer's github?",
    },
  ];

  return inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    const engineer = new Engineer(
      inquirerResponses.name,
      inquirerResponses.id,
      inquirerResponses.email,
      inquirerResponses.gitHub
    );
    console.log(engineer);
  });
}
function managerQ() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the staff members name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee identification number?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number?",
    },
  ];
  return inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    const manager = new Manager(
      inquirerResponses.name,
      inquirerResponses.id,
      inquirerResponses.email,
      inquirerResponses.officeNumber
    );
    console.log(manager);
  });
}

function internQ() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the staff members name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee identification number?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the school of this intern?",
    },
  ];
  return inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    const intern = new Intern(
      inquirerResponses.name,
      inquirerResponses.id,
      inquirerResponses.email,
      inquirerResponses.school
    );
    console.log(intern);
  });
}

function employeeQ() {
  const questions = [
    {
      type: "list",
      name: "employee",
      message: "What position is this employee? ",
      choices: ["engineer", "intern"],
    },
  ];
  return inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    if (inquirerResponses.employee === "intern") {
      internQ().then(employeeQ);
    } else {
      engineerQ().then(employeeQ);
    }
  });
}
const employeeData = []
function generateTabs() {

}

managerQ().then(employeeQ);
