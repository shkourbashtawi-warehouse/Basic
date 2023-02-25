const Menu = require('../../../Structures/Menu');
module.exports = class TestMenu extends Menu {
  constructor(client) {
    super(client, {
      id: 'testmenu',
    });
  }
  async run(client, interaction) {}
};
