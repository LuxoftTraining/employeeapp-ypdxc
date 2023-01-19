void function (module) {
  module.formatDate = function (date) {
    if (date == null || !(date instanceof Date)) {
      throw new Error('date is not valid')
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
}(Module1);
