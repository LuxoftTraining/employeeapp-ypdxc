void function (module) {
  module.prototype.getAge = function (id) {
    const employee = this.data.employees.find((employee) => employee.id === id);

    if (employee) {
      const today = new Date();
      const birthday = employee.dateOfBirth;

      if (birthday) {
        const years = today.getUTCFullYear() - birthday.getUTCFullYear();
        const months = today.getUTCMonth() - birthday.getUTCMonth();
        const days = today.getUTCDate() - birthday.getUTCDate();
        return months <= 0 && days <= 0 ? years - 1 : years;
      }
    }

    throw new Error('employee not found');
  }
}(Module1);
