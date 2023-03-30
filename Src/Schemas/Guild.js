const mongoose = require('mongoose');
const GuildSchema = mongoose.Schema({
  guildId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('guilds', GuildSchema);
