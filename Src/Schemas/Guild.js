const mongoose = require('mongoose');
const GuildSchema = mongoose.Schema({
  guildId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },

  autoLine: {
    toggleStatus: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    lineURL: {
      type: mongoose.SchemaTypes.String,
      default: null,
    },
    count: {
      type: mongoose.SchemaTypes.Number,
      default: 0,
    },
    dataChannel: {
      type: mongoose.SchemaTypes.Array,
      default: [],
    },
  },
});

module.exports = mongoose.model('guilds', GuildSchema);
