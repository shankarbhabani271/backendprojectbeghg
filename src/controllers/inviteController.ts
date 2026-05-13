import crypto from "crypto";
import Invite from "../models/invite.model.js";
import sendInviteEmail from "../utils/sendInviteEmail.js";

export const sendInviteLink = async (
  req: any,
  res: any
) => {
  try {
    const { email } = req.body;

    const token = crypto
      .randomBytes(32)
      .toString("hex");

    // ngrok/public URL here
const link = `http://192.168.1.10:5173/register/${token}`;

    await Invite.create({
      email,
      token,
      expiresAt: Date.now() + 3600000
    });

    await sendInviteEmail(email, link);

    res.json({
      success: true,
      message: "Registration link sent successfully"
    });

  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};