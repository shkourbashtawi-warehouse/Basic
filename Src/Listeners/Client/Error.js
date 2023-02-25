const Event = require('../../Structures/Event');
class Error extends Event {
  constructor(...args) {
    super(...args);
  }

  async run(e) {
    this.client.logger.error('Fatal Error!', e.stack);
  }
}
module.exports = Error;