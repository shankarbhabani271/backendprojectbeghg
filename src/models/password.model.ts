import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String
    },

    mobile: {
      type: String,
      required: true
    },

    bloodGroup: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "PasswordProfile",
  passwordSchema
);