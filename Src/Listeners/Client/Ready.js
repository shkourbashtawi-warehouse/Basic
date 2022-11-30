const Event = require('../../Structures/Event');
require('dotenv').config();
module.exports = class Ready extends Event {
  constructor(...args) {
    super(...args);
  }

  async run() {
    this.client.logger.ready('%s is online', this.client.user.username);
    this.client.user.setActivity('Basic Bot', {
      type: this.client.Discord.ActivityType.Watching,
    });
  }
};
