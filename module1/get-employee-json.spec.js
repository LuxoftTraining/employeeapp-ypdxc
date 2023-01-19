
void function () {
  const testModule1 = new Module1().populateTestData();

  // getEmployeeJSON exists
  console.assert(typeof testModule1.getEmployeeJSON === 'function', 'getEmployeeJSON is not found');

  // getEmployeeJSON returns data
  console.assert(JSON.parse(testModule1.getEmployeeJSON(3)).id === 3, 'JSON parsing error');
}();
