import express from "express";
import ChatMessage from "../models/ChatMessage.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const { senderId, senderName, senderRole, receiverId, receiverRole, message } = req.body;
    const newMessage = new ChatMessage({ senderId, senderName, senderRole, receiverId, receiverRole, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/admin", async (req, res) => {
  try {
    const messages = await ChatMessage.find({ receiverRole: "admin" }).sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
