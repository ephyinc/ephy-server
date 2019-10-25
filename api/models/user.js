const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nickname: String,
  username: String,
  password: String,
  email: String,
  type: String,
  created_on: { type: Date, default: Date.now },
  channels: { type: Array, default: {} },
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
