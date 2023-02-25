const mongoose = require('mongoose');
const Event = require('../../Structures/Event');
require('dotenv').config();
module.exports = class Ready extends Event {
  constructor(...args) {
    super(...args);
  }

  async run() {
    if (this.client.config.Danger.MongoDB) {
      mongoose
        .connect(this.client.config.Danger.MongoDB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => this.client.logger.ready('Connected to MongoDB'));
    } else this.client.logger.warn('MongoDB URL missing');
    this.client.logger.ready('%s is online', this.client.user.username);
    this.client.user.setActivity('Basic Bot', {
      type: this.client.Discord.ActivityType.Watching,
    });
  }
};
