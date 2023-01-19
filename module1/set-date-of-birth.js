
void function (module) {
  module.prototype.setDateOfBirth = function (id, date) {
    if (date == null || !(date instanceof Date)) {
      throw new Error('date is not valid')
    }

    const employee = this.data.employees.find((employee) => employee.id === id);
    if (employee) {
      employee.dateOfBirth = date;
      return employee;
    }

    throw new Error('employee not found');
  }
}(Module1);
