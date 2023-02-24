const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email, gitHub);
    this.gitHub = gitHub  
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.gitHub;
  }
}

const engineer = new Engineer("Whiston", "97771", "Whiston.0lD@hotmail.com", "whiston-435");
console.log(engineer)
engineer.getRole();
console.log(engineer.getId())
console.log(engineer.getEmail())
console.log(engineer.getGithub())
module.exports = Engineer;