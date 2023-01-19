void function () {
  const testModule1 = new Module1().populateTestData();

  // addEmployee exists
  console.assert(typeof testModule1.addEmployee === 'function', 'addEmployee is not found');

  // add employee
  console.assert(testModule1.addEmployee('Bill', 'Gates').name === 'Bill', 'adding employee is failed');
  console.assert(testModule1.findByName('Bill', 'Gates').length === 1, 'added employee is not found');

  // adding error if not all data is provided
  try {
    testModule1.addEmployee('Test');
    console.assert(false, 'no error when the data is incomplete');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }
}();
