void function (module) {
  module.prototype.showEmployee = function (id) {
    const employee = this.data.employees.find((employee) => employee.id === id);
    if (employee != null) {
      console.log(employee);
    }
  }
}(Module1);
