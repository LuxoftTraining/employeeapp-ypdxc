
void function () {
  const testModule1 = new Module1().populateTestData();

  // findById exists
  console.assert(typeof testModule1.findById === 'function', 'findById is not found');

  // works for right user id
  console.assert(testModule1.findById(2)?.name === 'Yury', 'findById failed to find a user');

  // return null for a wrong id
  console.assert(testModule1.findById(-5) === null, 'unexpected result for wrong use if');

  // index search
  testModule1.findById(3); // building index
  console.assert(testModule1.findById(3)?.name === 'Alice', 'findById failed to find a user using index');

  // outdated index search
  const newEmployee = testModule1.addEmployee('New', 'Employee');
  console.assert(testModule1.findById(newEmployee.id) === newEmployee, 'findById failed to find a user with outdated index');

  // employee mutation
  testModule1.findById(3).test = true;  // mutation
  console.log(testModule1.findById(-1)); // index resetting
  console.assert(testModule1.findById(3)?.test === true, 'failed to mutate object')
}();
