
void function (module) {
  module.prototype.showEmployees = function (id) {
    for (let employee of this.data.employees) {
      console.log(employee);
    }
  }
}(Module1);
