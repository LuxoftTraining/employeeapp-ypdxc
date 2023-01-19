
void function (module) {
  module.prototype.getEmployeeInfo = function (id) {
    const employee = this.findById(id);

    if (employee != null) {
      const dateOfBirth = employee.dateOfBirth != null ? module.formatDate(employee.dateOfBirth) : '--';
      const phones = employee.phones != null ? employee.phones.join(', ') : '--';
      const age = employee.dateOfBirth != null ? this.getAge(employee.id, employee.dateOfBirth) : '--';

      return `
        Name: ${employee.name} 
        Surname: ${employee.surname} 
        Date of birth: ${dateOfBirth} 
        Phones: ${phones}  
        Age: ${age}
      `.replaceAll('        ', '');
    }

    throw new Error('this employee not found');
  }
}(Module1);
