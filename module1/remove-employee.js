void function (module) {
  module.prototype.removeEmployee = function (id) {
    const index = this.data.employees.findIndex((employee) => employee.id === id);
    if (index >= 0) {
      this.data.employees.splice(index, 1);
    }
  }
}(Module1);
