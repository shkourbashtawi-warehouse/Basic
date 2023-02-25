const Button = require('../../../Structures/Button');
module.exports = class TestButton extends Button {
  constructor(client) {
    super(client, {
      id: 'testbutton',
    });
  }
  async run(client, interaction) {}
};
