import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    default:"admin@123"
  },

  role: {
    type: String,
    enum: ["admin", "employee"],
    default: "employee"
  }
});

export default mongoose.model("User", userSchema);