const webhookSender = require('../Utils/webhookSender');
module.exports = class Event {
  constructor(client, file, options = {}) {
    this.client = client;
    this.name = options.name || file.name;
    this.file = file;
    this.webhookSender = webhookSender;
  }

  async _run(...args) {
    try {
      await this.run(...args);
    } catch (error) {
      this.client.logger.error(error);
    }
  }

  reload() {
    const path = `../Listeners/${this.name}.js`;
    delete require.cache[path];
    require(`../Listeners/${this.name}.js`);
  }
};
