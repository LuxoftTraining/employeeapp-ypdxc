void function () {
  const testModule1 = new Module1().populateTestData();

  // removeEmployee exists
  console.assert(typeof testModule1.removeEmployee === 'function', 'removeEmployee is not found');

  // employee is removed
  testModule1.removeEmployee(1);
  console.assert(testModule1.findByName().length === 5, 'failed to remove employee');

  // no error on wrong index
  testModule1.removeEmployee(-1);
  console.assert(testModule1.findByName().length === 5, 'some record(s) was removed');
}();
