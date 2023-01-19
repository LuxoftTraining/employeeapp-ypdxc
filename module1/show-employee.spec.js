void function () {
  const testModule1 = new Module1().populateTestData();

  // showEmployee exists
  console.assert(typeof testModule1.showEmployee === 'function', 'showEmployee is not found');

  // no error with real id
  testModule1.showEmployee(2);

  // no error with errornous id
  testModule1.showEmployee(-1);
}();
