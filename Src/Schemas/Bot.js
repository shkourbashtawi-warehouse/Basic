const mongoose = require('mongoose');
const BotSchema = mongoose.Schema({
  BotName: {
    type: mongoose.SchemaTypes.String,
    default: 'Bot',
  },

  toggleCommands: {
    type: mongoose.SchemaTypes.Array,
    default: [],
  },

  Maintenance: {
    toggleStatus: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    CheckStatus: {
      type: mongoose.SchemaTypes.String,
      default: 'Maintenance',
    },
  },
});

module.exports = mongoose.model('bot', BotSchema);
