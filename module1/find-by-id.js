
void function (module) {
  module.prototype.findById = function (id) {
    let result = this?.idxId?.[id];

    if (result == null) {
      // record not found in the index, maybe index is out of date
      // rebuilding index ((
      this.idxId = {};
      for (let employee of this.data.employees) {
        this.idxId[employee.id] = employee;

        if (employee.id === id) {
          result = employee;
        }
      }
    }

    return result ?? null;
  }
}(Module1);
