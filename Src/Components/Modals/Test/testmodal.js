const Modal = require('../../../Structures/Modal');
module.exports = class TestModal extends Modal {
  constructor(client) {
    super(client, {
      id: 'testmodal',
    });
  }
  async run(client, interaction) {
  }
};