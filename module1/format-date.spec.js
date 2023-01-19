
void function () {
  // formatDate exists
  console.assert(typeof Module1.formatDate === 'function', 'formatDate is not found');

  // formatting date
  console.assert(Module1.formatDate(new Date(2000, 0, 1)) === '01.01.2000', 'wrong date format');

  // error for wrong date
  try {
    Module1.formatDate('777');
    console.assert(false, 'no error for wrong date');
  } catch (ex) {
    //TODO: check if ex has a proper type
  }
}();
