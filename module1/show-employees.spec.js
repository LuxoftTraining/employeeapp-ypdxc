void function () {
  const testModule1 = new Module1().populateTestData();

  // showEmployees exists
  console.assert(typeof testModule1.showEmployees === 'function', 'showEmployees is not found');

  // showEmployees executes with no error
  testModule1.showEmployees();
}();
