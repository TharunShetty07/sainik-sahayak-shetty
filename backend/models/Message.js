// models/Message.js

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderRole: String,         // e.g., "admin" or "family"
  senderId: String,           // e.g., "admin" or "family123"
  receiverId: String,         // e.g., "family123" or "admin"
  message: String,            // The actual message content
  timestamp: {
    type: Date,
    default: Date.now         // Automatically records time
  }
});

module.exports = mongoose.model('Message', messageSchema);
