
void function () {
  const testModule1 = new Module1().populateTestData();

  // getEmployeeInfo exists
  console.assert(typeof testModule1.getEmployeeInfo === 'function', 'getEmployeeInfo is not found');

  // getEmployeeInfo returns data
  const data = testModule1.getEmployeeInfo(3);
  console.assert(data.indexOf('Name: Alice') > 0, 'no name in the output data');
  console.assert(data.indexOf('Surname: Merton') > 0, 'no surname in the output data');
  console.assert(data.indexOf('Age: --') > 0, 'no age in the output data');
}();
