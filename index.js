const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const render = require("./src/page-template");
const inquirerResponses = [];

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
    employeeData.push(engineer);
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
    employeeData.push(manager);
    console.log(employeeData);
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
    employeeData.push(intern);
  });
}

function employeeQ() {
  const questions = [
    {
      type: "list",
      name: "employee",
      message: "What position is this employee? ",
      choices: ["engineer", "intern", "generateTeam"],
    },
  ];
  return inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    if (inquirerResponses.employee === "intern") {
      internQ().then(employeeQ);
    } else if (inquirerResponses.employee === "engineer") {
      engineerQ().then(employeeQ);
    } else {
      // TO DO-- generate the HTML file Using the employee data Array--//
      console.log(employeeData);
    }
  });
}
const employeeData = [];
function generateHTML(employeeData) {
 
  const employeeCards = generateEmployeeCards(employeeData)
  
}
generateHTML(employeeData)
function generateEmployeeCards(employeeData) {
 return employeeData.map(employee => { 
   if (employee.getRole() === "manager") {
   return `
   <div class="col">
   MANAGER
   ${employee.getName()}
   ${employee.getId()}
   ${employee.getEmail()}
   ${employee.getOfficeNum()}
   </div>` 
   }
   else if (employee.getRole() === "intern") {
    return `
    <div class="col"> 
    <div class="card">
    INTERN
    ${employee.getName()}
    ${employee.getId()}
    ${employee.getEmail()}
    ${employee.getSchool()}
    </div>
    </div>
    `
   }
   else if (employee.getRole() === "engineer") {
   return `
   <div class="col">
    ENGINEER
    ${employee.getName()}
    ${employee.getId()}
    ${employee.getEmail()}
    ${employee.getGithub()}
    </div>
   `
   }

   
   
  })
  function generateTeam(){
    if (!fs.existsSync(DIST_DIR)){
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(inquirerResponses), "utf-8");
    }
    
}

managerQ().then(employeeQ);
