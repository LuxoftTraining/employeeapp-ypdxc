void function () {
  const testModule1 = new Module1().populateTestData();

  // findByName exists
  console.assert(typeof testModule1.findByName === 'function', 'findByName is not found');

  // only by the name 
  console.assert(testModule1.findByName('Yury').length === 1, 'findByName using only the name is failed');

  // only by the surname
  console.assert(testModule1.findByName(null, 'Papou').length === 1, 'findByName using only the surname is failed');

  // by name and surname
  console.assert(testModule1.findByName('Yury', 'Papou').length === 1, 'findByName using name and surname is failed');

  // empty search
  console.assert(testModule1.findByName().length === 6, 'findByName empty search');

  // wrong name
  console.assert(testModule1.findByName('WrongName').length === 0, 'findByName with wrong name');

  // wrong surname
  console.assert(testModule1.findByName(null, 'WrongSurname').length === 0, 'findByName with wrong surname');

  // wrong name and surname
  console.assert(testModule1.findByName('WrongName', 'WrongSurname').length === 0, 'findByName with wrong name and surname');
}();
