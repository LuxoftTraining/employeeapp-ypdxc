
void function () {
  const testModule1 = new Module1().populateTestData();

  // addPhone exists
  console.assert(typeof testModule1.addPhone === 'function', 'addPhone is not found');

  // add addPhone
  console.assert(testModule1.addPhone(2, '777')?.phones?.[0] === '777', 'adding a phone op is failed');

  // fail to add a phone without the phone number
  try {
    testModule1.addPhone(2, '');
    console.assert(false, 'no error when the data is incomplete');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }

  // fail to add a phone for missing employee
  try {
    testModule1.addPhone(-2, '777');
    console.assert(false, 'no error when employee not found');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }

}();
