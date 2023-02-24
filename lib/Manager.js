const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber
  }
  getRole() {
    return "Manager";
  }
  getOfficeNum() {
    return this.officeNumber;
  }
}

const manager = new Manager("Jake", "8392", "jake.jojo@yahoo.org", "4");
console.log(manager)
manager.getRole();
console.log(manager.getId())
console.log(manager.getEmail())
console.log(manager.getOfficeNum());

module.exports = Manager;
