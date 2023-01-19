
void function (module) {
  module.prototype.getEmployeeJSON = function (id) {
    const employee = this.findById(id);

    if (employee != null) {
      return JSON.stringify(employee);
    }

    throw new Error('this employee not found');
  }
}(Module1);
