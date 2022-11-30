const Command = require('../../Structures/Command');
module.exports = class TestDev extends Command {
  constructor(client) {
    super(client, {
      name: 'test',
      description: {
        content: 'Some commands for developers.',
      },
      category: 'Developer',
      permissions: {
        dev: true
      },
    });
  }

  async run(client, ctx) {
  }
};
