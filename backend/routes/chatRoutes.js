const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// ✅ Send a message
router.post('/send', async (req, res) => {
  const { senderRole, senderId, receiverId, message } = req.body;

  // Validate required fields
  if (!senderRole || !senderId || !receiverId || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newMessage = new Message({
      senderRole,
      senderId,
      receiverId,
      message,
      timestamp: Date.now(),
    });

    await newMessage.save();

    console.log(`📩 New message from ${senderRole} (${senderId}) to ${receiverId}`);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('❌ Error sending message:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// ✅ Get messages between admin and a family member
router.get('/:familyId', async (req, res) => {
  const { familyId } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { senderId: 'admin', receiverId: familyId },
        { senderId: familyId, receiverId: 'admin' },
      ],
    }).sort({ timestamp: 1 });

    console.log(`📨 Fetched ${messages.length} messages with ${familyId}`);

    res.status(200).json(messages);
  } catch (error) {
    console.error('❌ Error fetching messages:', error.message);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
