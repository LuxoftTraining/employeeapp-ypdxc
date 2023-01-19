void function (module) {
  module.prototype.addEmployee = function (name, surname) {
    if (name == null || name === "" || surname == null || surname === "") {
      throw new Error('both name and surname must be provided');
    }
    this.data.employees.push({
      id: Math.max(...this.data.employees.map((employee) => employee.id)) + 1,
      name,
      surname,
      department: null
    });
    return this.data.employees[this.data.employees.length - 1];
  }
}(Module1);

