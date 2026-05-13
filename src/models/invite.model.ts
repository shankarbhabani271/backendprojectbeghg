import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema({
  email: String,
  token: String,
  expiresAt: Date
});

export default mongoose.model("Invite", inviteSchema);