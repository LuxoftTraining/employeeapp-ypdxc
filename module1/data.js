
void function (module) {
  module.prototype.populateTestData = function () {
    [
      'Peter Peterson IT',
      'Yury Papou IT',
      'Alice Merton HR',
      'Bruce Wayne Managers',
      'Linus Torvalds Managers',
      'Sheldon Cooper RnD',
    ]
      .map((item) => item.split(' '))
      .forEach((item, index) => this.data.employees.push({ id: index + 1, name: item[0], surname: item[1], department: item[2] }));

    return this;
  }
}(Module1);
