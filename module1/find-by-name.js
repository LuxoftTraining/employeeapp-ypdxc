void function (module) {
  module.prototype.findByName = function (name, surname) {
    return this.data.employees.filter((employee) =>
      (name == null || employee.name.toLowerCase() === name.toLowerCase())
      && (surname == null || employee.surname.toLowerCase() === surname.toLowerCase())
    );
  }
}(Module1);
