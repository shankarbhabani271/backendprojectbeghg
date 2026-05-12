import express from "express";
import {
  createProfileDetails
} from "../controllers/password.controller.js";

const router = express.Router();

router.post(
  "/create-profile",
  createProfileDetails
);

export default router;