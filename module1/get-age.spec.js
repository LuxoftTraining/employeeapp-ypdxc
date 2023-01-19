
void function () {
  const testModule1 = new Module1().populateTestData();

  // getAge exists
  console.assert(typeof testModule1.getAge === 'function', 'getAge is not found');

  // case #1 birthday has passed
  {
    const today = new Date();
    const birthday = new Date(new Date(today.getFullYear() - 20, today.getMonth(), today.getDate()).getTime() - 1000 * 3600 * 24);
    testModule1.setDateOfBirth(1, birthday);
    console.assert(testModule1.getAge(1) === 20, 'wrong age when birthday has passed');
  }

  // case #2 birthday today
  {
    const today = new Date();
    const birthday = new Date(new Date(today.getFullYear() - 20, today.getMonth(), today.getDate()).getTime());
    testModule1.setDateOfBirth(2, birthday);
    console.assert(testModule1.getAge(2) === 20, 'wrong age when birthday is today');
  }

  // case #3 birthday is tomorrow
  {
    const today = new Date();
    const birthday = new Date(new Date(today.getFullYear() - 20, today.getMonth(), today.getDate()).getTime() + 1000 * 3600 * 24);
    testModule1.setDateOfBirth(3, birthday);
    console.assert(testModule1.getAge(3) === 19, 'wrong age when birthday is tomorrow');
  }

  // fail for the missing employee
  try {
    testModule1.getAge(-2);
    console.assert(false, 'no error when employee not found');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }
}();
