import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  senderId: String,
  senderName: String,
  senderRole: String,
  receiverId: String,
  receiverRole: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("ChatMessage", chatMessageSchema);
