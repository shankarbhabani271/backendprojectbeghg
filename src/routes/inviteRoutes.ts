import express from "express";
import { sendInviteLink } from "../controllers/inviteController.js";

const router = express.Router();

router.post("/send-link", sendInviteLink);

export default router;