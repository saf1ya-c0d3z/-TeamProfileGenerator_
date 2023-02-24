const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school);
    this.school = school
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

const intern = new Intern("Meghan", "49", "meggomonster@comcast.net", "University of Oklahoma");
console.log(intern)
intern.getRole();
console.log(intern.getId())
console.log(intern.getEmail())
console.log(intern.getSchool());
module.exports = Intern;
