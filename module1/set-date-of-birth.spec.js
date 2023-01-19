
void function () {
  const testModule1 = new Module1().populateTestData();

  // setDateOfBirth exists
  console.assert(typeof testModule1.setDateOfBirth === 'function', 'addPhone is not found');

  // set the date
  const birthday = new Date(1980, 0, 1)
  console.assert(
    testModule1.setDateOfBirth(2, birthday)?.dateOfBirth.toDateString() === birthday.toDateString(),
    'adding a phone op is failed'
  );

  // fail to set the wrong date
  try {
    testModule1.setDateOfBirth(2, '1980');
    console.assert(false, 'no error when the date is wrong');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }

  // fail to to set for missing employee
  try {
    testModule1.setDateOfBirth(-2, new Date(1980, 0, 1));
    console.assert(false, 'no error when employee not found');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }
}();
