const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },

  blacklist: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

module.exports = mongoose.model('users', UserSchema);
