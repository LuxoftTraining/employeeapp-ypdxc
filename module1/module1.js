'use strict';

function Module1() {
  if (new.target == null) {
    return new Module1(testData);
  }

  this.data = {
    employees: []
  }

}

function testEmployee() {
  const module = new Module1().populateTestData();
  module.addPhone(2, '48 555555');
  module.addPhone(2, '48 777777');
  module.setDateOfBirth(2, new Date(2000, 0, 1));

  return module;
}