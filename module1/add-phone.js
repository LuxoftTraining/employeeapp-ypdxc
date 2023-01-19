
void function (module) {
  module.prototype.addPhone = function (id, phone) {
    if (phone == null || phone === '') {
      throw new Error('phone number is required')
    }

    const employee = this.data.employees.find((employee) => employee.id === id);
    if (employee) {
      employee.phones ||= [];
      employee.phones.push(phone);
      return employee;
    }

    throw new Error('employee not found');
  }
}(Module1);

